module.exports = {
    extends: ['@commitlint/config-conventional'],
"rules": {
    'subject-empty': [2, 'always'],
    "body-empty": [2,'never'],
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
        headerPattern: /^(\w*)(?:\((.*)\))?/,
        headerCorrespondence: ["type", "scope"],
        issuePrefixesCaseSensitive : true,
        issuePrefixes: ['RISE-']
    }
},
prompt: {
    settings: {
        'enableMultipleScopes' : true
    }
}
};