import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Memotest.css';
import FancyButton from '../small/FancyButton'

const Square = ({ value, position, onClick = () => {} }) => {

    return (
        
        <div 
        onClick={onClick} className={cx('square','card', position, {'card-face-up' : value === 'face-up'},
        {'card-clear': value === 'card-cleared'} )}>
        <div className="inner-card">
            <div className="front-card"/>
            <div className="back-card"/>
        </div> 
        </div>
    );
};

Square.propTypes = {
    position: PropTypes.string,
    value: PropTypes.oneOf(['face-down', 'face-up', 'card-cleared']),
    onClick: PropTypes.func,
}


const rearrangeCards = (deck) => {
    for (let i = deck.length -1; i > 0; i -= 1) {
        const randomIndex = Math.floor((Math.random() * (i + 1)));
        const arrangeBoard = deck[randomIndex];
        deck[randomIndex] = deck[i]
        deck[i] = arrangeBoard;
    }
}

const createDeckOfCards = () => {
    const initialDeckofCards = [
        'red', 
        'red',
        'blue', 
        'blue',
        'cyan',
        'cyan', 
        'violet',
        'violet',
        'green',
        'green', 
        'rose',
        'rose',
        'black',
        'black',
        'fuchsia',
        'fuchsia'
    ];
    rearrangeCards(initialDeckofCards);
    const newBoard = initialDeckofCards.map((index) => ({
        position: index,
        value: 'face-down',
    }));  
    return newBoard;
}


const useMemotestState = (initialDeckofCards) => {
    const [deckOfCards, setDeckOfCards] = React.useState(initialDeckofCards)
    const [cardDisabled, setCardDisabled] = React.useState(false)
    const gameEnded = deckOfCards.every(card => card.value === 'card-cleared');

    const hideFaceUpCards = () => {
        const newDeckOfCards = deckOfCards.map((card) => (
            {...card, value : card.value === 'face-up' ? 'face-down' : card.value}));
        setDeckOfCards(newDeckOfCards) 
    }

    const lockUserInput = () => {
        setCardDisabled(true);
    }

    const unlockUserInput = () => {
        setCardDisabled(false)
    }

    const solveFaceUpCards = () => {
        const newDeckOfCards = deckOfCards.map((card) => (
            {...card, value : card.value === 'face-up' ? 'card-cleared' : card.value}));
        setDeckOfCards(newDeckOfCards);
}

    const restartGame = () => {
        setDeckOfCards(createDeckOfCards());
    };

    const clickHandler = (index) => {
        const cards = [...deckOfCards];
        if (cards[index].value === 'face-down') {
            cards[index].value = 'face-up'   
            setDeckOfCards(cards);
        }

        const faceUpCards = deckOfCards.filter((card) => card.value === 'face-up');

        if (faceUpCards.length === 2) {
            lockUserInput();   

            if(faceUpCards[0].position === faceUpCards[1].position) {
                setTimeout(() => {
                    solveFaceUpCards();
                    unlockUserInput();
                }, 1000)
            } else {
                setTimeout(() => {
                    hideFaceUpCards();
                    unlockUserInput();
                }, 1000)
            }
        }
    return null;
    };
    return {deckOfCards, gameEnded, clickHandler, restartGame, cardDisabled};
};

const Memotest = () => {
    
    const {deckOfCards, gameEnded, clickHandler, restartGame, cardDisabled}
    = useMemotestState(createDeckOfCards());
    console.log(deckOfCards[1].position)
    return (
        <React.Fragment>
           <div className={cx('memotest',{'show-board': gameEnded})}>
                <div className="tictactoe-row">
                    <Square value = {deckOfCards[0].value} position = {deckOfCards[0].position} onClick={cardDisabled ? () => {}: () => clickHandler(0)}></Square>
                    <Square value = {deckOfCards[1].value} position = {deckOfCards[1].position} onClick={cardDisabled ? () => {}: () => clickHandler(1)}></Square>
                    <Square value = {deckOfCards[2].value} position = {deckOfCards[2].position} onClick={cardDisabled ? () => {}: () => clickHandler(2)}></Square>
                    <Square value = {deckOfCards[3].value} position = {deckOfCards[3].position} onClick={cardDisabled ? () => {}: () => clickHandler(3)}></Square>
                </div>
                <div className="tictactoe-row">
                    <Square value = {deckOfCards[4].value} position = {deckOfCards[4].position} onClick={cardDisabled ? () => {}: () => clickHandler(4)}></Square>
                    <Square value = {deckOfCards[5].value} position = {deckOfCards[5].position} onClick={cardDisabled ? () => {}: () => clickHandler(5)}></Square>
                    <Square value = {deckOfCards[6].value} position = {deckOfCards[6].position} onClick={cardDisabled ? () => {}: () => clickHandler(6)}></Square>
                    <Square value = {deckOfCards[7].value} position = {deckOfCards[7].position} onClick={cardDisabled ? () => {}: () => clickHandler(7)}></Square>    
                </div>
                <div className="tictactoe-row">
                    <Square value = {deckOfCards[8].value} position = {deckOfCards[8].position} onClick={cardDisabled ? () => {}: () => clickHandler(8)}></Square>
                    <Square value = {deckOfCards[9].value} position = {deckOfCards[9].position} onClick={cardDisabled ? () => {}: () => clickHandler(9)}></Square>
                    <Square value = {deckOfCards[10].value} position = {deckOfCards[10].position} onClick={cardDisabled ? () => {}: () => clickHandler(10)}></Square>
                    <Square value = {deckOfCards[11].value} position = {deckOfCards[11].position} onClick={cardDisabled ? () => {}: () => clickHandler(11)}></Square> 
                </div>
                <div className="tictactoe-row">
                    <Square value = {deckOfCards[12].value} position = {deckOfCards[12].position} onClick={cardDisabled ? () => {}: () => clickHandler(12)}></Square>
                    <Square value = {deckOfCards[13].value} position = {deckOfCards[13].position} onClick={cardDisabled ? () => {}: () => clickHandler(13)}></Square>
                    <Square value = {deckOfCards[14].value} position = {deckOfCards[14].position} onClick={cardDisabled ? () => {}: () => clickHandler(14)}></Square>
                    <Square value = {deckOfCards[15].value} position = {deckOfCards[15].position} onClick={cardDisabled ? () => {}: () => clickHandler(15)}></Square> 
                </div>
            </div> 

        <div className={cx({'show-board': !gameEnded})}>
            <strong>Congratulations, Game Completed!!!</strong>
        </div>
        <FancyButton onClick={restartGame}>Restart Game</FancyButton>

        </React.Fragment>
    );
};

export default Memotest;
