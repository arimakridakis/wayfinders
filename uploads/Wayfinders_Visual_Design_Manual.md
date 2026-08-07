# Wayfinders Visual Design Manual

## A Practical Design Guide for Humans and Codex

> **Purpose**
>
> This document is the canonical visual reference for the Wayfinders
> website. It defines not only what components exist, but how they
> should look, feel, combine, and evolve. When in doubt, follow this
> document rather than reproducing the original Squarespace layout.

------------------------------------------------------------------------

# Design Goal

The website should feel like a beautifully designed nature magazine.

Not a dashboard.

Not a marketing template.

Not a collection of stacked content blocks.

The experience should alternate between moments of quiet, immersion,
information, and action.

The Basecamp mockups are the visual north star for every page.

------------------------------------------------------------------------

# Design DNA

Every page should express these qualities.

• Warm, calm, human

• Spacious

• Editorial

• Nature-inspired

• Crafted rather than generated

• Modern without feeling corporate

------------------------------------------------------------------------

# Visual Rhythm

The biggest difference between an average website and an excellent one
is rhythm.

Avoid long runs of visually identical sections.

Instead alternate:

Large

↓

Small

↓

Light

↓

Dark

↓

Photography

↓

Cards

↓

Editorial split

↓

Icons

↓

CTA

Think of each section as a chapter in a story.

------------------------------------------------------------------------

# Typography Scale

## Eyebrow

Small uppercase.

Letter spacing.

Muted color.

Used above every major heading.

Example:

GROWING COMMUNITY TOGETHER

------------------------------------------------------------------------

## Display Heading

Largest type on the page.

Elegant serif.

Usually 48--72px desktop.

Used only once or twice.

------------------------------------------------------------------------

## Section Heading

Approximately 36--48px.

High contrast.

Comfortable line height.

------------------------------------------------------------------------

## Card Title

24--32px.

Bold.

Very readable.

------------------------------------------------------------------------

## Body

18--20px.

Maximum line length of 60--70 characters.

------------------------------------------------------------------------

## Caption

14--16px.

Muted.

------------------------------------------------------------------------

# Spacing System

Use a consistent spacing scale.

8

16

24

32

48

64

96

128

160

Typical section padding:

Top: 96--160px

Bottom: 96--160px

Never compress sections simply to reduce scrolling.

Whitespace is part of the design.

------------------------------------------------------------------------

# Color Tokens

Primary Background

Warm Cream

Secondary

White

Accent

Muted Sage

Dark

Forest Green

Warm Accent

Earth Tan

Cool Accent

Slate Blue

Backgrounds should alternate throughout a page.

------------------------------------------------------------------------

# Component Catalog

## Hero

Visual Weight: Very High

Contains:

• full-width image

• eyebrow

• display heading

• supporting copy

• CTA

Variants:

• centered

• split

• full image

• minimal

------------------------------------------------------------------------

## Editorial Split

Visual Weight: High

One image.

One text block.

Image occupies roughly half the layout.

Text vertically centered.

Never crowd the copy.

------------------------------------------------------------------------

## Floating Card Grid

Visual Weight: Medium

Cards should include:

• icon

• eyebrow

• heading

• body

• metadata

• CTA

Design:

• radius 24--32px

• soft shadow

• generous padding

• subtle hover lift

------------------------------------------------------------------------

## Feature Icons

Visual Weight: Low

Six or fewer features.

Simple icons.

Very concise copy.

Centered layout.

------------------------------------------------------------------------

## Gallery

Images should feel curated.

Avoid arbitrary sizes.

Preferred layouts:

• panorama

• equal grid

• editorial collage

------------------------------------------------------------------------

## FAQ

Large heading.

Two columns on desktop.

Single column on mobile.

------------------------------------------------------------------------

## CTA Banner

Ends most pages.

High contrast.

Simple message.

One obvious action.

------------------------------------------------------------------------

# Page Templates

## Program Page

1 Hero

2 Program Cards

3 Community / Philosophy Split

4 Feature Icons

5 Gallery or Restoration Section

6 FAQ

7 Final CTA

------------------------------------------------------------------------

## About Page

1 Hero

2 Story

3 Editorial Split

4 Timeline or Values

5 Team

6 CTA

------------------------------------------------------------------------

## Landing Page

1 Hero

2 Intro

3 Card Grid

4 Benefits

5 Testimonials

6 CTA

------------------------------------------------------------------------

# Layout Rules

Never place:

Card Grid

followed by

Card Grid

Never place:

Editorial Split

followed by

Editorial Split

Alternate section styles continually.

------------------------------------------------------------------------

# Photography

Photography is architecture.

Use images to create structure.

Preferred uses:

• Hero backgrounds

• Split layouts

• Banners

• Portrait circles

• Full-width transitions

Avoid placing every image inside identical cards.

------------------------------------------------------------------------

# Decorative Elements

Use sparingly.

Examples:

• botanical line drawings

• leaves

• acorns

• thin dividers

• subtle flourishes

Decoration should support content---not compete with it.

------------------------------------------------------------------------

# Animation

Animation should feel natural.

Recommended:

• fade in

• fade up

• slight hover elevation

• gentle image zoom

Avoid dramatic motion.

------------------------------------------------------------------------

# Responsive Design

Do not merely shrink desktop.

Instead redesign.

Desktop: Editorial.

Tablet: Preserve hierarchy.

Mobile: Prioritize reading.

Maintain generous whitespace on all devices.

------------------------------------------------------------------------

# Good vs Bad

## Good

✓ Alternating backgrounds

✓ Large photography

✓ Strong hierarchy

✓ Generous spacing

✓ Distinct visual chapters

✓ Clear CTA

## Bad

✗ Endless white sections

✗ Repeated layouts

✗ Tiny headings

✗ Dense paragraphs

✗ Equal visual weight everywhere

✗ Decorative clutter

------------------------------------------------------------------------

# Component API Guidelines

Every Astro component should expose consistent controls.

Example:

    variant:
      hero
      editorial
      cards
      gallery
      feature

    background:
      cream
      white
      sage
      forest
      image

    spacing:
      compact
      normal
      spacious

    alignment:
      left
      center

    imagePosition:
      left
      right

    decorative:
      none
      botanical

    theme:
      light
      dark

This allows one component to produce many layouts without duplication.

------------------------------------------------------------------------

# Definition of Success

When a visitor scrolls through the site they should feel:

"I want to keep exploring."

Each section should feel intentional.

The entire site should feel like one unified publication rather than a
collection of independent pages.

If a new page can be assembled from the shared component library and
naturally resembles the Basecamp mockups without custom styling, then
the design system is succeeding.
