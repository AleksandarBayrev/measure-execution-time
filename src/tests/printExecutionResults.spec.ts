import { printExecutionResults } from "../helpers";

describe('printExecutionResults', () => {
    const originalConsoleLog = console.log

    beforeEach(() => {
        console.log = originalConsoleLog;
    });

    it('returns correct mapping', () => {
        console.log = jest.fn();
        printExecutionResults([{
            command: 'test',
            executionTime: 1
        }]);
        expect(console.log).toHaveBeenCalledWith('Total execution time: 1ms');
    });
});