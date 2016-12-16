function route (handle, pathname, response) {
	console.log("A punto de routear una peticion para " + pathname);

	if ( typeof handle[pathname] === 'function' ) {
		return handle[pathname](response);

	}else {
		console.log( 'No se encontro manipulador para ' + pathname );
		response.writeHead(404, {"Content-type": "text/html"});
		response.write("404 No encontrado");
		response.end();
	}
}

exports.route = route;