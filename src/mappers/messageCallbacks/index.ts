import { mapExecutionResult } from '../../mappers';
import { ExecutionResult } from '../../types';

const printError = (command: string, error: Error) => {
    console.log(`Command ${command} error: ${error}`);
}

const printOutput = (command: string, output: string[]) => {
    console.log(`Command ${command} output: ${output.join('')}`);
}

export const stderrCallbacks = {
    onError: (command: string, start: number, error: Error, performance: Performance, res: (value: ExecutionResult | PromiseLike<ExecutionResult>) => void) => {
        printError(command, error);
        res(mapExecutionResult(start, command, performance));
    }
}

export const stdoutCallbacks = {
    onError: (command: string, start: number, error: Error, performance: Performance, res: (value: ExecutionResult | PromiseLike<ExecutionResult>) => void) => {
        printError(command, error);
        res(mapExecutionResult(start, command, performance));
    },
    onData: (messageOutput: string[], data: any) => {
        messageOutput.push(data);
    },
    onClose: (command: string, start: number, output: string[], performance: Performance, res: (value: ExecutionResult | PromiseLike<ExecutionResult>) => void) => {
        printOutput(command, output);
        res(mapExecutionResult(start, command, performance));
    }
}