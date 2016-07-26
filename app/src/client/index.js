const socket = io();
const messagesApiUrl = '/api/messages';

$(() => {
  const messages = $('#messages');
  const input = $('#new-message input');

  $.get(messagesApiUrl)
    .then(messages => messages.results.forEach(addMessage));

  $('#new-message').keypress(e => {
    if (e.which == 13) {
      $.post(messagesApiUrl, {
        text: input.val()
      });

      input.val('');
    }
  });

  function addMessage (message) {
    messages.append($('<li>').html(message.text))
  }

  socket.on('message:sent', addMessage);
});