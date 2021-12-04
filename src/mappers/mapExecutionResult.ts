import { ExecutionResult } from '../types';

export const mapExecutionResult = (startTime: number, command: string, performance: Performance): ExecutionResult => {
    return {
        command,
        executionTime: performance.now() - startTime
    }
}