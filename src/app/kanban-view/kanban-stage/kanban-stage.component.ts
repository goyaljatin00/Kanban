import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-kanban-stage',
  templateUrl: './kanban-stage.component.html',
  styleUrls: ['./kanban-stage.component.css']
})
export class KanbanStageComponent implements OnInit {

  @Input() stage;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onCardselect: EventEmitter<{}> = new EventEmitter<{}>();

  constructor() {}

  ngOnInit() {
  }

  onCardSelected(data: {}) {
    this.onCardselect.emit({data, sid: this.stage.id});
    // tslint:disable-next-line: no-string-literal
    // console.log('In the kanban stage componenet: ' , this.stage);
    // tslint:disable-next-line: no-string-literal
    // console.log(this.stage.id);
  }

}
