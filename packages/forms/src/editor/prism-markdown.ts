import { StringMap } from '@vats/utils'
import Prism, { LanguageDefinition } from 'prismjs'

const markdownDefinitions: StringMap<LanguageDefinition | LanguageDefinition[]> = {
  blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
  code: [
    { pattern: /^(?: {4}|\t).+/m, alias: 'keyword' },
    { pattern: /``.+?``|`[^`\n]+`/, alias: 'keyword' },
  ],
  title: [
    {
      pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
      alias: 'important',
      inside: { punctuation: /==+$|--+$/ },
    },
    {
      pattern: /(^\s*)#+.+/m,
      lookbehind: !0,
      alias: 'important',
      inside: { punctuation: /^#+|#+$/ },
    },
  ],
  hr: { pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: 'punctuation' },
  list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: 'punctuation' },
  'url-reference': {
    pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
    inside: {
      variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
      string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
      punctuation: /^[\[\]!:]|[<>]/,
    },
    alias: 'url',
  },
  bold: {
    pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: { punctuation: /^\*\*|^__|\*\*$|__$/ },
  },
  italic: {
    pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: { punctuation: /^[*_]|[*_]$/ },
  },
  url: {
    pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
    inside: {
      variable: { pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
      string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
    },
  },
}

Prism.languages.markdown = Prism.languages.extend('markup', {}) as StringMap<LanguageDefinition>

Prism.languages.insertBefore('markdown', 'prolog', markdownDefinitions, undefined as any)

// @ts-ignore
Prism.languages.markdown.bold.inside.url = Prism.util.clone(Prism.languages.markdown.url)
// @ts-ignore
Prism.languages.markdown.italic.inside.url = Prism.util.clone(Prism.languages.markdown.url)
// @ts-ignore
Prism.languages.markdown.bold.inside.italic = Prism.util.clone(Prism.languages.markdown.italic)
// @ts-ignore
Prism.languages.markdown.italic.inside.bold = Prism.util.clone(Prism.languages.markdown.bold)

export { Prism as PrismMarkdown }
