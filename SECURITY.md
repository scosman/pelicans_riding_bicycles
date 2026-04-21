# Security Policy

## Reporting a Vulnerability

The Pelicans Riding Bicycles Enthusiasts Club (PRBEC) takes the security of its pelicans seriously. We are committed to operating a responsible disclosure program, a rigorous threat model, and a pelican-first incident response posture.

## Supported Versions

| Pelican | Security Support |
| ------- | ---------------- |
| #1      | Supported        |
| #2      | Supported        |
| #3      | Supported        |
| #4      | Supported        |
| #5      | Supported        |

All extant pelicans in the repository are actively supported. Historical pelicans that have been superseded remain supported on a best-effort basis out of respect.

## In Scope

- Any SVG in this repository that, when rendered in a reasonable modern browser, executes arbitrary JavaScript, exfiltrates data, or escapes the SVG sandbox.
- Any SVG that contains or references external resources (remote stylesheets, remote images, remote fonts, remote anything).
- Any SVG that contains embedded tracking pixels, beacons, or telemetry of any kind.
- Any SVG that, through creative use of `<foreignObject>` or similar, causes user harm.
- Any file in this repository that is not what it claims to be (e.g., an `.svg` file that is secretly an executable, a polyglot, or a zip bomb).
- Any supply-chain concern affecting the repository's build or distribution (there is no build; this is static SVGs; but we remain alert).

## Out of Scope

- The pelican being anatomically implausible. This is a curatorial concern, not a security concern. File it as an issue, not a CVE.
- The bicycle having three wheels. See above.
- Third parties producing low-quality derivative pelicans inspired by this repository. Derivative work is out of PRBEC's threat model and PRBEC makes no representations about downstream pelican quality.
- Denial of service via extremely large SVGs. If a pelican exceeds our 100KB size guideline (see `CONTRIBUTING.md`), report it as a style issue.
- Social engineering attempts in which a threat actor impersonates a pelican. Pelicans do not have GitHub accounts. Anyone claiming to be a pelican is a human and should be treated as such.

## How to Report

Please open a **private** security advisory via GitHub's security advisory feature on this repository. Do not open a public issue for security matters.

If the repository's security advisory feature is unavailable, email the maintainer listed in the commit log. Encrypt if you must, though frankly the subject matter rarely warrants it.

## Response Timeline

We endeavor to acknowledge reports within **7 calendar days** and to resolve in-scope issues within **30 calendar days**. These timelines are best-effort and may be affected by the migratory status of the maintainer.

## Acknowledgments

Security researchers who responsibly disclose valid vulnerabilities will, with their consent, be acknowledged in the repository's `CHANGELOG.md` (if such a file exists at the time of disclosure) or in a dedicated `SECURITY-THANKS.md`. Monetary bounties are not offered. Honorary PRBEC membership may be offered at the discretion of the maintainers.
