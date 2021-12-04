
import { getCommand, printExecutionResults, readConfig } from './helpers';
import { mapCommands, logSingleCommandInfo } from './mappers';
import { process } from './dependencies';

(async () => {
    let configArgument = getCommand(process.argv);
    if (configArgument.value.length === 0) {
        console.error('Specify a JSON config file that follows this structure:');
        console.log(`{commands: Array<string>}`);
        return;
    }
    const config = readConfig(configArgument.value);
    console.log(`Configuration: ${JSON.stringify(config)}`);
    if (config.commands.length === 0) {
        console.error('Specify commands to be measured!');
        return;
    }
    const start = performance.now();
    const results = await (
        await Promise.all(config.commands.map(async (command) =>
            await mapCommands(command, start))
        )
    ).map(logSingleCommandInfo);
    printExecutionResults(results)
})();