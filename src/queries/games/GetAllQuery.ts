import * as DomainGameCommands from '../../domain/game';

export class GetAllQuery {
    public execute = () => {
        const crudCommandFactory = new DomainGameCommands.CRUDCommandFactory()
        const commandName = DomainGameCommands.GetAll.name

        const config = {
            commandName,
            args: ""
        }
        const command = crudCommandFactory.makeCommand(config)

        const results = command.execute()

        return results
    }

}