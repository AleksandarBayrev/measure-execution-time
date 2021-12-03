import { stdoutCallbacks, stderrCallbacks } from "../mappers/messageCallbacks";
describe('messageCallbacks', () => {
    const originalConsoleLog = console.log;
    describe('stdoutCallbacks', () => {
        afterEach(() => {
            console.log = originalConsoleLog;
        });
        it('onClose', () => {
            const resCb = jest.fn();
            const performanceMock: Performance = {
                now: jest.fn(() => 1)
            } as any as Performance;
            stdoutCallbacks.onClose('test', 0, [], performanceMock, resCb);
            expect(performanceMock.now).toHaveBeenCalled();
            expect(resCb).toHaveBeenCalledWith({
                command: 'test',
                executionTime: 1
            });
        });
        it('onData', () => {
            const messages: string[] = [];
            stdoutCallbacks.onData(messages, 'test');
            expect(messages[0]).toEqual('test');
            expect(messages).toHaveLength(1);
        });
        it('onError', () => {
            console.log = jest.fn();
            const performanceMock: Performance = {
                now: jest.fn(() => 1)
            } as any as Performance;
            const resCb = jest.fn();
            stdoutCallbacks.onError('test', 0, new Error('test'), performanceMock,  resCb);
            expect(console.log).toHaveBeenCalledWith(`Command test error: Error: test`);
        });
    });
});