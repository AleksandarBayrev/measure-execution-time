import { exec } from '../dependencies';
import { ExecutionResult } from "../types";
import { stderrCallbacks, stdoutCallbacks } from './messageCallbacks';

export const mapCommands = async (command: string, start: number, results: ExecutionResult[]) => {
    const {stdout, stderr} = await exec(command);
    return await new Promise<ExecutionResult>((res, rej) => {
        let output: string[] = [];
        if (stderr) {
            stderr.on('error', (error) => stderrCallbacks.onError(command, start, error, performance, res));
        }
    
        if (stdout) {
            stdout.on('error', (error) => stdoutCallbacks.onError(command, start, error, performance, res));
            stdout.on('data', (data) => stdoutCallbacks.onData(output, data));
            stdout.on('close', () => stdoutCallbacks.onClose(command, start, output, performance, res));
        }
    });
}