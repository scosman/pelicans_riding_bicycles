# Contributing to Pelicans Riding Bicycles

First: thank you. You are about to contribute to what is widely regarded as the world's premier vector-first, photorealistic, best-in-class, post-raster, cruelty-free, free-range, open-wings, open-wheels, open-pouch repository of pelicans riding bicycles (PRBs). The PRBEC (Pelicans Riding Bicycles Enthusiasts Club) is delighted to have you.

Contributions are welcome. They are also, candidly, essential to the continued dominance of PRBEC in the rapidly consolidating PRB-Industrial Complex.

## TL;DR

Yes, we accept PRs. Please read the rest of this document before opening one.

## The Mission

PRBEC curates the world's leading SVG-encoded representations of pelicans in the act of operating human-scale pedal-driven locomotion. Our work sits at the intersection of avian kinesiology, vector illustration, recreational cycling, and the open-source commons. We are pouch-forward, saddle-affirming, wheel-inclusive, and pelican-first.

If you do not understand any of the above, you are probably in the right place.

## Before You Contribute: Pelican Credentials

We are selective. The PRBEC technical bar is high. Before opening a PR, you (the contributor) must plausibly demonstrate **at least one** of the following pelican credentials:

1. **Ornithological standing.** You have a non-trivial personal or professional familiarity with *Pelecanus* (any species accepted, though *P. occidentalis* and *P. onocrotalus* are considered canonical). A photograph you personally took of a real pelican is acceptable evidence. Stock imagery is not.
2. **Cycling standing.** You have meaningfully ridden a bicycle within the last 24 months. A strava screenshot, a bike-shop receipt, or a scar constitutes acceptable evidence.
3. **Vector standing.** You can hand-author SVG without reaching for a WYSIWYG tool. Demonstrate by including at least one hand-written `<path d="...">` in your PR description.
4. **Enthusiast standing.** You have, at some point, thought unprompted about a pelican riding a bicycle and smiled. Self-certification is honored.

Meeting **one** is sufficient. Meeting zero is grounds for polite, friendly rejection. Self-certification is honored. We trust you.

## What We Accept

- **New pelicans.** Additional SVG pelicans riding bicycles. See "SVG Quality Standards" below.
- **Pelican improvements.** Fixes to existing pelicans (anatomical plausibility, wheel topology, beak curvature, saddle ergonomics).
- **README refinements.** Additional breathless superlatives about the existing pelicans.
- **Infrastructure.** Tooling that improves the curatorial pipeline without introducing dependencies (we are proudly zero-dependency — this is a folder of SVGs, let's keep it that way).

## What We Do Not Accept

- Raster images of pelicans riding bicycles (non-vector, non-canonical).
- Pelicans riding non-bicycle conveyances (unicycles, tricycles, scooters, e-bikes, penny-farthings, horses). These belong in sibling repositories that we do not maintain and cannot vouch for.
- Birds that are not pelicans riding bicycles (seagulls, herons, cormorants). A cormorant riding a bicycle is a fine thing, but it is not our thing.
- Pelicans not riding bicycles. A pelican standing next to a bicycle is, at best, pre-ride or post-ride — neither of which is in scope.
- Raster-then-traced SVGs that secretly encode a JPEG in a single `<image>` tag. We will know. We always know.

## SVG Quality Standards

Each accepted pelican must:

- Be a valid standalone `.svg` file that renders correctly in at least Chrome, Firefox, and Safari.
- Contain an identifiable pelican (beak, pouch, general pelican-shaped silhouette).
- Contain an identifiable bicycle (two wheels, frame, handlebars — saddle recommended but not strictly required).
- Depict the pelican in the act of *riding* — i.e., positioned on or astride the bicycle in a manner consistent with locomotion.
- Be under 100KB. If your pelican is over 100KB, your pelican is too detailed. Simplify.
- Not contain embedded JavaScript, external references, tracking pixels, or Web3 components of any kind.

Photorealism is permitted but not required. Abstract, impressionistic, cubist, and naïve-art pelicans are all welcome, provided they remain recognizable as pelicans on bicycles.

## PR Process

1. Fork the repository.
2. Add your pelican as `pelican_riding_bicycle_N.svg` where N is the next available integer.
3. Update `README.md` with a new section following the existing format. Feel free to match the tone.
4. Open a PR. In the description, attest to your pelican credential (see above) and briefly describe the provenance and artistic intent of your pelican.
5. A PRBEC maintainer will review. Review timelines are best-effort and governed by the migratory schedule of the reviewer.

## Commit Messages

Use the conventional form: `add pelican #N: <short distinctive descriptor>`. Prior commits follow this pattern and we would like to keep the git log beautiful.

## Licensing of Contributions

By contributing, you agree that your pelican is released under the repository license (see `LICENSE.md`). Do not submit pelicans you do not have the right to submit. We take this seriously even though we take very little else seriously.

## Code of Conduct

See `CODE_OF_CONDUCT.md`. Be kind to contributors. Be kind to pelicans. Be, within reason, kind to bicycles.

## Questions

Open an issue. Prefix the title with `[PRBEC]` so the club secretary can triage appropriately. There is no club secretary. The secretary is a pelican.
