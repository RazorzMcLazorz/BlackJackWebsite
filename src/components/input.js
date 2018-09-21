import React, { Component } from 'react';

let num = null;
let DealerCard1 = 0;
let DealerCard2 = 0;
let DealerPoints = 0;
let cash = 50;
let makeShift_X = true;
let CardOne = 0;
let CardTwo = 0;
let CardThree = 0;
let C1 = true;
let C2 = true;
let C3 = true;
let CV1 = 0;
let CV2 = 0;
let CV3 = 0;
let temp = 0;

function ourRandomRange() {
    num = Math.floor(Math.random() * (52 - 1 + 1)) + 1;
}

ourRandomRange()

const Card_Deck = {
	1 : 'Clubs Ace',
	2 : 'Clubs 2',
	3 : 'Clubs 3',
	4 : 'Clubs 4',
	5 : 'Clubs 5',
	6 : 'Clubs 6',
	7 : 'Clubs 7',
	8 : 'Clubs 8',
	9 : 'Clubs 9',
	10 : 'Clubs 10',
	11 : 'Clubs Jack',
	12 : 'Clubs Queen',
	13 : 'Clubs King',
	14 : 'Diamonds Ace',
	15 : 'Diamonds 2',
	16 : 'Diamonds 3',
	17 : 'Diamonds 4',
	18 : 'Diamonds 5',
	19 : 'Diamonds 6',
	20 : 'Diamonds 7',
	21 : 'Diamonds 8',
	22 : 'Diamonds 9',
	23 : 'Diamonds 10',
	24 : 'Diamonds Jack',
	25 : 'Diamonds Queen',
	26 : 'Diamonds King',
	27 : 'Hearts Ace',
	28 : 'Hearts 2',
	29 : 'Hearts 3',
	30 : 'Hearts 4',
	31 : 'Hearts 5',
	32 : 'Hearts 6',
	33 : 'Hearts 7',
	34 : 'Hearts 8',
	35 : 'Hearts 9',
	36 : 'Hearts 10',
	37 : 'Hearts Jack',
	38 : 'Hearts Queen',
	39 : 'Hearts King',
	40 : 'Spades Ace',
	41 : 'Spades 2',
	42 : 'Spades 3',
	43 : 'Spades 4',
	44 : 'Spades 5',
	45 : 'Spades 6',
	46 : 'Spades 7',
	47 : 'Spades 8',
	48 : 'Spades 9',
	49 : 'Spades 10',
	50 : 'Spades Jack',
	51 : 'Spades Queen',
	52 : 'Spades King',
};

let Card_Deck_Value = {
	1 : 11,
	2 : 2,
	3 : 3,
	4 : 4,
	5 : 5,
	6 : 6,
	7 : 7,
	8 : 8,
	9 : 9,
	10 : 10,
	11 : 10,
	12 : 10,
	13 : 10,
	14 : 11,
	15 : 2,
	16 : 3,
	17 : 4,
	18 : 5,
	19 : 6,
	20 : 7,
	21 : 8,
	22 : 9,
	23 : 10,
	24 : 10,
	25 : 10,
	26 : 10,
	27 : 11,
	28 : 2,
	29 : 3,
	30 : 4,
	31 : 5,
	32 : 6,
	33 : 7,
	34 : 8,
	35 : 9,
	36 : 10,
	37 : 10,
	38 : 10,
	39 : 10,
	40 : 11,
	41 : 2,
	42 : 3,
	43 : 4,
	44 : 5,
	45 : 6,
	46 : 7,
	47 : 8,
	48 : 9,
	49 : 10,
	50 : 10,
	51 : 10,
	52 : 10
};


let used = [0];

function makeShift() {
    while (makeShift_X === true) {
        console.log('MAKESHIFT');
        ourRandomRange();
        console.log(num);
        for (let i = 0; i < used.length; i++) {
            
            if (num != used[i]) {
                console.log('your good');
                makeShift_X = false;
            }
            else if (num === used[i]) {
                console.log('nope not happening');
                makeShift_X = true;
                break;
            }
        }
    }
    used.push(num);
    console.log(used);
    makeShift_X = true;
}


class Input extends Component {

