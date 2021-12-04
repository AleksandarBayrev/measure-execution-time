import { mapExecutionResult } from '../mappers';

describe('logTotalTime', () => {
    it('returns correct object', () => {
        const performanceMock: Performance = {
            now: jest.fn(() => 1)
        } as any as Performance;
        const result = mapExecutionResult(1, 'test', performanceMock);
        expect(result).toEqual({
            command: 'test',
            executionTime: 0
        });
    });
});