# M023: agentic engineering practice

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

These prompts are saved for you to run later with an assistant of your choice. They do not invoke a model, spend API credits or document a debate that already occurred. The core skill is controlling scope, supplying evidence and judging the result. More assistant messages do not automatically produce more understanding.

For this project, keep returning to this source-grounded model: Preview is a proposal, not a mutation. A person reviews one source string against one shelf version; changing either invalidates what was reviewed. The commit function must enforce that condition even when the interface disables a button. Accepted rows in a mixed preview are diagnostic information, not proof that a partial import occurred.

## Prompt 01: Contract interviewer

**Prepare:** Paste the current contract and one example you cannot classify.

```text
Project: Import Preview Tray. Main skill: Validation, preview and commit separation.
Core reading anchor: public/core.js / previewImport.
Current contract: Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.
My own attempt, relevant source and observed evidence: [fill in].
I will describe the user outcome. Ask one question about an ambiguous boundary, then wait for my decision.
Stay within this repository and the selected exercise. Do not claim tests,
edits or external facts that you have not actually checked. End with one
small next action that I can perform and verify myself.
```

**Judge the response:** A useful reply exposes a choice; it does not silently add requirements.

Before accepting advice, restate it in your own words and predict its consequence for one existing example. If you cannot do that, request a smaller explanation instead of pasting a patch. Record whether the assistant gave a hypothesis, a proposed check or a verified observation; those are different kinds of contribution.

## Prompt 02: Source-reading tutor

**Prepare:** Paste a short source excerpt and your current explanation.

```text
Project: Import Preview Tray. Main skill: Validation, preview and commit separation.
Core reading anchor: public/core.js / previewImport.
Current contract: Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.
My own attempt, relevant source and observed evidence: [fill in].
Ask me to predict one step in previewImport. Give a small hint only after I attempt it.
Stay within this repository and the selected exercise. Do not claim tests,
edits or external facts that you have not actually checked. End with one
small next action that I can perform and verify myself.
```

**Judge the response:** A useful reply points to an expression and asks what value it sees.

Before accepting advice, restate it in your own words and predict its consequence for one existing example. If you cannot do that, request a smaller explanation instead of pasting a patch. Record whether the assistant gave a hypothesis, a proposed check or a verified observation; those are different kinds of contribution.

## Prompt 03: Scope reviewer

**Prepare:** Paste the selected story, file list and reason for each file.

```text
Project: Import Preview Tray. Main skill: Validation, preview and commit separation.
Core reading anchor: public/core.js / previewImport.
Current contract: Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.
My own attempt, relevant source and observed evidence: [fill in].
Review my proposed file list. Identify one change that does not follow from the story. Do not edit anything.
Stay within this repository and the selected exercise. Do not claim tests,
edits or external facts that you have not actually checked. End with one
small next action that I can perform and verify myself.
```

**Judge the response:** A useful reply ties scope to acceptance behavior rather than imposing a personal architecture preference.

Before accepting advice, restate it in your own words and predict its consequence for one existing example. If you cannot do that, request a smaller explanation instead of pasting a patch. Record whether the assistant gave a hypothesis, a proposed check or a verified observation; those are different kinds of contribution.

## Prompt 04: Counterexample designer

**Prepare:** Paste a small implementation excerpt and the exact promised behavior.

```text
Project: Import Preview Tray. Main skill: Validation, preview and commit separation.
Core reading anchor: public/core.js / previewImport.
Current contract: Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.
My own attempt, relevant source and observed evidence: [fill in].
Propose one input that could make my apparently working implementation violate the stated contract. Explain why it distinguishes two candidates.
Stay within this repository and the selected exercise. Do not claim tests,
edits or external facts that you have not actually checked. End with one
small next action that I can perform and verify myself.
```

**Judge the response:** A useful reply supplies a concrete discriminating case, not an unbounded list of hypothetical risks.

Before accepting advice, restate it in your own words and predict its consequence for one existing example. If you cannot do that, request a smaller explanation instead of pasting a patch. Record whether the assistant gave a hypothesis, a proposed check or a verified observation; those are different kinds of contribution.

## Prompt 05: Test-oracle reviewer

**Prepare:** Paste the test, its fixture and how you calculated the expected result.