    constructor(props) { 
        super(props) 
            this.state = {
                gameNotStarted: true,
                text: 'Welcome to Black Jack - The game will walk you through the basics.',
                text2: 'the game is fair and not against you, RNG rules the board =D.',
                text3: '',
                dealerCardOne: 'Dealer Cards are displayed here',
                dealerCardTwo: '',
                dealerpoint: '',
                playerText: 'Your Cards:',
                playerCardOne: 'your Cards are displayed here',
                playerCardTwo: '',
                playerCardThree: '',
                money: '0',
                bets: false,
                bet: '0',
                selected: false,
                continue1: false,
                continue2: false,
                continue3: false,
                Ace1: false,
                Ace2: false,
                Ace3: false,
                CardOneVal: '',
                CardTwoVal: '',
                CardThreeVal: '',
                CardCombinedPoints: null,
                CardValue: '',
                gameEnded: true
        }
        this.startGame = this.startGame.bind(this);
        this.continueone = this.continueone.bind(this);
        this.continuetwo =  this.continuetwo.bind(this);
        this.continuethree = this.continuethree.bind(this);
        this.hit = this.hit.bind(this);
        this.stand = this.stand.bind(this);
        this.doubleDown = this.doubleDown.bind(this);
        this.surrender = this.surrender.bind(this);
        this.bet = this.bet.bind(this);
    }

    startGame() {
        this.setState({ gameNotStarted: false });
        this.setState({ bets: true });
        makeShift();
        DealerCard1 = num;
        makeShift();
        DealerCard2 = num;
        makeShift();
        CardOne = num;
        makeShift();
        CardTwo = num;
        this.setState({ })
        this.setState({ dealerCardOne: Card_Deck[DealerCard1]});
        this.setState({ dealerCardTwo: '????'});
        this.setState({ playerCardOne: Card_Deck[CardOne]});
        this.setState({ playerCardTwo: Card_Deck[CardTwo]});
        DealerPoints = Card_Deck_Value[DealerCard1] + Card_Deck_Value[DealerCard2];
        this.setState({ money: cash });
        this.setState({ bet: 0 });
        this.setState({ text: 'The Dealer has a ' + Card_Deck[DealerCard1] + ' shown, so try and makesure your total cards'});
        this.setState({ text2: 'are higher than the dealers shown card and mystery card but also under 21'});
        this.setState({ CardOneVal: Card_Deck_Value[CardOne] });
        this.setState({ CardTwoVal: Card_Deck_Value[CardTwo] });
    }

    plusten() {
        if (this.state.bet + 10 > this.state.money ) {
            console.log('too big');
        }
        else {
            this.setState({ bet: this.state.bet + 10 });
        }
    }
    plusfive() {
        if (this.state.bet + 5 > this.state.money ) {
            console.log('too big');
        }
        else {
            this.setState({ bet: this.state.bet + 5 });
        }
    }
    plusone() {
        if (this.state.bet + 1 > this.state.money ) {
            console.log('too big');
        }
        else {
            this.setState({ bet: this.state.bet + 1 });
        }
    }
    minusone() {
        if (this.state.bet - 1 < 0 ) {
            console.log('too small');
        }
        else {
            this.setState({ bet: this.state.bet - 1 });
        }
    }
    minusfive() {
        if (this.state.bet - 5 < 0 ) {
            console.log('too small');
        }
        else {
            this.setState({ bet: this.state.bet - 5 });
        }
    }
    minusten() {
        if (this.state.bet - 10 < 0 ) {
            console.log('too small');
        }
        else {
            this.setState({ bet: this.state.bet - 10 });
        }
    }

    bet() {
        this.setState({ bets: false });
        this.setState({ selected: true });
        this.setState({ text: 'Select one of the following options at the bottom' });
        this.setState({ text2: '' });
    }

