import React, { Component } from 'react';
import $ from 'jquery';

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000')
class ChatBoxComponent extends Component {
    state = {
    }
    

      
      async componentWillMount()  {
        try {
            const script1 = document.createElement("script");
            const script2 = document.createElement("script");

            script1.src = "https://cdn.socket.io/socket.io-1.2.0.js";
            script2.src = "https://code.jquery.com/jquery-1.11.1.js";

            script1.async = true;
            script2.async = true;
            await document.body.appendChild(script1);
            await document.body.appendChild(script2);
            await $(function () {
                $('form').submit(function(){
                  socket.emit('chat message', $('#m').val());
                  $('#m').val('');
                  return false;
                });
                socket.on('chat message', function(msg){
                  $('#messages').append($('<li>').text(msg));
                  window.scrollTo(0, document.body.scrollHeight);
                });
              });
        } catch (error) {}
      }
    render() {
      
          

        return (
            <div>
                <ul id="messages"></ul>
                    <form action="">
                        <input id="m" autocomplete="off" /><button>Send</button>
                    </form>
            </div>
        );
    }
}

export default ChatBoxComponent;