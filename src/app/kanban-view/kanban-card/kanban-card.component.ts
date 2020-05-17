import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.css']
})
export class KanbanCardComponent implements OnInit {
  @Input() card: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onCardSelected: EventEmitter<{}> = new EventEmitter<{}>();

  constructor() { }

  ngOnInit() {
  }

  onCardSelect(id, name) {
    this.onCardSelected.emit({id, name});
    // console.log('In the kanban card component:' + id + name);
  }
}