    hit() {
        this.setState({ selected: false });
        this.setState({ continue1: true });
        makeShift();
        CardThree = num;
        this.setState({ playerCardThree: Card_Deck[CardThree] });
        this.setState({ text: '' });
        if ( 11 === Card_Deck_Value[CardOne]) {
            this.setState({ Ace1: true });
            console.log(CardOne);
        }
        if ( 11 === Card_Deck_Value[CardTwo]) {
            this.setState({ Ace2: true });
            console.log(CardOne);
        }
        if ( 11 === Card_Deck_Value[CardThree]) {
            this.setState({ Ace3: true });
        }
        this.setState({ CardThreeVal: Card_Deck_Value[CardThree] });
        this.setState({ text3: 'click the button that coresponds with your ace to be switched between 1 or 11 value.' });
    }

    stand() {
        this.setState({ selected: false });
        this.setState({ continue1: true });
        this.setState({ text3: 'click the button that coresponds with your ace to be switched between 1 or 11 value.' });
        if ( 11 === Card_Deck_Value[CardOne]) {
            this.setState({ Ace1: true });
            console.log(CardOne);
        }
        if ( 11 === Card_Deck_Value[CardTwo]) {
            this.setState({ Ace2: true });
            console.log(CardOne);
        }
        CV3 = 0;
    }

    doubleDown() {
        if (this.state.bet * 2 <= this.state.money) {
            this.setState({ selected: false });
            this.setState({ continue1: true });
            makeShift();
            CardThree = num;
            this.setState({ playerCardThree: Card_Deck[CardThree] });
            this.setState({ bet: this.state.bet * 2})
            this.setState({ CardThreeVal: Card_Deck_Value[CardThree] });
            this.setState({ text3: 'click the button that coresponds with your ace to be switched between 1 or 11 value.' });
        }
        else {
            this.setState({ text: 'Not enough money to double bet!' });
            this.setState({ text2: '' });
        }
        if (this.state.bet = this.state.money) {
            this.setState({ text2: 'you have a chance to loose the game!' })
        }
    }

    surrender() {
        cash = this.state.money - (this.state.bet / 2);
        this.setState({ money: cash });
        this.setState({ selected: false });
        this.setState({ continue1: false });
        this.setState({ continue2: false });
        this.setState({ continue3: false });
        this.setState({ gameNotStarted: true });
        this.setState({ dealerCardOne: '????' });
        this.setState({ dealerCardTwo: '????' });
        this.setState({ playerCardOne: '????'});
        this.setState({ playerCardTwo: '????'});
        this.setState({ text: 'you lost half your bet' });
        this.setState({ text2: '' });
        this.setState({ bet: 0 });
    }

    switchAceOne() {
        if (Card_Deck_Value[CardOne] === 11 && C1 === true) {
            this.setState({ CardOneVal: 1 });
            C1 = false;
        }
        else if (Card_Deck_Value[CardOne] === 11 && C1 === false) {
            this.setState({ CardOneVal: 11 });
            C1 = true;
        }
    }
    switchAceTwo() {
        if (Card_Deck_Value[CardTwo] === 11 && C2 === true) {
            this.setState({ CardTwoVal: 1 });
            C2 = false;
        }
        else if (Card_Deck_Value[CardTwo] === 11 && C2 === false) {
            this.setState({ CardTwoVal: 11 });
            C2 = true;
        }
    }
    switchAceThree() {
        if (Card_Deck_Value[CardThree] === 11 && C3 === true) {
            this.setState({ CardThreeVal: 1 });
            C3 = false;
        }
        else if (Card_Deck_Value[CardThree] === 11 && C3 === false) {
            this.setState({ CardThreeVal: 11 });
            C3 = true;
        }
    }
    continueone() {
        this.setState({ continue1: false });
        this.setState({ continue2: true });
        this.setState({ continue3: false });
        this.setState({ dealerCardTwo: Card_Deck[DealerCard2] });
        this.setState({ text: '' });
        this.setState({ text2: '' });
        this.setState({ text3: '' });
        DealerPoints = Card_Deck_Value[DealerCard1] + Card_Deck_Value[DealerCard2];
        this.setState({ dealerpoint: DealerPoints });

        if (Card_Deck_Value[CardOne] === 11) {
            CV1 = this.state.CardOneVal;
        }
        else if (Card_Deck_Value[CardOne] != 11) {
            CV1 = Card_Deck_Value[CardOne];
        }

        if (Card_Deck_Value[CardTwo] === 11) {
            CV2 = this.state.CardTwoVal;
        }
        else if (Card_Deck_Value[CardTwo] != 11) {
            CV2 = Card_Deck_Value[CardTwo];
        }

        if (Card_Deck_Value[CardThree] === 11) {
            CV3 = this.state.CardThreeVal;
        }
        else if (Card_Deck_Value[CardThree] != 11){
            if (CardThree == '') { 
                CV3 = 0;
            }
            else {
            CV3 = Card_Deck_Value[CardThree];
            }
        }
        console.log(CV1, CV2, CV3);
        temp = CV1 + CV2 + CV3;
        console.log(temp);
        this.setState({ CardCombinedPoints: temp });
        this.setState({ CardValue: 'Value: ' })
    }
    

