var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('newMessage', function (message) {
    console.log("newMessage", message);
    
    var  li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

socket.on('disconnect', function () {
    console.log("Disconnected from server");
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault(); // Prevent the default behaviour i.e Reload

    socket.emit('createMessage', {
        from: "User",
        text: jQuery('[name=message]').val()
    }, function () {

    });
});