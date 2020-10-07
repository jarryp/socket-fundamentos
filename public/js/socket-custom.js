var socket = io();

socket.on('connect', function() {
    console.log('Conectado con el servidor');
});

socket.on('disconnect', function() {
    console.log('se perdido la conexión con el servidor');
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});

// emit   Enviar informacion
// on     escuchar información

socket.emit('enviarMensaje', {
    usuario: 'Jarry',
    message: 'Hola Mundo!!!'
}, function(resp) {
    console.log('Respuesta del servidor: ', resp);
});