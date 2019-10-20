import simpleGit, { BranchSummary } from 'simple-git/promise'
import chalk from 'chalk'
import { QuestionCollection } from 'inquirer'

import * as log from './log'
import { buildQuestions } from './questions'
import { Answers, getAnswers } from './answers'

const git = simpleGit(process.cwd())

const packageJson = require('../package.json')
;(async function main() {
    try {
        log.asciiArt(packageJson.name)
        const questions = await getQuestions()
        const answers = await getAnswers(questions)
        handleAnswers(answers)
    } catch (e) {
        log.fatal(e)
        process.exit(1)
    }
})()

async function getQuestions(): Promise<QuestionCollection<Answers>> {
    const branches = await getBranches()
    const branchNames = branches.all
    const questions = await buildQuestions({
        branches: branchNames,
    })
    return questions
}

async function getBranches(): Promise<BranchSummary> {
    console.log(chalk.gray('getting branches...'))
    return git.branch({})
}

function handleAnswers({ branchName }: Answers) {
    log.raw(chalk`Hello, {green ${branchName}}!`)
}