    continuetwo(){
        this.setState({ continue1: false });
        this.setState({ continue2: false });
        this.setState({ continue3: true });
        this.setState({ text: '' });
        this.setState({ text2: '' });
        this.setState({ text3: '' });
        if (this.state.dealerpoint < 20) {
            if (this.state.CardCombinedPoints < 21 && this.state.CardCombinedPoints > this.state.dealerpoint) {
                this.setState({ text: 'you have won and will gain your bet' });
                cash = cash + this.state.bet;
                this.setState({ money: cash });
            }
            else if (this.state.CardCombinedPoints > 20) {
                this.setState({ text: 'You Loose, and will loose what you bet in' });
                cash = cash - this.state.bet;
                this.setState({ money: cash });
            }
            else if (this.state.CardCombinedPoints < this.state.dealerpoint) {
                this.setState({ text: 'You Loose, and will loose what you bet in' });
                cash = cash - this.state.bet;
                this.setState({ money: cash });
            }
        }
        else {
            this.setState({ text: 'The Dealer has lost due to bad draw of Cards.' });
            if (this.state.CardCombinedPoints > 20) {
                this.setState({ text2: 'You also lost' });
                this.setState({ text3: 'So this is a tie and wont loose anything' });
            }
            else {
                this.setState({ text2: 'You automatically win' });
                cash = cash + this.state.bet;
                this.setState({ money: cash });
            }
        }
    }

    continuethree() {
        this.setState({ continue1: false });
        this.setState({ continue2: false });
        this.setState({ continue3: false });
        this.setState({ gameNotStarted: true });
        this.setState({ playerCardOne: '' });
        this.setState({ playerCardTwo: '' });
        this.setState({ playerCardThree: '' });
        this.setState({ CardOneVal: '' });
        this.setState({ CardTwoVal: '' });
        this.setState({ CardThreeVal: '' });
        this.setState({ dealerCardOne: '' });
        this.setState({ dealerCardTwo: '' });
        this.setState({ CardValue: '' });
        this.setState({ dealerpoint: '' });
        this.setState({ CardCombinedPoints: '' });
        this.setState({ text: 'New Round' });
        this.setState({ text2: '' });
        this.setState({ text3: '' });
        used = [0];
        this.setState({ bet: 0 });
        if (this.state.money === 0) {
            this.setState({ gameNotStarted: false });
            this.setState({ gameEnded: false });
            this.setState({ text: 'GAME OVER' });
            this.setState({ text2: 'Thanks for Playing i hope you enjoyed!'});
        }
        this.setState({ Ace1: false });
        this.setState({ Ace2: false });
        this.setState({ Ace3: false });
    }

    // selection1() {
    //     this.setState((prevState) => {
    //         return {selected: !prevState.selected}
    //     });
    // }
    
