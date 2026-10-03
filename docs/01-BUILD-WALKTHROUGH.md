# Building Import Preview Tray, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.

The smallest useful result answers this user need: A user needs to review proposed changes before importing a small JSON collection. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Write accepted and rejected fixtures

Start with one valid candidate, one missing title, one ID already in the shelf and one duplicate inside the file. Number rejection rows from one for the human reviewer. Explain which fields are retained after normalization and which extra fields are intentionally ignored.

**Pause and produce evidence:** One valid and one invalid row. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Inspect preview immutability

Read the frozen accepted objects and arrays. They prevent accidental edits to the approval candidate in this local flow. The trusted app is the only caller; freezing is not a security barrier against arbitrary code. The meaningful guarantee is that rendering does not mutate the candidate before commit.

**Pause and produce evidence:** Edit input after preview. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Invalidate on every relevant change

Editing the textarea clears preview and disables commit. Simulating a shelf change increments its version, and the core catches that mismatch even if the earlier button is still enabled. This dual demonstration separates user-interface guidance from the rule that actually protects the state transition.

**Pause and produce evidence:** Shelf version changes after preview. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Commit a fresh valid proposal

After fixing all rows, preview again, inspect the accepted list, then commit. The returned shelf increments version and preserves the old shelf object. A repeated attempt with the old preview becomes stale. Refreshing the app resets the in-memory fixture because persistence is outside this build.

**Pause and produce evidence:** Shelf version changes after preview. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process. 

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose all-or-nothing versus partial import and explain it.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
