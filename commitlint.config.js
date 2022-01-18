module.exports = {
    extends: ['@commitlint/config-conventional'],
"rules": {
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
        // headerPattern: "/^(\w*)(?:\(([\w\$\.\-\* ]*)\))?\/",
        // headerCorrespondence: ["type", "scope"],
        issuePrefixesCaseSensitive : true,
        issuePrefixes: ['RISE-']
    }
},
prompt: {
    settings: {
        'enableMultipleScopes' : true
    },
    messages:{
        skip:['issuesBody']
    }
}
 
};