import { CreateGameCommand } from './CreateGameCommand'
import ICommandConfig from '../../../common/ICommandConfig'

export class GameCommandFactory<ICommandFactory> {
    makeCommand = (config: ICommandConfig) => {

        const nameCommand = config.commandName;
        switch (nameCommand) {
            case CreateGameCommand.name:
                return new CreateGameCommand(config.args)

            default:
                throw new Error('Command not found!');
        }
    }
}