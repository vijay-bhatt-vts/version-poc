module.exports = {
    extends: ['@commitlint/config-conventional'],
"rules": {
    'footer-max-line-length': [1, 'always', 100],
    'body-max-line-length': [1, 'always', 100],
    'subject-case': [
        0,
        'never',
        ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'scope-empty': [2, 'never'],
    'scope-enum': [
        2,
        'always',
        ['Resident','Staff', 'PM', 'Payment', 'Automation','release']
    ],
    'references-empty': [2, 'never']
    

},
parserPreset: {
    parserOpts: {
        referenceActions: null,
        issuePrefixes: ['RISE-']
    }
},
prompt: {
    settings: {
        'enableMultipleScopes' : true
    },
}
 
};