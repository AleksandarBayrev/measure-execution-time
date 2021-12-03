import { ExecutionResult } from '../types';

export const printExecutionResults = (results: ExecutionResult[]) => {
    let totalExecutionTime = 0;
    results.map(x => {
        totalExecutionTime += x.executionTime
    });
    console.log(`Total execution time: ${totalExecutionTime}`);
}