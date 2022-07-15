import { useEffect, useState } from "react";
import "./Deck.css";
import Card from "../Card/Card";
import Button from 'react-bootstrap/Button';

export default function Deck() {

    const [deckId, setDeckId] = useState('');
    const[currentCard, setCurrentCard] = useState({});
    const[previousCard, setPreviousCard] = useState({});
    const[loading, setLoading] = useState(false);
    const[display, setDisplay] = useState('');
    const [ready, setReady] = useState(true);
    const [suitMatch, setSuitMatch] = useState(0);
    const [valueMatch, setValueMatch] = useState(0);
    const [cardCount, setCardCount] = useState(52);
    


    useEffect(() =>{
      async function getDeckId(){
        setLoading(true);
        const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        const deck = await res.json();
        console.log(deck);
        setDeckId(deck);
        setLoading(false);
      }
      getDeckId();
    }, []);  

    useEffect(() => {
      if (ready) {
        changeDisplay();
      }
      // eslint-disable-next-line 
    }, [previousCard, currentCard, ready, display]);

  

    function changeDisplay(){
      if (currentCard.suit === previousCard.suit){
        setDisplay("SNAP SUIT")
        setSuitMatch(suitMatch + 1);
      } 
      else if (currentCard.value === previousCard.value){
        setDisplay("SNAP VALUE");
        setValueMatch(valueMatch + 1);
      }
      else{
        setDisplay("NO MATCH");
      }
    }

    function getCard(){
      async function fetchCard(){
        setReady(false);
        const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId.deck_id}/draw/?count=1`);
        const data = await res.json();
        console.log(data);
        setPreviousCard(currentCard);
        setCurrentCard(data.cards[0]);
        setReady(true);
        setCardCount(data.remaining);
      //  console.log(data.remaining)
      }
      fetchCard();
    }

 
    if (loading) return <div>loading...</div>
    if (!deckId) return <div>Error ...</div>
    return(
        <div>
            <h1 className="text-title">{display}</h1>
            <div className="card-container">
            
    <div>
    <h1>Current Card</h1>
    <Card imageSrc={currentCard.image} imageAlt = {currentCard.suit} />
    </div>
    <div>
    <h1>Previous Card</h1>
    <Card imageSrc={previousCard.image} imageAlt = {previousCard.suit} />
    </div>
    </div>
    <div className="display-container">
      <Button variant="primary" className="draw-button" onClick={() =>{
      getCard()
    }}>Draw Card</Button>
    <h2>VALUE MATCHES: {valueMatch}</h2>
    <h2>SUIT MATCHES: {suitMatch}</h2>
    <h2> {cardCount} cards remaining</h2>
    </div>
    </div>
        
    )
}