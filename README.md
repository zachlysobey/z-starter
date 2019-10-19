# 🕶 𝓩-Starter 🕶

*Starter templates for various types of JavaScript / TypeScript project.*

## How it works

Check out [this repository's branches](https://github.com/zachlysobey/z-starter/branches/all). They serve as different starter templates for different types of project.

See the [network graph](https://github.com/zachlysobey/z-starter/network) to understand the relationships between differrent branches. Some serve as the base for others.

The idea is that new projects can choose different branches as a starting point.

## Usage

I reccomend using the corresponding [`z-starter-cli`][cli] project to use these templates.

See the documentation [there][cli] for more detail, but usage would look something like this

1) Install the CLI: `$ npm install --global z-starter-cli`
1) Init a new project: `$ mkdir cat-meme-app && cd cat-meme-app && git init`
1) Run the CLI: `$ z-starter-cli`
1) ...?
1) Profit

## Example template (branch) commit history: [`nodejs-cli-typescript`](https://github.com/zachlysobey/z-starter/blob/nodejs-cli-typescript)

*just to give a quick idea of the scope and approach of these templates*

```
* 39f3e20 🏷️ convert to TypeScript
* a4270e9 🥩 beef up CLI
* 99f733b ➕ add figlet
* 3612b17 ➕ add inquirer
* b269ac8 ➕ add chalk
* 0db3d51 👷 add github actions workflow
* f5e138a ✅ add chai-as-promised
* af31a96 ✅ add chai assertions
* 3f7f593 ✅ add test:watch npm run-script
* 5b503c8 ✅ add mocha
* 7b00b44 💄 add 'prettier' pre-commit hook
* 4aa5fdb 💄 add 'prettier'
* 79ce3f8 👋 Hello, World!
* cd160b4 📝 add contributing guide
* 7c468ca 📝 add blank github pull-request template
* b54bb12 📝 add blank github issue template
* 0f151b5 📝 add README.md
* 617f525 🎉 npm init
```

[cli]: https://github.com/zachlysobey/z-starter-cli