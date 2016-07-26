const socket = io('http://localhost:8181/');
const messagesApiUrl = '/api/messages';

jQuery.extend({
  parseQuerystring: function () {
    var nvpair = {};
    var qs = window.location.search.replace('?', '');
    var pairs = qs.split('&');
    $.each(pairs, function (i, v) {
      var pair = v.split('=');
      nvpair[pair[0]] = pair[1];
    });
    return nvpair;
  }
});

$(() => {
  const messages = $('#messages');
  const input = $('#new-message input');
  const roomId = $.parseQuerystring().roomId;

  if (roomId) {
  	socket.emit('subscribe', { roomId });
  }

  $.get(messagesApiUrl, {
  	roomId
  })
    .then(messages => messages.results.forEach(addMessage));

  $('#new-message').keypress(e => {
    if (e.which == 13) {
      $.post(messagesApiUrl, {
        text: input.val(),
        roomId
      });

      input.val('');
    }
  });

  function addMessage (message) {
    messages.append($('<li>').html(message.text))
  }

  socket.on('message:sent', addMessage);
});