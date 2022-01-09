module.exports = {extends: ['@commitlint/config-conventional'],
"rules": {
    'type-enum': [
        2,
        'always',
        [
            'feat',
            'fix',
            'perf',
        ],
    ],
    'scope-empty': [2, 'always'],
    'references-empty':[2,'never']
},
parserPreset: {
    parserOpts: {
      issuePrefixes: ['RISE-']
    }
  }
};