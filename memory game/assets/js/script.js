
//cards
let cards = [
  "card1",
  "card2",
  "card3",
  "card4",
  "card1",
  "card2",
  "card3",
  "card4"
];

cards.sort(()=>0.5-Math.random());//shuffle

const board=document.querySelector('.board');
let firstCard=null;
let secondCard=null;
let lockFlip=false;
let matched=0;

// Create board
cards.forEach((value)=>{
    const card=document.createElement('img');
    card.setAttribute('src','assets/picture/close.jpg');
    card.dataset.value=value;
    board.appendChild(card);

    card.addEventListener('click',cardFlip);

});
//flip the card
function cardFlip(){
       if(lockFlip===true) return;
       if(this===firstCard) return;
       
       const cardData1=this.dataset.value;
         if (firstCard===null){
          firstCard=this;
          this.src=`assets/picture/${cardData1}.jpg`;
          return;
         }else{
          lockFlip=true;
          secondCard=this;
          const cardData2=this.dataset.value;
          this.src=`assets/picture/${cardData2}.jpg`;
          
          setTimeout(checkMatch,1000);
         }
    }
//check the match
function checkMatch(){
  if (firstCard.dataset.value===secondCard.dataset.value){
      firstCard.src='assets/picture/blank.jpg';
      secondCard.src='assets/picture/blank.jpg';
      firstCard.removeEventListener('click',cardFlip);
      secondCard.removeEventListener('click',cardFlip);
      
      if(matched===cards.length){
        const textDisplay=document.querySelector('h2');
        textDisplay.textContent = 'You win!';
      }

  }else{
      firstCard.src='assets/picture/close.jpg';
      secondCard.src='assets/picture/close.jpg';

  }
  resetTurn();
}
//reset the turn
function resetTurn(){
  firstCard=null;
  secondCard=null;
  lockFlip=false;

}