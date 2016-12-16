var server = require('./server');
var route = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {}
handle['/'] = requestHandlers.iniciar;
handle['/iniciar'] = requestHandlers.iniciar;
handle['/subir'] = requestHandlers.subir;
server.iniciar(route.route, handle);