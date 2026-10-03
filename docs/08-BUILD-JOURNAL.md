# Build journal: Import Preview Tray

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A user needs to review proposed changes before importing a small JSON collection.

The main temptation was to make the project larger than its learning target. The useful boundary is **validation, preview and commit separation**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Separate preview from mutation

A preview is a proposed change that a person can inspect. The function returns data and never appends to the shelf. The explicit commit boundary makes it possible to prove that previewing twice has not imported twice. This also keeps parsing and ordinary validation errors away from the durable-looking shelf state.

**What a learner should challenge:** How would you detect a preview function that secretly mutated the shelf?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Choose all-or-nothing semantics

Accepted rows are shown for diagnosis but none enter the shelf while any rejection exists. This avoids a beginner wondering which subset succeeded and whether retrying will duplicate it. Partial import is a reasonable alternative only with a different contract, retry policy and clearer per-row outcomes.

**What a learner should challenge:** What must a partial-import retry know that this implementation does not need?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Bind approval to source and version

A preview is valid for one exact source string and one shelf version. Even a whitespace-only edit requires preview again, a deliberately conservative rule. The version check rejects a preview made against older shelf data. This is a local demonstration, not a multi-user transaction or server authorization mechanism.

**What a learner should challenge:** Why is disabling the button alone weaker than checking again inside commitImport?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `previewImport`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
