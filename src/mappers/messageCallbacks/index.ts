import { logTotalTime } from "../../helpers";
import { ExecutionResult } from "../../types";

export const stderrCallbacks = {
    onError: (command: string, start: number, error: Error, res: (value: ExecutionResult | PromiseLike<ExecutionResult>) => void) => {
        console.log(`Command ${command} error: ${error}`);
        res(logTotalTime(start, command));
    }
}

export const stdoutCallbacks = {
    onError: (command: string, start: number, error: Error, res: (value: ExecutionResult | PromiseLike<ExecutionResult>) => void) => {
        console.log(`Command ${command} error: ${error}`);
        res(logTotalTime(start, command));
    },
    onData: (messageOutput: string[], data: any) => {
        messageOutput.push(data);
    },
    onClose: (command: string, start: number, output: string[], res: (value: ExecutionResult | PromiseLike<ExecutionResult>) => void) => {
        console.log(`Command ${command} output: ${output.join('')}`);
        res(logTotalTime(start, command));
    }
}