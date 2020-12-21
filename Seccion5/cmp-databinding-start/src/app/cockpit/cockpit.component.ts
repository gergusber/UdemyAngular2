import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
    this.serverCreated.emit(
      {
        serverName: this.newServerName,
        serverContent: this.newServerContent
      });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit(
      {
        serverName: this.newServerName,
        serverContent: this.newServerContent
      });
  }
}