```text
Project: Import Preview Tray. Main skill: Validation, preview and commit separation.
Core reading anchor: public/core.js / previewImport.
Current contract: Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.
My own attempt, relevant source and observed evidence: [fill in].
Check whether my expected result is independent of the implementation. Identify a circular assertion if one exists.
Stay within this repository and the selected exercise. Do not claim tests,
edits or external facts that you have not actually checked. End with one
small next action that I can perform and verify myself.
```

**Judge the response:** A useful reply distinguishes useful setup from copying the algorithm into the expected value.

Before accepting advice, restate it in your own words and predict its consequence for one existing example. If you cannot do that, request a smaller explanation instead of pasting a patch. Record whether the assistant gave a hypothesis, a proposed check or a verified observation; those are different kinds of contribution.

## Prompt 06: Debugging partner

**Prepare:** Paste expected and observed results, reproduction steps and current diff.

```text
Project: Import Preview Tray. Main skill: Validation, preview and commit separation.
Core reading anchor: public/core.js / previewImport.
Current contract: Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.
My own attempt, relevant source and observed evidence: [fill in].
Give two causal hypotheses and one cheap experiment that separates them. Do not say you reproduced anything unless you actually did.
Stay within this repository and the selected exercise. Do not claim tests,
edits or external facts that you have not actually checked. End with one
small next action that I can perform and verify myself.
```

**Judge the response:** A useful reply makes predictions that can be rejected by observation.

Before accepting advice, restate it in your own words and predict its consequence for one existing example. If you cannot do that, request a smaller explanation instead of pasting a patch. Record whether the assistant gave a hypothesis, a proposed check or a verified observation; those are different kinds of contribution.

## Prompt 07: Architecture challenger

**Prepare:** Paste your state/ownership diagram, contract and proposed tradeoff.

```text
Project: Import Preview Tray. Main skill: Validation, preview and commit separation.
Core reading anchor: public/core.js / previewImport.
Current contract: Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.
My own attempt, relevant source and observed evidence: [fill in].
Compare my chosen design with one smaller alternative using the same requirements. Name the next change each makes harder.
Stay within this repository and the selected exercise. Do not claim tests,
edits or external facts that you have not actually checked. End with one
small next action that I can perform and verify myself.
```

**Judge the response:** A useful reply identifies duplicated facts, new dependencies or changed failure behavior with an example.

Before accepting advice, restate it in your own words and predict its consequence for one existing example. If you cannot do that, request a smaller explanation instead of pasting a patch. Record whether the assistant gave a hypothesis, a proposed check or a verified observation; those are different kinds of contribution.

## Prompt 08: Accessibility observation planner

**Prepare:** Paste the relevant markup or component and the user interaction.

```text
Project: Import Preview Tray. Main skill: Validation, preview and commit separation.
Core reading anchor: public/core.js / previewImport.
Current contract: Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.
My own attempt, relevant source and observed evidence: [fill in].
Suggest a bounded keyboard and content check for this change. Distinguish what it proves from a full accessibility audit.
Stay within this repository and the selected exercise. Do not claim tests,
edits or external facts that you have not actually checked. End with one
small next action that I can perform and verify myself.
```

**Judge the response:** A useful reply gives exact actions and expected focus or content observations.

Before accepting advice, restate it in your own words and predict its consequence for one existing example. If you cannot do that, request a smaller explanation instead of pasting a patch. Record whether the assistant gave a hypothesis, a proposed check or a verified observation; those are different kinds of contribution.

## Prompt 09: Diff reviewer

**Prepare:** Paste the story, exact diff and actual checks already run.

```text
Project: Import Preview Tray. Main skill: Validation, preview and commit separation.
Core reading anchor: public/core.js / previewImport.
Current contract: Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.
My own attempt, relevant source and observed evidence: [fill in].
Review only this patch against the acceptance examples. For each material finding give a location, reproduction and violated requirement.
Stay within this repository and the selected exercise. Do not claim tests,
edits or external facts that you have not actually checked. End with one
small next action that I can perform and verify myself.
```

**Judge the response:** A useful reply separates confirmed defects, unresolved hypotheses and optional style preferences.

