import http from 'http';
import app from './server/server';
import { initializaeServers } from './server/web_socket/';
import { initializebot } from 'server/telegram';
import config from 'config';
import cli from './server/cli';

app.set('port', config.get('PORT'));

const server = http.createServer(app);

server.listen(config.get('PORT'));
server.on('error', function __onServerError(err){
    cli.log('*********************************');
    cli.log('**************PANIC**************');
    cli.log(err);
    cli.log('*********************************');
});

server.on('listening', function __onListening(){
    cli.log(`Server ready on: ${config.get('PORT')}`);

    initializaeServers({server});
    initializebot();
});
