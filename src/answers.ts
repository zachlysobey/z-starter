import inquirer, {
    Answers as InquirerAnswers,
    QuestionCollection
} from 'inquirer'

export interface Answers extends InquirerAnswers {
    name: string
}

export async function getAnswers (questions: QuestionCollection) {
    return inquirer.prompt<Answers>(questions)
}
