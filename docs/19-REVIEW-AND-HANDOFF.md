# M023: review and handoff workshop

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

A reviewer should be able to understand the final change without reading your chat history. Lead with the concrete problem and resulting behavior. Then give the evidence needed to assess it. Keep rejected approaches only when they explain a tradeoff that remains relevant.

## Review lens 1: Requirement fidelity

Does the patch implement the selected story rather than a nearby imagined product?

**Reviewer action:** Point to one acceptance example and follow it through the changed files.

Ground the review in `previewImport` and the responsibility split shown in the code tour. A material finding should name a location, an input or interaction, the observed or predicted failure and the violated requirement. If the claim is only a hypothesis, label it that way and propose the smallest check.

The author should respond with evidence or a bounded correction. Agreement is not required for an optional stylistic preference; correctness concerns need a concrete resolution. Do not expand a junior exercise into an unrelated platform redesign merely because a larger design is imaginable.

## Review lens 2: Input meaning

Are absence, invalidity and valid boundary values distinguished where the contract requires it?

**Reviewer action:** Choose the smallest pair of inputs with different meanings.

Ground the review in `previewImport` and the responsibility split shown in the code tour. A material finding should name a location, an input or interaction, the observed or predicted failure and the violated requirement. If the claim is only a hypothesis, label it that way and propose the smallest check.

The author should respond with evidence or a bounded correction. Agreement is not required for an optional stylistic preference; correctness concerns need a concrete resolution. Do not expand a junior exercise into an unrelated platform redesign merely because a larger design is imaginable.

## Review lens 3: Ownership

Is each fact stored or controlled in one understandable place?

**Reviewer action:** Draw the value or box owner and every derived consumer.

Ground the review in `previewImport` and the responsibility split shown in the code tour. A material finding should name a location, an input or interaction, the observed or predicted failure and the violated requirement. If the claim is only a hypothesis, label it that way and propose the smallest check.

The author should respond with evidence or a bounded correction. Agreement is not required for an optional stylistic preference; correctness concerns need a concrete resolution. Do not expand a junior exercise into an unrelated platform redesign merely because a larger design is imaginable.

## Review lens 4: Preservation

Does the change retain the input or past state promised by the contract?

**Reviewer action:** Compare before and after rather than relying on a comment.

Ground the review in `previewImport` and the responsibility split shown in the code tour. A material finding should name a location, an input or interaction, the observed or predicted failure and the violated requirement. If the claim is only a hypothesis, label it that way and propose the smallest check.

The author should respond with evidence or a bounded correction. Agreement is not required for an optional stylistic preference; correctness concerns need a concrete resolution. Do not expand a junior exercise into an unrelated platform redesign merely because a larger design is imaginable.

## Review lens 5: Visible feedback

Does the displayed result correspond to the current input and state?

**Reviewer action:** Use success, edit, failure and correction in sequence where applicable.

Ground the review in `previewImport` and the responsibility split shown in the code tour. A material finding should name a location, an input or interaction, the observed or predicted failure and the violated requirement. If the claim is only a hypothesis, label it that way and propose the smallest check.

The author should respond with evidence or a bounded correction. Agreement is not required for an optional stylistic preference; correctness concerns need a concrete resolution. Do not expand a junior exercise into an unrelated platform redesign merely because a larger design is imaginable.

## Review lens 6: Identity

Are stable identities kept separate from labels or positions where needed?

**Reviewer action:** Use duplicate labels or reordering only when they are relevant to this project.

Ground the review in `previewImport` and the responsibility split shown in the code tour. A material finding should name a location, an input or interaction, the observed or predicted failure and the violated requirement. If the claim is only a hypothesis, label it that way and propose the smallest check.

The author should respond with evidence or a bounded correction. Agreement is not required for an optional stylistic preference; correctness concerns need a concrete resolution. Do not expand a junior exercise into an unrelated platform redesign merely because a larger design is imaginable.

## Review lens 7: Evidence quality

Can the check reject a plausible wrong implementation?

**Reviewer action:** Name the wrong candidate and the exact expected observation.

Ground the review in `previewImport` and the responsibility split shown in the code tour. A material finding should name a location, an input or interaction, the observed or predicted failure and the violated requirement. If the claim is only a hypothesis, label it that way and propose the smallest check.

The author should respond with evidence or a bounded correction. Agreement is not required for an optional stylistic preference; correctness concerns need a concrete resolution. Do not expand a junior exercise into an unrelated platform redesign merely because a larger design is imaginable.

## Review lens 8: Scope discipline

Does every changed file contribute to the story?

**Reviewer action:** Explain each file in one sentence or remove unrelated edits from the patch.

Ground the review in `previewImport` and the responsibility split shown in the code tour. A material finding should name a location, an input or interaction, the observed or predicted failure and the violated requirement. If the claim is only a hypothesis, label it that way and propose the smallest check.

The author should respond with evidence or a bounded correction. Agreement is not required for an optional stylistic preference; correctness concerns need a concrete resolution. Do not expand a junior exercise into an unrelated platform redesign merely because a larger design is imaginable.

## Review lens 9: Readable interface

Can a reader reach and understand the changed behavior?

**Reviewer action:** Inspect labels, focus, meaningful content and narrow layout where applicable.

Ground the review in `previewImport` and the responsibility split shown in the code tour. A material finding should name a location, an input or interaction, the observed or predicted failure and the violated requirement. If the claim is only a hypothesis, label it that way and propose the smallest check.

The author should respond with evidence or a bounded correction. Agreement is not required for an optional stylistic preference; correctness concerns need a concrete resolution. Do not expand a junior exercise into an unrelated platform redesign merely because a larger design is imaginable.

## Review lens 10: Honest handoff

Are facts, hypotheses and unsupported claims labeled correctly?

**Reviewer action:** Compare the review note with actual command or browser output.

Ground the review in `previewImport` and the responsibility split shown in the code tour. A material finding should name a location, an input or interaction, the observed or predicted failure and the violated requirement. If the claim is only a hypothesis, label it that way and propose the smallest check.

The author should respond with evidence or a bounded correction. Agreement is not required for an optional stylistic preference; correctness concerns need a concrete resolution. Do not expand a junior exercise into an unrelated platform redesign merely because a larger design is imaginable.

## A review description template

```text
Problem and trigger:
Resulting behavior:
Important design choice and why:
Verification actually performed:
What that verification does not prove:
Remaining scope or limitation:
```

## Make feedback teachable

For each accepted finding, record the mistaken assumption and the example that exposed it. For a rejected finding, record the contract and evidence that made rejection reasonable. This transforms review from a verdict into a reusable learning record. Avoid inventing consensus or claiming another assistant approved work it never inspected.

## Finish without overstating

A small finished change can be valuable while still lacking cross-browser coverage, remote persistence or a generalized API. State the limits that matter to this specific patch. Do not add speculative warnings unrelated to the user contract, and do not imply that the existing reference tests automatically validate a new feature.
