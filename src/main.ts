
import chalk from 'chalk'

import * as log from './log'
import { questions } from './questions'
import { Answers, getAnswers } from './answers'

const packageJson = require('../package.json')

;(async function main() {
    try {
        log.asciiArt(packageJson.name)
        const answers = await getAnswers(questions)
        handleAnswers(answers)
    } catch (e) {
        log.fatal(e)
        process.exit(1)
    }
})()

function handleAnswers ({
    name,
}: Answers) {
    log.raw(chalk`Hello, {green ${name}}!`)
}
