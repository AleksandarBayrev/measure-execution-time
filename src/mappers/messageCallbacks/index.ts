import { mapExecutionResult } from '../../mappers';
import { ExecutionResult } from '../../types';

export const stderrCallbacks = {
    onError: (command: string, start: number, error: Error, performance: Performance, res: (value: ExecutionResult | PromiseLike<ExecutionResult>) => void) => {
        console.log(`Command ${command} error: ${error}`);
        res(mapExecutionResult(start, command, performance));
    }
}

export const stdoutCallbacks = {
    onError: (command: string, start: number, error: Error, performance: Performance, res: (value: ExecutionResult | PromiseLike<ExecutionResult>) => void) => {
        console.log(`Command ${command} error: ${error}`);
        res(mapExecutionResult(start, command, performance));
    },
    onData: (messageOutput: string[], data: any) => {
        messageOutput.push(data);
    },
    onClose: (command: string, start: number, output: string[], performance: Performance, res: (value: ExecutionResult | PromiseLike<ExecutionResult>) => void) => {
        console.log(`Command ${command} output: ${output.join('')}`);
        res(mapExecutionResult(start, command, performance));
    }
}