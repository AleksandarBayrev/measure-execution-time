import { timeMeasurement } from '../constants';
import { ExecutionResult } from '../types';

export const logSingleCommandInfo = (x: ExecutionResult) => {
    console.log(`Command ${x.command} execution time: ${x.executionTime}${timeMeasurement}`);
    return x;
}