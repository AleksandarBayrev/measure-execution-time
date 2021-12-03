import { performance } from 'perf_hooks';
import { ExecutionResult } from '../types';

export const logTotalTime = (startTime: number, command: string): ExecutionResult => {
    return {
        command,
        executionTime: performance.now() - startTime
    }
}