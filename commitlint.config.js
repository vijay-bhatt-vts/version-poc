module.exports = {
    extends: ['@commitlint/config-conventional'],
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
    'subject-case': [
        0,
        'never',
        ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'scope-empty': [2, 'never'],
    'scope-enum': [
        2,
        'always',
        ['Resident','Staff', 'PM', 'Payment', 'Automation']
    ],
    'references-empty': [2, 'always']

},
parserPreset: {
    parserOpts: {
        issuePrefixes: ['RISE-']
    }
},
prompt: {
    settings: {
        'enableMultipleScopes' : true
    },
}
 
};