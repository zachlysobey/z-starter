// For `inquirer`.
// @see https://github.com/SBoudrias/Inquirer.js/tree/master/packages/inquirer/examples

import { QuestionCollection } from 'inquirer'

import { Answers } from './answers'

export const buildQuestions = ({
    branches,
}: {
    branches: string[]
}): QuestionCollection<Answers> => {
    const questions = [
        {
            type: 'list',
            name: 'branchName',
            message: 'Select Branch',
            default: 'master',
            choices: branches,
        },
    ]
    return questions
}
