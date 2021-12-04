import { Config } from '../types';

export const printConfig = (config: Config) => {
    console.log(`Configuration: ${JSON.stringify(config)}`);
}