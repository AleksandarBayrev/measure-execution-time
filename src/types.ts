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

export type FileReadOptions = {
    encoding?: BufferEncoding
    flag?: string
}

export type TimeMeasurement = 'ms';

export type AppMessages = {
    ERROR_STRUCTURE: string
    VALID_STRUCTURE: string
    MISSING_COMMANDS: string
}