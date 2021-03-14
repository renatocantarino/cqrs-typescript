import { CreateGame } from './CreateGame'
import { GetAll } from './GetAll'
import ICommandConfig from '../../common/ICommandConfig'


export class CRUDCommandFactory<ICommandFactory> {    
    makeCommand = (config: ICommandConfig) => {
        const nameCommand = config.commandName;
        console.log(nameCommand)
        switch (nameCommand) {
            case CreateGame.name:
                return new CreateGame(config.args)

            case GetAll.name:
                return new GetAll()

            default:
                throw new Error('Command not found!');
        }
    }
}