Before accepting advice, restate it in your own words and predict its consequence for one existing example. If you cannot do that, request a smaller explanation instead of pasting a patch. Record whether the assistant gave a hypothesis, a proposed check or a verified observation; those are different kinds of contribution.

## Prompt 10: Explanation editor

**Prepare:** Paste your own explanation, not a request for a fresh essay.

```text
Project: Import Preview Tray. Main skill: Validation, preview and commit separation.
Core reading anchor: public/core.js / previewImport.
Current contract: Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.
My own attempt, relevant source and observed evidence: [fill in].
Read my explanation and mark one vague sentence. Ask me to replace it with a concrete input, rule and outcome.
Stay within this repository and the selected exercise. Do not claim tests,
edits or external facts that you have not actually checked. End with one
small next action that I can perform and verify myself.
```

**Judge the response:** A useful reply strengthens your understanding without manufacturing an experience you did not have.

Before accepting advice, restate it in your own words and predict its consequence for one existing example. If you cannot do that, request a smaller explanation instead of pasting a patch. Record whether the assistant gave a hypothesis, a proposed check or a verified observation; those are different kinds of contribution.

## Prompt 11: Adversarial review facilitator

**Prepare:** Paste the proposal, critique and evidence for each claim.

```text
Project: Import Preview Tray. Main skill: Validation, preview and commit separation.
Core reading anchor: public/core.js / previewImport.
Current contract: Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.
My own attempt, relevant source and observed evidence: [fill in].
Treat the design proposal and critique as competing claims. Require a contract and experiment before accepting either.
Stay within this repository and the selected exercise. Do not claim tests,
edits or external facts that you have not actually checked. End with one
small next action that I can perform and verify myself.
```

**Judge the response:** A useful reply can reject a reviewer suggestion when the evidence does not support it.

Before accepting advice, restate it in your own words and predict its consequence for one existing example. If you cannot do that, request a smaller explanation instead of pasting a patch. Record whether the assistant gave a hypothesis, a proposed check or a verified observation; those are different kinds of contribution.

## Prompt 12: Independence coach

**Prepare:** Name the central concept and what you have already implemented independently.

```text
Project: Import Preview Tray. Main skill: Validation, preview and commit separation.
Core reading anchor: public/core.js / previewImport.
Current contract: Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.
My own attempt, relevant source and observed evidence: [fill in].
Ask three questions one at a time: a trace, a boundary and a small change. Do not reveal answers before my attempts.
Stay within this repository and the selected exercise. Do not claim tests,
edits or external facts that you have not actually checked. End with one
small next action that I can perform and verify myself.
```

**Judge the response:** A useful reply gradually reduces assistance instead of offering a larger generated patch.

Before accepting advice, restate it in your own words and predict its consequence for one existing example. If you cannot do that, request a smaller explanation instead of pasting a patch. Record whether the assistant gave a hypothesis, a proposed check or a verified observation; those are different kinds of contribution.

## A three-role review you can run later

Use a proposer, a challenger and an adjudicator as distinct conversational roles. The proposer states the contract and a small design. The challenger supplies counterexamples and costs. The adjudicator asks which claims can be tested and what the result would mean. These roles may be played by separate assistants or by people; agreement among them is not the acceptance criterion.

Start with the design question “How would you detect a preview function that secretly mutated the shelf?”. Give every role the same current source and constraints. Do not ask for hidden internal reasoning; ask for concise design rationales, assumptions, alternatives and evidence that you can inspect.

A useful round ends with one of three outcomes: retain the design with supporting evidence; change one bounded choice because a counterexample demonstrated a failure; or record an unresolved question and an experiment. Avoid endless argument over abstractions whose cost has not appeared in this small project.

## Keep execution separate from suggestion

If an assistant can edit files, first constrain the patch to your selected story and name the checks it should run. Inspect the diff afterward. If the assistant only gives text, do not copy its imagined terminal output into your verification record. Run the commands yourself and keep the real result.

## Reduce assistance over repeated attempts

First attempt: ask for one vocabulary hint. Second attempt: ask for a counterexample. Third attempt: implement a small variation without generated code and request only review. You may need more rounds for a difficult concept; the goal is honest progress toward independence, not pretending you needed no help.
