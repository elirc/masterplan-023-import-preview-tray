# Agentic coaching for M023

[Learning route](00-START-HERE.md) · [Journal](JOURNAL-TEMPLATE.md)

The goal is to get better at forming and testing technical judgments. An assistant can explain syntax, challenge examples and review a diff. It cannot supply your understanding merely by producing a convincing answer. Begin with a question or hint, then increase assistance only when you can inspect the result.

## Prompt 1 — a useful first reading

```text
I am learning validation, preview and commit separation using Import Preview Tray.
Here is the source of public/core.js: [paste the relevant small excerpt].
Here is my explanation of previewImport: [write your own explanation].
Ask one question that exposes a possible misunderstanding. Do not rewrite the code.
Distinguish what you can observe in the supplied code from what you are assuming.
```

Your explanation is part of the input, not an optional field. Without it, the assistant may give a generic lecture that does not address your misconception. Keep the excerpt small enough to trace and include the contract when a boundary value matters.

## Prompt 2 — clarify a feature before coding

```text
I am attempting practice story [number and title].
Current contract: Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.
My proposed new behavior: [fill in].
My happy-path example and edge case: [fill in].
My preferred design and one alternative: [fill in].
Challenge one ambiguous requirement. Give two possible interpretations and a
concrete input that distinguishes them. Leave the implementation to me.
```

Resolve the ambiguity yourself and write down the chosen interpretation. Do not treat an assistant's confident assumption as a product requirement. A good prompt includes a stop condition: one ambiguity or one hint, not an invitation to build an entire application.

## Prompt 3 — diagnose from evidence

```text
Expected result: [exact value or visible behavior].
Observed result: [what actually happened].
Reproduction: [smallest input and steps].
Current diff: [paste].
I think the owning rule is previewImport, because [reason].
Offer two hypotheses and one cheap experiment that distinguishes them.
Do not claim to have run a test. Do not edit unrelated files.
```

Run the proposed experiment yourself. Record whether it supported or rejected the hypothesis. If the assistant needs a missing file, provide the relevant content rather than accepting an invented description of that file.

## Prompt 4 — review a bounded patch

```text
Review this patch for practice story [number].
Acceptance criteria: [paste the story's concrete criteria].
Evidence I ran: [commands or browser steps and real results].
For each material finding, name the file/rule, give a reproducing input, and
explain which requirement would be violated. Separate proven failures from
hypotheses. Do not rewrite the project or add new scope.
```

Use a separate review conversation if you want a fresh challenge, but agreement among assistants is not proof. Resolve disagreement with the contract and a concrete experiment. An opinion about code style should not outrank a demonstrated wrong output.

## Prompt 5 — fade the help

```text
I think I understand this project. Ask me three questions, one at a time:
one execution trace, one boundary case, and one small design change.
Do not reveal the answer until I attempt it. If I am wrong, give the smallest
hint that helps me correct my explanation.
```

Afterward, make one small variation without generated code. In your journal, label what you wrote, what the assistant suggested and what you independently verified. These prompts are saved for future use; this repository does not claim they were executed or that multiple agents reviewed the build.
