const socket = io();

$(() => {
  const messages = $('#messages');
  const input = $('#new-message input');

  $('#new-message').keypress(e => {
    if(e.which == 13) {
      socket.emit('message:send', {
        text: input.val()
      });

      input.val('');
    }
  });

  socket.on('message:sent', evt => {
    messages.append($('<li>').html(evt.text))
  });
});