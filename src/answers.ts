import inquirer, {
    Answers as InquirerAnswers,
    QuestionCollection,
} from 'inquirer'

export interface Answers extends InquirerAnswers {
    branchName: string
}

export async function getAnswers(questions: QuestionCollection<Answers>) {
    return inquirer.prompt<Answers>(questions)
}
