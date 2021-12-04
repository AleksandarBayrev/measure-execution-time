import { printConfig } from '../helpers';

describe('printConfig', () => {
    const originalConsoleLog = console.log;

    beforeEach(() => {
        console.log = originalConsoleLog;
    });

    it('logs configuration', () => {
        console.log = jest.fn();
        printConfig({
            commands: ['test']
        });
        expect(console.log).toHaveBeenCalledWith('Configuration: {"commands":["test"]}');
    });
});