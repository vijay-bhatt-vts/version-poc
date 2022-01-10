module.exports = {
    extends: ['@commitlint/config-conventional'],
"rules": {
    'type-enum': [
        2,
        'always',
        [
            'build',
			'chore',
			'ci',
			'docs',
			'feat',
			'fix',
			'perf',
			'refactor',
			'revert',
			'style',
			'test',
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