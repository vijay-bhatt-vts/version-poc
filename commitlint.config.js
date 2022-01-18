module.exports = {
    extends: ['@commitlint/config-conventional'],
"rules": {
    'subject-empty': [2, 'never'],
    "body-empty": [2,'never'],
    'scope-empty': [2, 'never'],
    'scope-enum': [
        2,
        'always',
        ['Resident','Staff', 'PM', 'Payment', 'Automation','release']
    ],
    //'references-empty': [2, 'never']
},
parserPreset: {
    parserOpts: {
        //headerPattern: /^(\w*)(?:\(([\w\$\.\-\* ]*)\))?\: (.*)$/,
        headerCorrespondence: ["type", "scope", "subject"],
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