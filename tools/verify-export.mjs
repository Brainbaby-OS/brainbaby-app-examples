import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const manifest = JSON.parse(readFileSync(resolve(root, 'docs/garden-checklist-provenance.json'), 'utf8'));
assert.equal(hash(readFileSync(resolve(root, 'downloads/garden-checklist-original.zip'))), manifest.sourceZipSha256, 'Original ZIP differs');
assert.equal(manifest.originalFiles.length, 13, 'Original export inventory differs');
for (const file of manifest.originalFiles) {
  assert.match(file.path, /^(?:src\/(?:components\/|pages\/|utils\/)?[A-Za-z]+\.(?:tsx|jsx|css)|(?:package\.json|vite\.config\.ts|tsconfig\.json|index\.html|README\.md))$/);
  assert.equal(hash(readFileSync(resolve(root, 'examples/garden-checklist', file.path))), file.sha256, `Original source differs: ${file.path}`);
}
console.log('Verified unchanged original ZIP and all 13 source files. This is an integrity check, not a functional or security audit.');
