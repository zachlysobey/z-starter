# 🕶 𝓩-Starter 🕶

*Starter templates for various types of JavaScript / TypeScript project.*

## ⚠️use the different branches here for different project types ⚠️

Check out [this repository's branches](https://github.com/zachlysobey/z-starter/branches/all). They serve as different starter templates for different types of project.

See the [network graph](https://github.com/zachlysobey/z-starter/network) to understand the relationships between differrent branches. Some serve as the base for others.

## Usage

I've been using this project by adding it as a *remote* on a new git repository.

So If I wanted to make a react app called `cat-meme-app` I would do something like:

```
mkdir cat-meme-app
cd cat-meme-app
git init
git remote add starter git@github.com:zachlysobey/z-starter.git
git reset --hard starter/react
```

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
