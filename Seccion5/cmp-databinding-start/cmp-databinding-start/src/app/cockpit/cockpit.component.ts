import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "events";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() onAddBlueprintAdded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  constructor() {

  }

  newServerName = "";
  newServerContent = "";

  ngOnInit() {}

  onAddServer() {
    this.serverCreated.emit({
        serverName: this.newServerName,
        serverContent:this.newServerContent
      });
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint() {
    this.onAddBlueprintAdded.emit({
      serverName: this.newServerName,
      serverContent:this.newServerContent
    });
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
