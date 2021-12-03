import { ExecutionResult } from "../types";

export const logSingleCommandInfo = (x: ExecutionResult) => {
    console.log(`Command ${x.command} execution time: ${x.executionTime}`);
    return x;
}