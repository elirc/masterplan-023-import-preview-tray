import test from 'node:test';
import assert from 'node:assert/strict';

import { previewImport, commitImport } from '../public/core.js';
const initial = () => ({ version: 1, items: [{ id: 'a', title: 'A' }] });
test('preview does not commit and successful commit returns a new shelf', () => {
  const store = initial(); const text = '[{"id":"b","title":" B "}]'; const preview = previewImport(text, store);
  assert.equal(store.items.length, 1); const next = commitImport(preview, store, text);
  assert.equal(next.items.length, 2); assert.equal(next.items[1].title, 'B'); assert.equal(store.version, 1);
});
test('mixed valid and invalid rows prevent every row from committing', () => {
  const store = initial(); const text = '[{"id":"b","title":"B"},{"id":"c","title":""}]'; const preview = previewImport(text, store);
  assert.equal(preview.accepted.length, 1); assert.equal(preview.rejected.length, 1);
  assert.throws(() => commitImport(preview, store, text), /every rejected/); assert.equal(store.items.length, 1);
});
test('text edits and shelf changes invalidate earlier previews', () => {
  const store = initial(); const text = '[{"id":"b","title":"B"}]'; const preview = previewImport(text, store);
  assert.throws(() => commitImport(preview, store, text + ' '), /stale/);
  assert.throws(() => commitImport(preview, { ...store, version: 2 }, text), /stale/);
});
test('existing and within-file duplicate IDs are rejected', () => {
  const p = previewImport('[{"id":"a","title":"A"},{"id":"b","title":"B"},{"id":" b ","title":"B2"}]', initial());
  assert.equal(p.rejected.length, 2); assert.equal(p.canCommit, false);
});
test('malformed and empty imports are explicit errors; preview is immutable', () => {
  for (const text of ['{', '{}', '[]']) assert.throws(() => previewImport(text, initial()));
  const p = previewImport('[{"id":"b","title":"B"}]', initial()); assert.throws(() => { p.accepted[0].title = 'mutated'; });
});
