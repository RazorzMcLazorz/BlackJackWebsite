import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Title from './title';
import Input from './input';

let text = null;

function formatName(fld) {
    return fld.firstName + '' + fld.lastName;
}

export default class App extends Component {
    
    fld(event) {
    console.log('fold');
    };  
// yolo
// <button type="submit" onClick={this.fld}>boop</button>
  render() {
    return (
        <div className="app">
            <div id="html">
                <Title />
                <Input />
            </div>
        </div>
    );
  }
}

// //------------------------------List / Dicts------------------------------

// const Card_Deck = {
// 	1 : 'Clubs Ace',
// 	2 : 'Clubs 2',
// 	3 : 'Clubs 3',
// 	4 : 'Clubs 4',
// 	5 : 'Clubs 5',
// 	6 : 'Clubs 6',
// 	7 : 'Clubs 7',
// 	8 : 'Clubs 8',
// 	9 : 'Clubs 9',
// 	10 : 'Clubs 10',
// 	11 : 'Clubs Jack',
// 	12 : 'Clubs Queen',
// 	13 : 'Clubs King',
// 	14 : 'Diamonds Ace',
// 	15 : 'Diamonds 2',
// 	16 : 'Diamonds 3',
// 	17 : 'Diamonds 4',
// 	18 : 'Diamonds 5',
// 	19 : 'Diamonds 6',
// 	20 : 'Diamonds 7',
// 	21 : 'Diamonds 8',
// 	22 : 'Diamonds 9',
// 	23 : 'Diamonds 10',
// 	24 : 'Diamonds Jack',
// 	25 : 'Diamonds Queen',
// 	26 : 'Diamonds King',
// 	27 : 'Hearts Ace',
// 	28 : 'Hearts 2',
// 	29 : 'Hearts 3',
// 	30 : 'Hearts 4',
// 	31 : 'Hearts 5',
// 	32 : 'Hearts 6',
// 	33 : 'Hearts 7',
// 	34 : 'Hearts 8',
// 	35 : 'Hearts 9',
// 	36 : 'Hearts 10',
// 	37 : 'Hearts Jack',
// 	38 : 'Hearts Queen',
// 	39 : 'Hearts King',
// 	40 : 'Spades Ace',
// 	41 : 'Spades 2',
// 	42 : 'Spades 3',
// 	43 : 'Spades 4',
// 	44 : 'Spades 5',
// 	45 : 'Spades 6',
// 	46 : 'Spades 7',
// 	47 : 'Spades 8',
// 	48 : 'Spades 9',
// 	49 : 'Spades 10',
// 	50 : 'Spades Jack',
// 	51 : 'Spades Queen',
// 	52 : 'Spades King',
// };

// const Card_Deck_Value = {
// 	1 : 11,
// 	2 : 2,
// 	3 : 3,
// 	4 : 4,
// 	5 : 5,
// 	6 : 6,
// 	7 : 7,
// 	8 : 8,
// 	9 : 9,
// 	10 : 10,
// 	11 : 10,
// 	12 : 10,
// 	13 : 10,
// 	14 : 11,
// 	15 : 2,
// 	16 : 3,
// 	17 : 4,
// 	18 : 5,
// 	19 : 6,
// 	20 : 7,
// 	21 : 8,
// 	22 : 9,
// 	23 : 10,
// 	24 : 10,
// 	25 : 10,
// 	26 : 10,
// 	27 : 11,
// 	28 : 2,
// 	29 : 3,
// 	30 : 4,
// 	31 : 5,
// 	32 : 6,
// 	33 : 7,
// 	34 : 8,
// 	35 : 9,
// 	36 : 10,
// 	37 : 10,
// 	38 : 10,
// 	39 : 10,
// 	40 : 11,
// 	41 : 2,
// 	42 : 3,
// 	43 : 4,
// 	44 : 5,
// 	45 : 6,
// 	46 : 7,
// 	47 : 8,
// 	48 : 9,
// 	49 : 10,
// 	50 : 10,
// 	51 : 10,
// 	52 : 10
// };

// let Player_Ones_Deck = [

// ];

// let Dealers_Deck = [

// ];


// //-----------------------------Variables----------------------------------

// let D = 1
// let choice = 1
// let equal2 = 0
// var rand

// //---------------------------Functions------------------------------------

// function Ransom() {
	
