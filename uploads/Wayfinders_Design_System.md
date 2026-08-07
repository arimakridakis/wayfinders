# Wayfinders Design System

## A Design Philosophy for Astro Components

## The Core Problem

The current Astro implementation correctly reproduces the **content
structure** of the Squarespace site, but not its **design language**.

The existing taxonomy classifies content into structural section types:

  \#   Section Type
  ---- ---------------------
  1    Simple / Split Hero
  2    Narrow Prose
  3    Text + Image
  4    Image Placeholder
  5    Card Grid
  6    Key Details
  7    Disclosure List
  8    Image Gallery
  9    Callout
  10   Call To Action

This taxonomy is useful, but it is only half of the design system.

It tells Codex **what content exists**, but not **how that content
should feel**.

The result is pages that are technically correct but visually flat.

------------------------------------------------------------------------

# The Missing Layer

Every section needs both:

    Content Type
    +
    Presentation Pattern

Instead of merely rendering a Card Grid, Hero, or Text/Image block, each
section should be assigned a visual presentation pattern that defines
spacing, typography, image treatment, color, hierarchy, and overall
visual weight.

The goal is not to recreate Squarespace.

The goal is to build a consistent editorial design language that can be
reused across the entire Astro site.

------------------------------------------------------------------------

# Overall Design Philosophy

Design pages that read like an editorial magazine rather than a software
dashboard.

Every section should have its own visual identity while remaining part
of one coherent design system.

The page should feel composed rather than assembled.

Favor:

-   generous whitespace
-   strong typography
-   varied layouts
-   photography as a structural element
-   restrained decorative elements
-   visual rhythm

Avoid repeating identical layouts throughout a page.

No two adjacent sections should feel visually identical.

------------------------------------------------------------------------

# The Importance of Rhythm

The existing pages have very little visual rhythm.

Every section has:

-   similar padding
-   similar typography
-   similar background
-   similar proportions
-   similar visual weight

As a result, every section feels equally important.

Instead, pages should alternate between heavy and light visual moments.

Example:

1.  Full-width hero
2.  Floating cards
3.  Large editorial split
4.  Icon feature strip
5.  Image-driven feature
6.  FAQ
7.  Strong closing CTA

Think of the page like music.

The visual weight should rise and fall.

------------------------------------------------------------------------

# Presentation Patterns

## Pattern A --- Full Bleed Hero

Use for page openings.

Characteristics:

-   full-width photography
-   subtle dark gradient overlay
-   display heading
-   eyebrow text
-   short introduction
-   one primary CTA
-   generous vertical spacing

------------------------------------------------------------------------

## Pattern B --- Centered Intro

Characteristics:

-   centered heading
-   short supporting paragraph
-   minimal decoration
-   lots of whitespace

------------------------------------------------------------------------

## Pattern C --- Floating Card Grid

Use for programs, offerings, or peer content.

Cards should include:

-   large icon
-   eyebrow
-   heading
-   supporting details
-   primary button
-   generous padding
-   large border radius (24--32px)
-   soft shadow
-   subtle hover elevation

Cards should feel like objects rather than containers.

------------------------------------------------------------------------

## Pattern D --- Editorial Split

One side image.

One side text.

Characteristics:

-   asymmetrical layout
-   vertically centered content
-   large heading
-   restrained body copy
-   image fills available space
-   rounded image corners

------------------------------------------------------------------------

## Pattern E --- Feature Icons

Use for benefits, values, or experiences.

Characteristics:

-   centered heading
-   evenly spaced icons
-   concise copy
-   minimal framing

------------------------------------------------------------------------

## Pattern F --- Contrast Split

One side text.

One side immersive photography.

Background changes from previous section.

Creates visual emphasis.

------------------------------------------------------------------------

## Pattern G --- Callout Band

Short transitional section.

Contains:

-   concise announcement
-   optional icon
-   optional button

Should immediately attract attention.

------------------------------------------------------------------------

## Pattern H --- FAQ

Large heading.

Two-column accordion on desktop.

Comfortable spacing.

Minimal decoration.

------------------------------------------------------------------------

## Pattern I --- Gallery Strip

Use wide photography.

Consistent crop ratios.

Rounded corners.

Photography should define the layout rather than decorate it.

------------------------------------------------------------------------

## Pattern J --- Closing CTA

Large image.

High contrast.

Large buttons.

Clear next step.

This should be one of the strongest visual moments on the page.

------------------------------------------------------------------------

# Typography

Create clear hierarchy.

Every major section should include:

-   small uppercase eyebrow
-   display heading
-   supporting sentence
-   body copy
-   action

Avoid large uninterrupted blocks of text.

Limit text width to approximately 60--70 characters.

Use generous spacing between headings and paragraphs.

------------------------------------------------------------------------

# Spacing

Sections should breathe.

Guidelines:

-   96--160px vertical padding
-   24--40px spacing between internal elements
-   generous margins
-   avoid sections touching visually

Each section should feel like its own chapter.

------------------------------------------------------------------------

# Cards

Cards should feel tactile.

Use:

-   24--32px border radius
-   subtle shadows
-   generous padding
-   icon-first hierarchy
-   hover elevation
-   restrained borders

Avoid plain rectangles containing only text.

------------------------------------------------------------------------

# Photography

Photography is not decoration.

Photography is architecture.

Use images as:

-   hero backgrounds
-   editorial split layouts
-   circular portraits
-   banner backgrounds
-   immersive feature panels

Avoid placing every image inside identical boxes.

------------------------------------------------------------------------

# Color Strategy

Alternate visual environments throughout the page.

Use combinations of:

-   warm cream
-   white
-   muted sage
-   forest green
-   warm tan
-   muted blue

Avoid long sequences where every section shares the same background.

------------------------------------------------------------------------

# Decorative Language

Use subtle organic accents:

-   botanical line illustrations
-   small leaf flourishes
-   fine dividers
-   restrained icons

These elements should soften the geometry without becoming decorative
clutter.

------------------------------------------------------------------------

# Component Design Rules

Each Astro component should implement this shared design language rather
than inventing its own styling.

Improving a component should improve every page that uses it.

Every component should expose options for:

-   background style
-   presentation pattern
-   spacing
-   image placement
-   alignment
-   card style
-   decorative accents

This creates a flexible system rather than one-off page layouts.

------------------------------------------------------------------------

# Goal

The objective is not merely to migrate content from Squarespace into
Astro.

The objective is to build a reusable editorial design system that makes
every page feel intentional, spacious, modern, and visually engaging
while maintaining a single coherent visual language across the entire
site.
