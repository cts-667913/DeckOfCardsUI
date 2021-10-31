import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DeckCardsService } from 'src/deck-cards.service';
// import { DeckCardsService } from '../deck-cards.service';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css'],
  providers:[DeckCardsService]
})
export class ShowCardsComponent implements OnInit {
  allCards:any;

  cardForm = new FormControl();
  deckOfCardList: any;
  selectedCards: any = [];

  sortedCards:any=[];
  constructor(private service:DeckCardsService) { }
  
  selectedLevel:string='';
  sortedCardsString:string='';
  showSpinner=false;

  ngOnInit() {
    this.service.getAllCards().subscribe(data=>{
      this.deckOfCardList=data;

    });
    this.deckOfCardList=this.allCards;
    
  }
  onSubmit(){
    if(this.selectedCards==[]){
      this.selectedLevel='';
    }else{
      this.showSpinner=true;
      setTimeout(() => {
        this.showSpinner=false;
      }, 500);
      this.service.getSortedValues(this.selectedCards).subscribe(data=>{
        this.sortedCards=data;
      })}
    
      // this.sortedCardsString=this.sortedCards.join(',');

  }
  selectedCardsString:string='';
  onSelect(event:any) {
    if (event.isUserInput) {
      if (event.source.selected) {
        this.selectedCards.push(event.source.value);
        this.selectedCardsString=this.selectedCards.join(',');

      } else {
        this.selectedCards = this.selectedCards.filter((d: any) => d !== event.source.value);
        this.selectedCardsString=this.selectedCards.join(',');
    }
  }
}
onReset(){
  this.cardForm.reset();
  this.sortedCards=[];
  this.selectedCards=[];
  this.selectedCardsString='';
}
}
