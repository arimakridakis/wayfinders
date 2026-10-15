import assert from 'node:assert/strict';
import { test } from 'node:test';
import scholarship from '../api/scholarship.ts';

const payload = { program: 'Rose Blossoms — Full journey', firstName: 'Test', lastName: 'Applicant', email: 'test@example.com', participantName: 'Test Participant', participantAge: '14', recaptchaToken: 'test-token' };
const request = (body = payload) => new Request('https://example.com/api/scholarship', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
const verified = { success: true, score: 0.9, action: 'program_scholarship', hostname: 'example.com' };

test('scholarship validation and delivery outcomes', async (t) => {
  const names = ['RECAPTCHA_SECRET_KEY', 'RESEND_API_KEY', 'REGISTRATION_FROM_EMAIL'];
  const previous = names.map(name => process.env[name]);
  names.forEach(name => { process.env[name] = 'test-placeholder'; });
  t.after(() => names.forEach((name, i) => { if (previous[i] === undefined) delete process.env[name]; else process.env[name] = previous[i]; }));
  await t.test('rejects unsupported methods', async () => {
    assert.equal((await scholarship.fetch(new Request('https://example.com/api/scholarship'))).status, 405);
  });
  await t.test('rejects malformed and incomplete payloads without external calls', async (t) => {
    t.mock.method(globalThis, 'fetch', () => { throw new Error('Unexpected external request'); });
    for (const body of [null, [], {}, { ...payload, email: 'invalid' }, { ...payload, participantAge: '121' }]) {
      assert.equal((await scholarship.fetch(request(body))).status, 400);
    }
  });
  await t.test('rejects failed verification and mismatched hostname or action', async (t) => {
    for (const response of [{ ...verified, score: 0.1 }, { ...verified, hostname: 'other.example' }, { ...verified, action: 'other' }]) {
      const mock = t.mock.method(globalThis, 'fetch', async () => Response.json(response));
      assert.equal((await scholarship.fetch(request())).status, 400);
      mock.mock.restore();
    }
  });
  await t.test('handles verification network failure', async (t) => {
    t.mock.method(globalThis, 'fetch', async () => { throw new Error('Network failed'); });
    assert.equal((await scholarship.fetch(request())).status, 502);
  });
  await t.test('sends notification and acknowledgment after verification', async (t) => {
    const messages = [];
    t.mock.method(globalThis, 'fetch', async (url, options) => {
      if (String(url).includes('siteverify')) return Response.json(verified);
      messages.push(JSON.parse(options.body));
      return Response.json({ id: 'test-message' });
    });
    assert.deepEqual(await (await scholarship.fetch(request())).json(), { ok: true, confirmationEmailSent: true });
    assert.equal(messages.length, 2);
    assert.deepEqual(messages[0].to, ['wayfindersonthehudson@gmail.com']);
    assert.deepEqual(messages[1].to, ['test@example.com']);
    assert.match(messages[0].text, /Rose Blossoms — Full journey/);
  });
  await t.test('reports failed notification delivery', async (t) => {
    t.mock.method(globalThis, 'fetch', async url => String(url).includes('siteverify') ? Response.json(verified) : Response.json({}, { status: 503 }));
    assert.equal((await scholarship.fetch(request())).status, 502);
  });
  await t.test('keeps accepted application successful if acknowledgment fails', async (t) => {
    let emails = 0;
    t.mock.method(console, 'error', () => {});
    t.mock.method(globalThis, 'fetch', async url => String(url).includes('siteverify') ? Response.json(verified) : Response.json({}, { status: ++emails === 1 ? 200 : 503 }));
    assert.deepEqual(await (await scholarship.fetch(request())).json(), { ok: true, confirmationEmailSent: false });
  });
});
