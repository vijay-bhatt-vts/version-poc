const ref = process.env.GITHUB_REF;
const branch = ref.split('/').pop();

const config = {
    "branches": [
        "main",
        {
          "name": "staging",
          "prerelease": true
        },
        {
          "name": "staging1",
          "prerelease": true
        },
        {
          "name": "staging2",
          "prerelease": true
        },
        {
          "name": "staging3",
          "prerelease": true
        }
      ],
      "plugins": [
        ["@semantic-release/commit-analyzer", {
          "releaseRules": [
            {"breaking": true, "release": "major"},
            {"revert": true, "release": "patch"},
            {"type": "feat", "release": "minor"},
            {"type": "fix", "release": "patch"},
            {"type": "perf", "release": "patch"},
            {"type": "docs", "release": "patch"},
            {"type": "refactor", "release": "patch"},
            {"type": "style", "release": "patch"},
            {"type": "test", "release": "patch"},
            {"type": "build", "release": "patch"},
            {"type": "ci", "release": "patch"},
            {"type": "chore", "release": "patch"},
            {"header": "**", "release": "patch"}
          ],
          "parserOpts": {
            "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
          }
        }],
        "@semantic-release/release-notes-generator",
        [
          "@semantic-release/changelog",
          {
            "changelogFile": `docs/CHANGELOG_${branch}.md`
          }
        ],
        ["@semantic-release/exec", {
            "analyzeCommitsCmd":"./analyzeCommits.sh ${commits} ${nextRelease}"
          }],
        ["@semantic-release/git", {
          "assets": [ "docs"],
          "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }],
        "@semantic-release/npm",
        "@semantic-release/github"
      ]
  }
  
//   if (config.branches.some(it => it === branch || (it.name === branch && !it.prerelease))) {

//     config.plugins.push('@semantic-release/changelog', [
//       '@semantic-release/git',
//       {
//         assets: ['CHANGELOG.md'],
//         message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}',
//       },
//     ])
//   }
  
  module.exports = config

