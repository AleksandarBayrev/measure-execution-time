import { logSingleCommandInfo } from '../mappers';
import { ExecutionResult } from '../types';

describe('logSingleCommandInfo', () =>  {
    const originalConsoleLog = console.log
    beforeEach(() => {
        console.log = originalConsoleLog;
    });
    it('logs on the console', () => {
        console.log = jest.fn();
        const result: ExecutionResult = {
            command: 'test',
            executionTime: 1
        };
        logSingleCommandInfo(result);
        expect(console.log).toHaveBeenCalledWith('Command test execution time: 1ms');
    });
});