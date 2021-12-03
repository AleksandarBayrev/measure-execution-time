import process from 'process';
import { getCommand, logTotalTime, readConfig } from './helpers';
import { performance } from 'perf_hooks';
import { exec } from 'child_process';

(() => {
    let configArgument = getCommand(process.argv);
    console.log(configArgument);
    if (configArgument.length === 0) {
        console.error('Specify a JSON config file that follows this structure:');
        console.log(`{commands: Array<string>}`);
        return;
    }
    const config = readConfig(configArgument.split('=')[1])
    if (config.commands.length === 0) {
        console.error('Specify commands to be measured!')
        return;
    }
    const start = performance.now();
    config.commands.map(async (command) => {
        const {stdout, stderr} = await exec(command);
        stderr?.on('error', (error) => {
            console.log(`Command ${command} error: ${error}`);
        });
        stdout?.on('error', (error) => {
            console.log(`Command ${command} error: ${error}`);
        });
        stdout?.on('data', (data) => {
            console.log(`Command ${command} output: ${data}`);
        });
        stdout?.on('close', () => {
            logTotalTime(start);
        })
    });
})()