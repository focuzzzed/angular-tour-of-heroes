import { Component } from '@angular/core';
import { MessagesService } from './messages.service';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  constructor(
    public readonly messagesService: MessagesService,
  ) { }
}
