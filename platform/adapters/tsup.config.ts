import { defineConfig } from 'tsup';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function domainEntries(srcDir: string): string[] {
  const entries = ['src/index.ts', 'src/_shared/index.ts'];
  for (const name of readdirSync(srcDir)) {
    if (name.startsWith('_') || name === 'index.ts') continue;
    const full = join(srcDir, name);
    if (statSync(full).isDirectory()) {
      const idx = join(full, 'index.ts');
      try {
        statSync(idx);
        entries.push(`src/${name}/index.ts`);
      } catch {
        /* skip */
      }
    }
  }
  return entries;
}

export default defineConfig({
  entry: domainEntries('src'),
  format: ['esm'],
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  target: 'es2022',
  outDir: 'dist',
});
