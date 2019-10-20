import chalk from 'chalk'
import inquirer from 'inquirer'
import figlet from 'figlet'

import * as log from './log'

interface Answers {
    name: string
}

const packageJson = require('../package.json')

const questions = [
    // @see https://github.com/SBoudrias/Inquirer.js/tree/master/packages/inquirer/examples
    {
        type: 'input',
        name: 'name',
        message: 'Who should I say hello to?',
        default: 'World!',
    },
]
;(async function main() {
    try {
        printAsciiArt(packageJson.name)
        const answers: Answers = await inquirer.prompt(questions)
        log.info(`Hello, ${chalk.green(answers.name)}`)
    } catch (e) {
        log.fatal(e)
        process.exit(1)
    }
})()

function printAsciiArt(content: string) {
    log.info(chalk.cyan(figlet.textSync(content)))
}
