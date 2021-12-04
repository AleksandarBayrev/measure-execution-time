
import { getCommand, printConfig, printExecutionResults, readConfig, logSingleCommandInfo } from './helpers';
import { mapCommands } from './mappers';
import { process } from './dependencies';
import { messages } from './constants';

(async () => {
    const configArgument = getCommand(process.argv);
    if (configArgument.value.length === 0) {
        console.error(messages.ERROR_STRUCTURE);
        console.log(messages.VALID_STRUCTURE);
        return;
    }
    const config = readConfig(configArgument.value);
    printConfig(config);
    if (!config.hasOwnProperty('commands')) {
        console.error(messages.MISSING_COMMANDS);
        return;
    }
    if (config.commands.length === 0) {
        console.error(messages.MISSING_COMMANDS);
        return;
    }
    const start = performance.now();
    const results = await (
        await Promise.all(config.commands.map(async (command) =>
            await mapCommands(command, start))
        )
    ).map(logSingleCommandInfo);
    printExecutionResults(results);
})();