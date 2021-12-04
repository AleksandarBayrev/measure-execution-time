import { AppMessages, FileReadOptions, TimeMeasurement } from './types';

export const timeMeasurement: TimeMeasurement = 'ms';
export const fileReadOptions: FileReadOptions = {
    encoding: 'utf-8',
    flag: 'r'
};
export const messages: AppMessages = {
    ERROR_STRUCTURE: 'Specify a JSON config file that follows this structure:',
    VALID_STRUCTURE: '{commands: Array<string>}',
    MISSING_COMMANDS: 'Specify commands to be measured!'
};