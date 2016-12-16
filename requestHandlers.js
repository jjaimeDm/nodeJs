var querystring = require('querystring');

function iniciar ( response, postData ) {
	console.log('Manipulador de peticion "iniciar" ha sido llamado');	

	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">' + 
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Enviar texto" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(body);
    response.end();
}

function subir ( response, dataPosteada ) {
	console.log("Manipulador de peticion 'subir' ha sido llamado");
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write('Tu enviaste el texto: <code>' + querystring.parse(dataPosteada)['text'] + '</code>');
	response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;