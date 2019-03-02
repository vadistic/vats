import path from 'path'

export const config = {
  ROOT_PATH: process.cwd(),
  CACHE_PATH: path.resolve(process.cwd(), 'node_modules', '.cache', '@vats'),
  CACHE_MANIFEST_PATH: path.resolve(
    process.cwd(),
    'node_modules',
    '.cache',
    '@vats',
    'cache-manifest.json',
  ),
  CACHE_DIST_PATH: path.resolve(process.cwd(), 'node_modules', '.cache', '@vats', 'dist'),
  BUILD_DIR: 'build',
  DIST_DIR: 'dist',
  SOURCE_DIR: 'src',
  IGNORE_GLOB: [
    '!**/tests/**',
    '!**/__tests__/**',
    '!**/*.test.{ts,tsx}',
    '!**/*.jsxfixture.{ts,tsx}',
  ],
}
