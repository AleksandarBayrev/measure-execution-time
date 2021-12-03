import { ExecutionResult } from '../types';

export const logTotalTime = (startTime: number, command: string, performance: Performance): ExecutionResult => {
    return {
        command,
        executionTime: performance.now() - startTime
    }
}