// 	let arg = Math.random() * (52 - 1 + 1) + 1;
// 	rand = arg
// };

// function Adding() {
// 	let i = 1;
// 	let x = 1;
// 	while (x === 1) {
// 		Ransom();
// 		if (rand in Player_Ones_Deck) {
// 			i--;
// 		}
// 		else if (rand in Dealers_Deck) {
// 			i--;
// 		}
// 		else {
// 			x--;
// 		}
// 	};
// };

// function FivePersonSplit () {
// 	let DeckSplit = 2;
// 	while (DeckSplit > 0) {
// 		Adding();
// 		Player_Ones_Deck.push(rand);
// 		Adding();
// 		Dealers_Deck.push(rand);
// 		DeckSplit -= 1
// 	};
// };

// function NewCard () {
// 	Adding();
// 	Player_Ones_Deck.push(rand);
// };

// function AceChanger() {
// 	var AceChanger1;
// 	var AceChanger2;
// 	var AceChanger3;
// 	var AceChanger4;
// 	if (Card_Deck_Value[player1] == 11) {
// 		console.log('change your ${Card_Deck[player1]} to equal 1 point not 11');
// 		console.log('y or n');
// 		correct = prompt();
// 		AceChanged1 = 11;
// 		if (correct === 'yes' || correct === 'y') {
// 			AceChanged1 = 1;
// 		}
// 	}
// 	if (Card_Deck_Value[player2] == 11) {
// 		console.log('change your ${Card_Deck[player2]} to equal 1 point not 11');
// 		console.log('y or n');
// 		correct = prompt();
// 		AceChanged2 = 11;
// 		if (correct === 'yes' || correct === 'y') {
// 			AceChanged2 = 1
// 		}
// 	}
// 	if(choose === 'Hit' || choose === 'hit' || choose === 'Split' || choose === 'split') {
// 		if (Card_Deck_Value[player3] == 11) {
// 			console.log('change your ${Card_Deck[player3]} to equal 1 point not 11');
// 			console.log('y or n');
// 			correct = prompt();
// 			AceChanged3 = 11;
// 			if (correct === 'yes' || correct === 'y'){
// 				AceChanged3 = 1;
// 			}
// 		}
// 	}
// 	if(choose === 'Split' || choose === 'split') {
// 		if (Card_Deck_Value[player4] === 11){
// 			console.log('change your ${Card_Deck[player4]} to equal 1 point not 11');
// 			console.log('y or n');
// 			correct = prompt();
// 			AceChanged4 = 11;
// 			if (correct === 'yes' || correct === 'y'){
// 				AceChanged4 = 1
// 			}
// 		}
// 	};
// };
// //------------------------------Code--------------------------------------

// console.log('Welcome to the BlackJack Table please take your seat');
// console.log();
// console.log('How to Play');
// console.log();
// console.log('Press Enter to Continue');
// let continu = prompt();
// while (D === 1) {
// 	console.log('+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x');
// 	console.log();
// 	console.log('*Dealer passes you your two Cards and prepares the Deck for your choice*');
// 	FivePersonSplit();
// 	let Dealer1 = Dealers_Deck.pop(0);
// 	let Dealer2 = Dealers_Deck.pop(0);
// 	let Dealer = Card_Deck_Value[Dealer1] + Card_Deck_Value[Dealer2];
// 	console.log();
// 	player1 = Player_Ones_Deck.pop(0);
// 	player2 = Player_Ones_Deck.pop(0);
// 	console.log('your Cards:');
// 	console.log('Card 1: ${Card_Deck[player1]}');
// 	console.log('Card 2: ${Card_Deck[player2]}');
// 	let equal = Card_Deck_Value[player1] + Card_Deck_Value[player2];
// 	console.log('Equal to: ${equal} points');
// 	console.log();
// 	console.log('The Dealers top card is a ${Card_Deck[Dealer1]}');
// 	console.log();
// 	console.log('Press Enter to Continue');
// 	continu = prompt();
	
