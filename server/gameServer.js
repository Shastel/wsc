import { Server as WebSocketServer } from 'uws';
import master from './master';

import cli from './cli';

import constants from './constants/messages';

import { getGameStatus } from './game/stat';
import defaultVerifyClient from './utils/verify_client';

let wss = null;

export function createGameServer({server, verifyClient = defaultVerifyClient}) {
    wss = new WebSocketServer({
        server,
        verifyClient,
    });

    wss.on('connection', function (socket) {
        if(master.isMaster(socket)) {
            cli.log('Master detected');
        } else {
            socket.on('message', function __onGameMessage(message) {
                if(false) {
                    socket.send(message);
                } else {
                    socket.send(JSON.stringify(constants.GAME_NOT_START_MSG));
                }
            });

            socket.on('close', function (){

            });
        }

    });

    return wss;
}

export wss;
