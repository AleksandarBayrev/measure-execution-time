import fs from 'fs';
import { Config } from '../types';

export const readConfig = (path: string): Config => {
    try {
        return JSON.parse(fs.readFileSync(path, {
            encoding: 'utf-8',
            flag: 'r'
        }).toString()) as Config;
    } catch (err) {
        return {
            commands: []
        };
    }
}