    render() {
        return (
            <div className="input">
                <div id="inputChange">
                    <a>
                        {this.state.text}
                    </a>
                    <a>
                        {this.state.text2}
                    </a>
                    <a>
                        {this.state.text3}
                    </a>
                </div>
                <div id="dealerCards">
                    <a id="dealer">
                        Dealer Cards:
                    </a>
                    <div>
                        <div>
                            {this.state.dealerCardOne}
                        </div>
                        <div>
                            {this.state.dealerCardTwo}
                        </div>
                        <div>
                            <a>
                                {this.state.CardValue}
                            </a>
                            {this.state.dealerpoint}
                        </div>
                    </div>
                </div>
                <div id="playerCards">
                    <div id="blackJackTable">
                        <div id="tablediv">
                            <img id="table" src="./assets/table.png"></img>
                        </div>
                        <a id="YC">
                            {this.state.playerText}
                        </a>
                        <div id="cards">
                            <div>
                                {this.state.playerCardOne}
                                <a>
                                    {this.state.CardOneVal}
                                </a>
                            </div>
                            <div>
                                {this.state.playerCardTwo}
                                <a>
                                    {this.state.CardTwoVal}
                                </a>
                            </div>
                            <div>
                                {this.state.playerCardThree}
                                <a>
                                    {this.state.CardThreeVal}
                                </a>
                            </div>
                        </div>    
                        <div id="CCP">
                            <a>
                                {this.state.CardValue}
                            </a>
                            <a>
                                {this.state.CardCombinedPoints}
                            </a>
                        </div>
                    </div>
                </div>
                <div id="bottomRow">
                    { this.state.gameEnded ?
                    <div id="buttonCards">
                    {/* this is when the game starts */}
                        {this.state.gameNotStarted ?
                        <div id="startGame">
                            <button onClick={this.startGame}>
                                Click to Start
                            </button>
                        </div> : ''}
                        {this.state.bets ?
                        <div id="bets">
                            <button onClick={() => this.plusten()}>
                                + $10
                            </button>
                            <button onClick={() => this.plusfive()}>
                                + $5
                            </button>
                            <button onClick={() => this.plusone()}>
                                + $1
                            </button>
                            <button onClick={() => this.minusone()}>
                                - $1
                            </button>
                            <button onClick={() => this.minusfive()}>
                                - $5
                            </button>
                            <button onClick={() => this.minusten()}>
                                - $10
                            </button>
                            <button id="PB" onClick={this.bet}>
                                place your bet
                            </button>
                        </div> : '' }
                        {this.state.selected ?
                        <div  id="selecteds1">
                            <button onClick={() => this.hit()}>
                                Hit
                            </button>
                            <button onClick={() => this.stand()}>
                                Stand
                            </button>
                            <button onClick={() => this.doubleDown()}>
                                Double Down
                            </button>
                            <button onClick={() => this.surrender()}>
                                Surrender
                            </button>
                        </div> : ''}
                        
                        {this.state.continue1 ? 
                        <div id="switch">
                            {this.state.Ace1 ?
                            <button onClick={() => this.switchAceOne()}>
                                {Card_Deck[CardOne] + ' ' + this.state.CardOneVal}
                            </button> : '' }
                            {this.state.Ace2 ?
                            <button onClick={() => this.switchAceTwo()}>
                                {Card_Deck[CardTwo] + ' ' + this.state.CardTwoVal}
                            </button> : '' }
                            {this.state.Ace3 ?
                            <button onClick={() => this.switchAceThree()}>
                                {Card_Deck[CardThree] + ' ' + this.state.CardThreeVal}
                            </button> : '' }
                        </div> : ''}

                        {this.state.continue1 ?
                        <div className="cont">
                            <button id="continue1" onClick={() => this.continueone()}>
                                Continue
                            </button>
                        </div> : ''}

                        {this.state.continue2 ?
                        <div className="cont">
                            <button id="continue2" onClick={this.continuetwo}>
                                Continue
                            </button>
                        </div> : ''}

                        {this.state.continue3 ?
                        <div className="cont">
                            <button id="continue3" onClick={this.continuethree}>
                                Continue
                            </button>
                        </div> : ''}
                        
                    </div> : 'GAME OVER' }
                    <div id="money">
                        <a>
                            Bet: {this.state.bet}
                        </a>
                        <a>
                            Money: {this.state.money}
                        </a>
                    </div>
                </div>
                {this.state.selected ?
                <div id="optionHelp">
                    <a>
                        Hit - you can ask the Dealer for another card
                    </a>
                    <a>
                        Stand - you do nothing because your satisfied with your cards
                    </a>
                    <a>
                        Double Down - Allows you to double your initial bet in return for receiving one card
                    </a>
                    <a>
                        Surrender - Forfeit the hand immediately with an automatic loss of half the original bet
                    </a>
                </div> : ''}
            </div>
        );
    }
}
export default Input;