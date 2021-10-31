import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeckCardsService {
  allCards:any;
  constructor(private http:HttpClient) { }

  getAllCards(){
    return this.http.get('https://deckofcards20211030235030.azurewebsites.net/cards/getAllCards');
   }

   getSortedValues(selectedCards:any){
     return this.http.post('https://deckofcards20211030235030.azurewebsites.net/cards/sortedCards',selectedCards);
   }
}
