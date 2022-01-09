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
    'references-empty':[2,'always']
},
prompt: {
    settings:{

    },
    questions: {
        type: {
            description: "Select the type of change that you're committing",
            enum: {
                feat: {
                    description: 'A new feature 123',
                    title: 'Features',
                    emoji: '✨',
                },
                
            },
        },
        scope: {
            description:
                'What is the scope of this change (e.g. component or file name)',
        },
        subject: {
            description:
                'Write a short, imperative tense description of the change',
        },
        body: {
            description: 'Provide a longer description of the change',
        },
        isBreaking: {
            description: 'Are there any breaking changes?',
        },
        breakingBody: {
            description:
                'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
        },
        breaking: {
            description: 'Describe the breaking changes',
        },
        isIssueAffected: {
            description: 'Does this change affect any open issues?',
        },
        issuesBody: {
            description:
                'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
        },
        issues: {
            description: 'Add issue references (e.g. "fix #123", "re #123".)',
        },
    },
},
};