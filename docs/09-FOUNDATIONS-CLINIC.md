# M023: foundations clinic

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Preview is a proposal, not a mutation. A person reviews one source string against one shelf version; changing either invalidates what was reviewed. The commit function must enforce that condition even when the interface disables a button. Accepted rows in a mixed preview are diagnostic information, not proof that a partial import occurred.

## Start from one visible behavior

Read this contract slowly: Import accepts a nonempty JSON array of rows with nonempty string IDs and titles, trims those fields, ignores extra fields, and rejects IDs already in the shelf or repeated within the candidate file. Preview reports accepted and rejected rows without changing the shelf. Commit is all-or-nothing and requires an unchanged source string and shelf version. A successful commit returns a new shelf; a stale or partially invalid preview cannot commit.

Underline the promised result, circle the input boundary and mark the stated limitation. A junior developer often starts by naming a framework or file. Start instead with an observation that a user could confirm or reject. File names become useful after you know which responsibility you are looking for.

## Clinic 1: Preview snapshot

The normalized candidate a user can inspect before applying it.

**Small experiment:** Verify the committed shelf stays unchanged after preview.

Find the part of `previewImport` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **preview snapshot** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Verify the committed shelf stays unchanged after preview.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 2: Commit precondition

A fact that must still hold at the mutation boundary.

**Small experiment:** Compare current source and shelf version with the preview.

Find the part of `previewImport` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **commit precondition** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Compare current source and shelf version with the preview.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 3: Atomic policy

All rows succeed together or none commit.

**Small experiment:** Use one valid and one invalid candidate row.

Find the part of `previewImport` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **atomic policy** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Use one valid and one invalid candidate row.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 4: Stale approval

A decision made for data that has since changed.

**Small experiment:** Increment shelf version after preview and try committing.

Find the part of `previewImport` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **stale approval** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Increment shelf version after preview and try committing.”? Leave your answer in the session journal before reading the mentor hints.

## Read a real source window

The following is an excerpt from [public/core.js](../public/core.js), beginning at source line 1. It is a reading window, not a standalone runnable exercise. Open the linked file for surrounding declarations and context.

```js
export function previewImport(text, store) {
  let rows;
  try { rows = JSON.parse(text); } catch { throw new TypeError('Invalid JSON syntax.'); }
  if (!Array.isArray(rows) || rows.length === 0) throw new TypeError('Provide a non-empty array.');
  const ids = new Set(store.items.map(item => item.id));
  const accepted = []; const rejected = [];
  rows.forEach((row, index) => {
    if (!row || typeof row !== 'object' || Array.isArray(row) || typeof row.id !== 'string' || !row.id.trim() || typeof row.title !== 'string' || !row.title.trim()) {
      rejected.push({ row: index + 1, reason: 'Expected non-empty string id and title.' }); return;
    }
    const item = { id: row.id.trim(), title: row.title.trim() };
    if (ids.has(item.id)) { rejected.push({ row: index + 1, reason: 'Duplicate ID: ' + item.id }); return; }
    ids.add(item.id); accepted.push(Object.freeze(item));
  });
  return Object.freeze({ version: store.version, source: text, accepted: Object.freeze(accepted), rejected: Object.freeze(rejected), canCommit: rejected.length === 0 });
}
export function commitImport(preview, store, currentText) {
  if (!preview || preview.source !== currentText || preview.version !== store.version) throw new Error('Preview is stale. Preview again.');
  if (!preview.canCommit) throw new Error('Fix every rejected row before committing.');
  return { version: store.version + 1, items: [...store.items, ...preview.accepted.map(item => ({ ...item }))] };
}
```

For each meaningful line, label its job as input interpretation, validation, state ownership, transformation, output or presentation. Some files contain only a subset of those jobs. Do not force the categories onto code that does not perform them. A closing brace is structure, not a separate business rule.

Choose one expression and restate it as a question the program answers. Then choose one expression that merely carries out a consequence of that answer. This separates a product decision from mechanical plumbing. If you cannot explain an operator, isolate a tiny example rather than rewriting the whole function.

## A three-column scratch sheet

| Before | Rule or operation | After |
|---|---|---|
| Write an actual supported input or layout situation | Name the owning function, property or event | Predict the concrete result |
| Change one assumption | State which rule now matters | Predict what changes and what remains stable |
| Use an invalid, missing or unsupported case | Identify the boundary that rejects or handles it | Predict feedback and retained state |

Do not fill the After column by running the reference first. That turns prediction practice into transcription. After predicting, observe the program and put discrepancies in a fourth note below the table. A wrong prediction is useful when you can name the mistaken assumption.

## What understanding looks like

You can locate `previewImport`, explain why the adapter has a separate job, and produce a new counterexample without borrowing one from the tests. You can also say what the reference deliberately does not support. If one of those is missing, choose the smallest clinic above that addresses it and repeat that clinic with different data.
