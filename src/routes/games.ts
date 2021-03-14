var express = require('express')
var gamesRouter = express.Router()
import { Games } from '../entity/Games'

import { CreateGameCommand } from '../commands/application/games/CreateGameCommand'
import { GetAllQuery } from '../queries/games/GetAllQuery'

gamesRouter.get('/', async (req, res, next) => {    
    res.status(201).json(await new GetAllQuery().execute());
})

gamesRouter.post('/create', (req, res, next) => {
    const { name } = req.body;   
    let game = new Games();
    game.Name = name;

    res.status(201).json(new CreateGameCommand(game).execute());
})

export default gamesRouter