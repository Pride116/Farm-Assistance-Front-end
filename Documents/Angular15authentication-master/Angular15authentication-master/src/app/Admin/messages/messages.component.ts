import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

}
// messaging.component.ts


export class MessagingsComponent {
  conversations = [
    {
      name: 'John Doe',
      messages: [
        { content: 'Hey, how are you?' },
        { content: 'I\'m doing well, thanks. How about you?' },
        { content: 'I\'m good too.' }
      ]
    },
    {
      name: 'Jane Doe',
      messages: [
        { content: 'Hi, how are you doing?' },
        { content: 'I\'m fine, thank you. How about you?' },
        { content: 'I\'m doing well, thanks.' }
      ]
    }
  ];
  activeConversation = this.conversations[0];
  newMessage = '';

  selectConversation(conversation: { name: string; messages: { content: string; }[]; }) {
    this.activeConversation = conversation;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.activeConversation.messages.push({ content: this.newMessage });
      this.newMessage = '';
    }
  }
}
