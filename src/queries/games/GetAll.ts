import { getManager } from "typeorm";
import { Games } from "../../entity/Games";
import { getRepository } from "typeorm";


export class GetAll {
    public execute = async () => {
        const todos = await getRepository(Games).find()
        return { todos }
    }

}