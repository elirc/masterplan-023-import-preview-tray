# Code tour and architecture decisions

[Overview](../README.md) · [Concepts](02-CONCEPTS-AND-TRACES.md)

| File | Responsibility |
|---|---|
| [package.json](../package.json) | Names the module format, Node requirement and local commands; private prevents npm publication. |
| [.github/workflows/check.yml](../.github/workflows/check.yml) | Runs the committed checks on GitHub. A workflow file is not evidence that a remote run succeeded. |
| [public/index.html](../public/index.html) | Semantic content, controls and explicit IDs. |
| [public/style.css](../public/style.css) | Presentation, focus indication and project-specific layout. |
| [tools/serve.mjs](../tools/serve.mjs) | Local preview infrastructure; only public/ is served. |
| [tools/check-site.mjs](../tools/check-site.mjs) | Checks referenced local assets exist, without pretending to judge usability. |
| [public/core.js](../public/core.js) | The main input/output rule; no DOM access. |
| [public/app.js](../public/app.js) | Browser events, parsing, rendering and visible errors. |
| [test/core.test.js](../test/core.test.js) | Independent boundary examples for the core contract. |

## Follow one path, not every file

Start at [public/core.js](../public/core.js) and locate `previewImport`. Use this trace as a map: Preview → parse array → seed seen IDs from committed shelf → validate each row → freeze accepted candidate objects and preview metadata → render review only. Commit → compare exact source and version → reject any invalid rows → append copied accepted records to a new versioned shelf.

The tooling is intentionally separate from the product concept. You can study the local server or CI after the main rule is clear. Neither an HTTP preview server nor a workflow configuration should become a prerequisite for understanding an inline-block box or a small pure function.

## Decision: Separate preview from mutation

A preview is a proposed change that a person can inspect. The function returns data and never appends to the shelf. The explicit commit boundary makes it possible to prove that previewing twice has not imported twice. This also keeps parsing and ordinary validation errors away from the durable-looking shelf state.

**Review question:** How would you detect a preview function that secretly mutated the shelf?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Choose all-or-nothing semantics

Accepted rows are shown for diagnosis but none enter the shelf while any rejection exists. This avoids a beginner wondering which subset succeeded and whether retrying will duplicate it. Partial import is a reasonable alternative only with a different contract, retry policy and clearer per-row outcomes.

**Review question:** What must a partial-import retry know that this implementation does not need?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Bind approval to source and version

A preview is valid for one exact source string and one shelf version. Even a whitespace-only edit requires preview again, a deliberately conservative rule. The version check rejects a preview made against older shelf data. This is a local demonstration, not a multi-user transaction or server authorization mechanism.

**Review question:** Why is disabling the button alone weaker than checking again inside commitImport?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Change boundaries

A small change should begin in the file that owns its meaning. Change domain rules in the core, wording and interaction in the browser adapter, and layout in the relevant CSS rule. For the static references, semantic information belongs in HTML before styling. For the Git reference, the staged snapshot boundary belongs in the helper rather than being guessed from editor state.

If a story crosses two files, say why. A new unit, weather option or UI station may require a contract, a control and tests to change together. That is a coherent feature boundary, not permission to rewrite unrelated parts of the project.

## Deliberate limits

Persistence and frameworks are explicit where used: M019 saves a namespaced local draft; M024–M025 introduce React. The remaining builds use plain JavaScript and local data. M025 saved definitions last for the current session only. The preview server is a local development aid, not a production hosting system. A browser screenshot is one observation, not proof of every device or assistive technology. Keep these limits visible when describing your own work.
