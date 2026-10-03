# M023: your learning route

[Repository overview](../README.md) · [Walkthrough](01-BUILD-WALKTHROUGH.md)

The target is not to memorize the reference. It is to explain **validation, preview and commit separation**, change one related behavior, and show why your change works. Begin with the existing curriculum guide for [js1](https://github.com/elirc/js1); review one introductory example, then return here. Do not complete an entire large course before trying this small project.

## Session 1 — observe and predict

Run the reference using the README. Write its user need in one sentence without copying the repository description. Choose the first two examples from the contract table in the concepts guide. Predict their outcomes before interacting with the program. Compare your prediction with the observation and record the exact mismatch if there is one.

Open [public/core.js](../public/core.js) and locate `previewImport`. You do not need to understand every tool file. Start with the file that owns the main learning rule, then follow only one input through the surrounding code. If a symbol is unfamiliar, explain its role in ordinary language before trying to remember its formal name.

## Session 2 — reconstruct one small slice

Read the build walkthrough, close it, and reproduce one meaningful slice in a scratch branch or separate practice file. For a static page, recreate one region from semantic content before adding layout. For a function, write the input and output examples before its body. For the Git exercise, demonstrate the distinction between staged and saved content before using the helper.

Compare your attempt with the reference only after you can point to a concrete uncertainty. Write down why the reference makes a different choice. A difference is not automatically an error: compare the user contract and the counterexamples. If both implementations satisfy the same contract, explain which is easier for you to maintain and why.

## Session 3 — diagnose rather than guess

Work the first debugging case. Predict which example will expose the defect. Make the smallest temporary change in your practice branch, observe it, then repair it. Keep the working reference on main. If a suggested defect is only a discussion exercise, do not claim you reproduced it unless you actually ran the experiment.

Record symptom, hypothesis, discriminating input, observation and cause as separate lines. This prevents a plausible explanation from silently turning into a claimed fact. When you ask for help, provide that record rather than a screenshot with “it does not work.”

## Session 4 — own a feature

Choose one of the six stories. Write its acceptance examples and one decision you will make yourself. Implement a bounded change, run the relevant check and review the diff. Ask for an evidence-based review only after your own attempt. The reviewer should identify a specific file, behavior and counterexample; general praise is not a completion gate.

## Session 5 — recall and transfer

In a later session, explain the main rule without opening the guide. Make a small input or content variation that was not in your first attempt. Then answer: What observation proves that merely previewing a file did not mutate existing records?

If that explanation is shaky, repeat one example with a different value. If it is clear, continue to the next build. Extra features are optional; a larger application does not compensate for a rule you cannot explain.

## Done means evidence, not pages read

- You can trace the contract from input to output or from source structure to browser behavior.
- You can explain one rejected design and the counterexample that made it weaker.
- You completed one learner story and recorded actual verification.
- You can describe what your checks do not prove.
- Your personal journal records a remaining uncertainty honestly.

Plan for several focused 45–75 minute sessions, with more time if setup or syntax is new. There is no reward for hiding confusion to meet a schedule. The implementation is supplied as a reference so you can inspect a finished result while still owning your practice work.
