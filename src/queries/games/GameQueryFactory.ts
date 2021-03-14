import { GetAllQuery } from './GetAllQuery'
import ICommandConfig from '../../common/ICommandConfig'

export class GameQueryFactory<ICommandFactory> {
    makeCommand = (config: ICommandConfig) => {

        const nameCommand = config.commandName;
        switch (nameCommand) {
            case GetAllQuery.name:
                return new GetAllQuery()

            default:
                throw new Error('Command not found!');
        }
    }
}