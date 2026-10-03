import { previewImport, commitImport } from './core.js';
let store = { version: 1, items: [{ id: 'a', title: 'Object notes' }] };
let preview = null;
const source = document.querySelector('#source');
const result = document.querySelector('#result');
const commit = document.querySelector('#commit');
function renderStore() { document.querySelector('#shelf').textContent = JSON.stringify(store, null, 2); }
source.oninput = () => { preview = null; commit.disabled = true; document.querySelector('#review').textContent = ''; result.textContent = 'Input changed. Preview again.'; };
document.querySelector('#preview').onclick = () => {
  preview = null; commit.disabled = true;
  try {
    preview = previewImport(source.value, store);
    document.querySelector('#review').textContent = JSON.stringify(preview, null, 2);
    commit.disabled = !preview.canCommit;
    result.textContent = `${preview.accepted.length} accepted, ${preview.rejected.length} rejected. Nothing committed.`;
  } catch (error) { document.querySelector('#review').textContent = ''; result.textContent = error.message; }
};
commit.onclick = () => {
  try { store = commitImport(preview, store, source.value); preview = null; commit.disabled = true; renderStore(); result.textContent = 'Import committed.'; }
  catch (error) { commit.disabled = true; result.textContent = error.message; }
};
document.querySelector('#change').onclick = () => { store = { ...store, version: store.version + 1 }; renderStore(); result.textContent = 'Shelf version changed. Any earlier preview is stale.'; };
renderStore();
