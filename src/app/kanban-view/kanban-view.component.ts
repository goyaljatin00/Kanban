import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { tick } from '@angular/core/testing';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-kanban-view',
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.css']
})
export class KanbanViewComponent implements OnInit {

  stages = [{
    id: 1,
    name: 'Backlog',
    cards: [],
  }, {
    id: 2,
    name: 'To Do',
    cards: [],
  }, {
    id: 3,
    name: 'Ongoing',
    cards: [],
  }, {
    id: 4,
    name: 'Done',
    cards: [],
  }];

  newCardName = '';
  selectedCardName = '';
  selectedStageIndex = -1;
  selectedCardId;

  constructor() { }

  ngOnInit() {
  }

  onAddCard(name: string) {
    // console.log(item);
    const id = this.stages[0].cards.length + 1;
    this.stages[0].cards.push({id, name});
    this.newCardName = '';
  }

  onCardselect(data: {}) {
     const finalData = JSON.parse(JSON.stringify(data));
     this.selectedStageIndex = finalData.sid;
     this.selectedCardName = finalData.data.name;
     this.selectedCardId = finalData.data.id;
  }

  onMoveBackCard() {
    const stageId = this.selectedStageIndex - 1;
    this.stages.find((stage) => stage.id === stageId).cards
    .push({name: this.selectedCardName, id: this.selectedCardId});

    this.stages.find((stage) => stage.id === this.selectedStageIndex).cards
    .splice(this.stages.find((stage) => stage.id === this.selectedStageIndex)
    .cards.findIndex(item => item.name === this.selectedCardName && item.id === this.selectedCardId ), 1);
    this.selectedStageIndex -= 1;
  }

  onMoveForwardCard() {
    const stageId = this.selectedStageIndex + 1;
    this.stages.find((stage) => stage.id === stageId).cards
    .push({name: this.selectedCardName, id: this.selectedCardId});

    this.stages.find((stage) => stage.id === this.selectedStageIndex).cards
    .splice(this.stages.find((stage) => stage.id === this.selectedStageIndex)
    .cards.findIndex(item => item.name === this.selectedCardName && item.id === this.selectedCardId ), 1);
    this.selectedStageIndex += 1;
  }

  onDeleteCard() {
    this.stages.find((stage) => stage.id === this.selectedStageIndex).cards
    .splice(this.stages.find((stage) => stage.id === this.selectedStageIndex)
    .cards.findIndex(item => item.name === this.selectedCardName && item.id === this.selectedCardId ), 1);
    this.selectedCardName = '';
  }

}
