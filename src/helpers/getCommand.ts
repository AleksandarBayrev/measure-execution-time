import { Command } from "../types";

const defaultCommand: Command = {
    name: '',
    value: ''
};

const configParameter = '--config';

const buildCommand = (argument: string): Command => {
    const splittedArgument = argument.split('=');
    return {
        name: splittedArgument[0],
        value: splittedArgument[1]
    }
}

export const getCommand = (listOfArguments: string[]): Command => {
    const command = listOfArguments.slice(2).find(x => x.indexOf(configParameter) !== -1);

    if (!command) {
        return defaultCommand;
    }

    return command ? buildCommand(command) : defaultCommand;
}