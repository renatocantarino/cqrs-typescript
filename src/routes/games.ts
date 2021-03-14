var express = require('express')
var gamesRouter = express.Router()
import { Games } from '../entity/Games'

import { POSTCommand } from '../commands/application/games/POSTGameCommand'
import { GetAll } from '../queries/games/GetAll'

gamesRouter.get('/', async (req, res, next) => {    
    res.status(201).json(await new GetAll().execute());
})

gamesRouter.post('/create', (req, res, next) => {
    const { name } = req.body;   
    let game = new Games();
    game.Name = name;

    res.status(201).json(new POSTCommand(game).execute());
})

export default gamesRouter