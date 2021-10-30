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

  toppings = new FormControl();
  deckOfCardList: any;
  selectedCards: any = [];

  sortedCards:any=[];
  constructor(private service:DeckCardsService) { }
  ngOnInit() {
    this.service.getAllCards().subscribe(data=>{
      this.deckOfCardList=data;

    });
    this.deckOfCardList=this.allCards;
    
  }
  onSubmit(){
    this.service.getSortedValues(this.selectedCards).subscribe(data=>{
      this.sortedCards=data;
    })
    console.log(this.sortedCards);
    this.toppings.reset();
  }
  onSelect(event:any) {
    if (event.isUserInput) {
      if (event.source.selected) {
        this.selectedCards.push(event.source.value);
      } else {
        this.selectedCards = this.selectedCards.filter((d: any) => d !== event.source.value)
    }
    console.log(this.selectedCards);
  }
}


}
