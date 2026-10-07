# M023: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain preview snapshot through this project

The normalized candidate a user can inspect before applying it.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain commit precondition through this project

A fact that must still hold at the mutation boundary.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain atomic policy through this project

All rows succeed together or none commit.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain stale approval through this project

A decision made for data that has since changed.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: One valid and one invalid row

One accepted, one rejected; neither committed

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: Edit input after preview

Preview invalidated; commit unavailable

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: Shelf version changes after preview

Commit rejects stale preview until review is repeated

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** How would you detect a preview function that secretly mutated the shelf?

A preview is a proposed change that a person can inspect. The function returns data and never appends to the shelf. The explicit commit boundary makes it possible to prove that previewing twice has not imported twice. This also keeps parsing and ordinary validation errors away from the durable-looking shelf state.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** What must a partial-import retry know that this implementation does not need?

Accepted rows are shown for diagnosis but none enter the shelf while any rejection exists. This avoids a beginner wondering which subset succeeded and whether retrying will duplicate it. Partial import is a reasonable alternative only with a different contract, retry policy and clearer per-row outcomes.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Why is disabling the button alone weaker than checking again inside commitImport?

A preview is valid for one exact source string and one shelf version. Even a whitespace-only edit requires preview again, a deliberately conservative rule. The version check rejects a preview made against older shelf data. This is a local demonstration, not a multi-user transaction or server authorization mechanism.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** What observation proves that merely previewing a file did not mutate existing records?

Preview is a proposal, not a mutation. A person reviews one source string against one shelf version; changing either invalidates what was reviewed. The commit function must enforce that condition even when the interface disables a button. Accepted rows in a mixed preview are diagnostic information, not proof that a partial import occurred.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Add a commit-count receipt

**First hint:** The desired improvement is “Explain exactly what the successful operation added.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Derive count from the approved candidate; report new version; clear approval after success. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A second click cannot repeat the same approved import. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose receipt fields. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add a title-length rule

**First hint:** The desired improvement is “Practice extending row validation consistently.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Choose a length limit; validate normalized titles; show row-specific rejection. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: At-limit titles pass and over-limit rows block the whole import. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose counting semantics and limit. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Add a safe markup fixture

**First hint:** The desired improvement is “Verify imported titles remain data.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Preview a title containing angle brackets; render with text APIs; commit and inspect the shelf output. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: No imported string creates executable markup. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a harmless demonstration string. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Add a preview freshness label

**First hint:** The desired improvement is “Make version binding visible before commit.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Display reviewed and current versions; derive stale status; retain the core guard. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A changed shelf visibly requires another preview and cannot commit the old one. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose status wording. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Add an import source label

**First hint:** The desired improvement is “Help distinguish candidate files or pasted batches.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Accept a human label separate from row data; include it in review context; decide whether editing it invalidates approval. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The chosen label policy is documented and tested separately from item IDs. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose metadata versus approval semantics. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add a normalized-value comparison

**First hint:** The desired improvement is “Show trimmed IDs and titles before committing.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Keep original candidate fields for display only; show normalized accepted values; commit only the supported shape. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The reviewer can see when spaces were removed without extra fields entering the shelf. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the comparison layout. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Add an empty-shelf fixture

**First hint:** The desired improvement is “Check imports without existing records.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Start with a versioned empty items array; preview normal and duplicate-within-file inputs; compute expected results. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Duplicate detection works even when the committed shelf starts empty. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the starting version convention. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Add a case-sensitive ID policy note

**First hint:** The desired improvement is “Clarify whether a and A are different identities.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Write a discriminating fixture; document the current exact-string policy; change normalization only on an explicit branch. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Duplicate outcomes match the chosen identity policy. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether case folding is appropriate. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Add a review checklist before commit

**First hint:** The desired improvement is “Teach human inspection of a proposal.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: List counts, rejected rows, normalized IDs and freshness; keep the checklist derived from preview; leave the final action explicit. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The checklist never claims rejected rows were committed. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose which facts deserve the most prominence. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
