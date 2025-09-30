const fs = require('fs');
const path = require('path');

const files = [
  'resources/js/pages/reports/account-statement.vue',
  'resources/js/pages/reports/balance-sheet.vue',
  'resources/js/pages/reports/invoice-summary.vue',
  'resources/js/pages/reports/profit-loss.vue',
  'resources/js/pages/reports/vat-report.vue',
  'resources/js/pages/reports/purchase-summary.vue',
  'resources/js/pages/reports/summary.vue',
  'resources/js/pages/reports/group-account-statement.vue',
];

// Regexes
// 1) Mustache bindings: {{ expr | withAbsoluteCurrency }}
const mustacheFilter = /\{\{([^}]*)\|\s*withAbsoluteCurrency\s*\}\}/g;

// 2) v-html spans: <span ... v-html="expr | withAbsoluteCurrency" ...>...</span>
// Replace with: <span ...>{{ expr }} <span class="saudi-riyal">ê</span></span>
const vhtmlFilter = /(<span[^>]*?)\s+v-html=\"([^\"]*?)\|\s*withAbsoluteCurrency\s*\"([^>]*?)>(\s*)<\/span>/g;

for (const rel of files) {
  const file = path.resolve(rel);
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  // Mustache replacements
  content = content.replace(mustacheFilter, (_m, expr) => {
    const trimmed = String(expr).trimEnd();
    return `{{${trimmed}}} <span class=\"saudi-riyal\">ê</span>`;
  });

  // v-html replacements
  content = content.replace(vhtmlFilter, (_m, before, expr, after, ws) => {
    const inner = String(expr).trim();
    return `${before}${after}>{{${inner}}} <span class=\"saudi-riyal\">ê</span>${ws}</span>`;
  });

  fs.writeFileSync(file, content, 'utf8');
}

console.log('Currency filter removal and span append complete.');


