import chalk from 'chalk'
import figlet from 'figlet'

type LogFunc = (...args: any[]) => void

export const trace: LogFunc = (...args) => {
    console.log(chalk.gray.inverse('[TRACE]'), ...args)
}
export const info: LogFunc = (...args) => {
    console.log(chalk.inverse('[INFO]'), ...args)
}

export const warn: LogFunc = (...args) => {
    console.warn(chalk.bgYellow.black('[WARN]'), ...args)
}

export const error: LogFunc = (...args) => {
    console.error(chalk.bgRedBright.black(`[ERROR]`), ...args)
}

export const fatal: LogFunc = (...args) => {
    console.error(chalk.bold.bgRed(`[FATAL]`), ...args)
}

export const asciiArt: LogFunc = (content: string, ...args) => {
    console.log(chalk.cyan(figlet.textSync(content)))
    console.log(...args)
}
