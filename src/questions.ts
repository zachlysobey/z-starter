// For `inquirer`.
// @see https://github.com/SBoudrias/Inquirer.js/tree/master/packages/inquirer/examples

import { QuestionCollection } from 'inquirer'

export const questions: QuestionCollection = [
    {
        type: 'choose-a-branch',
        name: 'name',
        message: 'Who should I say hello to?',
        default: 'World!',
    },
]
