document.addEventListener('DOMContentLoaded',()=>{

    const cardArray =[
        {name:'cunao',
        img:'img/cunao.jpg'},
        {name:'cunao',
        img:'img/cunao.jpg'},
        {name:'douglas',
        img:'img/douglas.jpg'},
        {name:'douglas',
        img:'img/douglas.jpg'},
        {name:'esteban',
        img:'img/esteban.jpg'},
        {name:'esteban',
        img:'img/esteban.jpg'},
        {name:'paulita2',
        img:'img/paulita2.jpg'},
        {name:'paulita2',
        img:'img/paulita2.jpg'},
        {name:'nena',
        img:'img/nena.jpg'},
        {name:'nena',
        img:'img/nena.jpg'},
        {name:'paulita',
        img:'img/paulita.jpg'},
        {name:'paulita',
        img:'img/paulita.jpg'},
        {name:'papi',
        img:'img/papi.jpg'},
        {name:'papi',
        img:'img/papi.jpg'},
        {name:'mami',
        img:'img/mami.jpg'},
        {name:'mami',
        img:'img/mami.jpg'},
        {name:'todos',
        img:'img/todos.jpg'},
        {name:'todos',
        img:'img/todos.jpg'}

    ]

    cardArray.sort(()=>0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay= document.querySelector('#result')
    var cardsChosen=[]
    var cardsChosenId=[]
    var cardsWon=[]
    

    function createBoard(){
        for(let i=0;i<cardArray.length;i++){
            const card= document.createElement('img');
            card.setAttribute('src', 'img/1.jpg')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }


function checkForMatch(){
    const cards=document.querySelectorAll('img')
    const optionOneId= cardsChosenId[0];
    const optionTwoId=cardsChosenId[1];
    if(cardsChosen[0]===cardsChosen[1]){
        alert('You found a match!!');
        cards[optionOneId].setAttribute('src','img/blank.png')
        cards[optionTwoId].setAttribute('src','img/blank.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'img/1.jpg')
        cards[optionTwoId].setAttribute('src', 'img/1.jpg')
        alert('Sorry Try Again')
    }

    cardsChosen=[]
    cardsChosenId=[]
    resultDisplay.textContent=cardsWon.length
    if(cardsWon.length=== cardArray.length/2){
        resultDisplay.textContent='Congratulations You found them all!'
    } 
}

function flipCard(){
    var cardId= this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length ===2){
        setTimeout(checkForMatch,500)
    }
}


createBoard()


    // *********************************************************
})

