import { ICommandResponse } from './ICommandResponse'

export default interface IQuery {
    execute: () => ICommandResponse
}