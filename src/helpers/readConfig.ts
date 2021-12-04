import fs from 'fs';
import { fileReadOptions } from '../constants';
import { Config } from '../types';

export const readConfig = (path: string): Config => {
    try {
        return JSON.parse(fs.readFileSync(path, fileReadOptions).toString()) as Config;
    } catch (err) {
        return {
            commands: []
        };
    }
}