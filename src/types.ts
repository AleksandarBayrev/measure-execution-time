export type Config = {
    commands: string[]
}

export type ExecutionResult = {
    command: string
    executionTime: number
}

export type Command = {
    name: string
    value: string
}