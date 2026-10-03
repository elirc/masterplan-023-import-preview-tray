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