// 	while (choice === 1) {
// 		console.log('+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x');
// 		console.log();
// 		console.log('your cards ${Card_Deck[player1]} / ${Card_Deck[player2]} Dealers card is ${Card_Deck[Dealer1]}');
// 		console.log();
// 		console.log('you now have a choice between...');
// 		console.log('Hit - you can ask the Dealer for another card');
// 		console.log('Stand - you do nothing because your satisfied with your cards');
// 		if(Card_Deck_Value[player1] === Card_Deck_Value[player2]) {
// 			console.log('Split - you can exersise split if you have dual cards, which will add a new card to each double and you can choose between both to be played first  ');
// 		};
// 		console.log('Double Down - Allows you to double your initial bet in return for receiving one card');
// 		console.log('Surrender - Forfeit the hand immediately with an automatic loss of half the original bet');
// 		choose = prompt();//###########################################################################
// 		console.log();
// 		if(choose === 'Hit' || choose === 'hit') {
// 			console.log('Heres another Card');
// 			NewCard();
// 			player3 = Player_Ones_Deck.pop(0);
// 			equal = Card_Deck_Value[player1] + Card_Deck_Value[player2] + Card_Deck_Value[player3];
// 			console.log();
// 			console.log('${Card_Deck[player3]} with your new total Value being ${equal}')
// 		}
// 		else if(choose === 'Stand' || choose === 'stand') {
// 			console.log('your satisfied with Cards');
// 		}
// 		else if(choose === 'Split' || choose === 'split') {
// 			NewCard();
// 			player3 = Player_Ones_Deck.pop(0);
// 			NewCard();
// 			player4 = Player_Ones_Deck.pop(0);
// 			equal = Card_Deck_Value[player1] + Card_Deck_Value[player3];
// 			equal2 = Card_Deck_Value[player2] + Card_Deck_Value[player4];
// 			console.log('your cards have been split and they are');
// 			console.log('First Set: ${Card_Deck[player1]} and ${Card_Deck[player3]} with a total of ${equal} and a bet of ');
// 			console.log('Second Set: ${Card_Deck[player2]} and ${Card_Deck[player4]} with a total of ${equal2} and a bet of ');
// 			console.log();
// 			console.log('The Dealers set is ${Card_Deck[Dealer1]} and ${Card_Deck[Dealer2]}');
// 			if (equal2 < Dealer) {
// 				console.log('The Dealer Beat you this round');
// 				break;
// 			}
// 		}
// 		else if(choose === 'Double Down' || choose === 'double down') {
// 			console.log();
// 		}
// 		else if(choose === 'Surrender' || choose === 'surrender') {
// 			console.log('you surrender and retain half of your bet');
// 			break;
// 		}
// 		else if(choose === 'Menu' || choose === 'menu') {
// 			console.log()
// 		}
// 		else {
// 			continue;
// 		}
// 		console.log('Press Enter to Continue');
// 		continu = prompt();
		
// 		console.log('+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x');
// 		console.log();
// 		if (Card_Deck_Value[player1] === 10 && Card_Deck_Value[player2] === 11) {
// 			console.log('you got a natural BlackJack');
// 			console.log();
// 			console.log('your cards ${Card_Deck[player1]} / ${Card_Deck[player2]} Dealers card is ${Card_Deck[Dealer1]} and ${Card_Deck[Dealer2]}');
// 			break;
// 		}
// 		else if (Card_Deck_Value[player1] === 11 && Card_Deck_Value[player2] === 10) {
// 			console.log('you got a natural BlackJack');
// 			console.log();
// 			console.log('your cards ${Card_Deck[player1]} / ${Card_Deck[player2]} Dealers card is ${Card_Deck[Dealer1]} and ${Card_Deck[Dealer2]}');
// 			break;
// 		};
// 		AceChanger()
// 		if (equal > 21 || equal2 > 21) {
// 			console.log('You Busted!');
// 			//MONEY
// 		}
// 		else if (equal < Dealer) {
// 			console.log('The Dealer Beat you this round');
// 		}
// 		else if (equal == Dealer || equal2 == Dealer) {
// 			console.log('you tied');
// 		}
// 		else if (Dealer > equal && equal < 22){
// 			console.log('you beat the Dealer and got below 21 you win double of what you payed');
// 		}
// 		else if (Dealer > equal2 && equal2 < 22){
// 			console.log('you beat the Dealer and got below 21 you win double of what you payed');
// 		}
// 		else {
// 			console.log('');
// 		}
// 		console.log();
// 		console.log('your cards ${Card_Deck[player1]} / ${Card_Deck[player2]} Dealers card is ${Card_Deck[Dealer1]} and ${Card_Deck[Dealer2]}');
// 		break;
// 	};
// 	console.log('Press Enter to Continue');
// 	continu = prompt();
	
// };