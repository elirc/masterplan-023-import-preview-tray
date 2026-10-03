# M023: an independent capstone

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Your capstone is a small variation that you can explain from requirement to evidence. Use **Add a review checklist before commit** as the default starting point, or choose one of the other fifteen stories if it better targets your current gap. The reference is a working example; the capstone belongs to you.

## Write your own brief

State the user, the problem and the smallest resulting behavior. For the default variation: Teach human inspection of a proposal. Your proposed acceptance boundary is: The checklist never claims rejected rows were committed. The decision still belongs to you: Choose which facts deserve the most prominence.

Do not begin by listing libraries. Begin with three concrete examples and one non-goal. If an example reveals an ambiguity, resolve it before asking an assistant for code. A capstone may be small enough to change only one file and still demonstrate a useful technical judgment.

## Keep one important invariant

The central model is: Preview is a proposal, not a mutation. A person reviews one source string against one shelf version; changing either invalidates what was reviewed. The commit function must enforce that condition even when the interface disables a button. Accepted rows in a mixed preview are diagnostic information, not proof that a partial import occurred. Decide which part remains unchanged in your variation. Point to the source responsibility that enforces it. Explain how the new feature could accidentally break it and choose a regression that would reveal the break.

## Deliver a thin complete slice

Implement the path from input or content through the owning rule into visible output. Avoid building every possible extension before one route works. For static work, completeness means useful content, working navigation and readable layout under the stated conditions. For stateful work, include the relevant empty, error and correction path rather than only the happiest interaction.

Inspect the diff after each meaningful step. A change outside your brief needs a reason or should be removed from your patch. If you discover a separate issue, record it as a future story rather than making the current review unbounded.

## Use assistants with a narrow role

First write your own proposal. Ask a reviewer to challenge one assumption or produce one counterexample. Resolve the challenge with the contract and an experiment. If the review is wrong, explain why with evidence; rejecting an unsupported suggestion is part of responsible agentic engineering.

Do not request or copy a fabricated development narrative. Your journal should record what you actually tried, what failed and what changed your mind. A concise design rationale is more useful than a long invented conversation among agents.

## Produce a handoff package

Include a short requirement, the relevant diff or commit, actual verification, one screenshot or CLI example when it helps, and a remaining limitation. Keep private journal notes out of the public handoff. The README should tell a new reader how to reproduce the behavior without knowing this conversation.

## Review gate

You are ready to hand off when you can explain the implementation without reading it line for line, demonstrate the acceptance examples, identify one plausible wrong version and show why your check rejects it. If a reviewer asks about a limit you have not tested, say that clearly and decide whether it belongs in scope.

## Transfer question

What observation proves that merely previewing a file did not mutate existing records?

Answer using a different domain. Name what transfers—an ownership boundary, an equality distinction, a validation policy or a rendering rule—and what must be specified again. Reusing the same code is optional. Reusing a careful reasoning habit is the point of the exercise.
