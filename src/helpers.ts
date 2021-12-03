import fs from 'fs';
import { Config } from './types';
import { performance } from 'perf_hooks';

export const getCommand = (listOfArguments: string[]): string => {
    const command = listOfArguments.slice(2).find(x => x.indexOf('--config') !== -1);
    return command || '';
}

export const logTotalTime = (startTime: number) => {
    console.log(`Total execution time: ${performance.now() - startTime} ms`);
}

export const readConfig = (path: string): Config => {
    try {
        return JSON.parse(fs.readFileSync(path, {
            encoding: 'utf-8',
            flag: 'r'
        }).toString()) as Config;
    } catch (err) {
        return {
            commands: []
        }
    }
}