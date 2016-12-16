var exec = require('child_process').exec;

function iniciar ( response ) {
	console.log('Manipulador de peticion "iniciar" ha sido llamado');
	exec('ls -lah', function (error, stdout, stderr) {
		response.writeHead(200, {'Content-type': 'text/html'});
		response.write('<pre>'+stdout+'</pre>');
		response.end();
	})
}

function subir ( response ) {
	console.log("Manipulador de peticion 'subir' ha sido llamado");
	response.writeHead(200, {'Content-type':'text/html'});
	response.write('Hola subir');
	response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;