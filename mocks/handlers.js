import { rest } from 'msw'

export const handlers = [
    rest.get('http://localhost:3000/api/cards', (req, res, ctx) => {
        return res(
            ctx.json(cards)
        )
    }),
    rest.get('http://localhost:3000/api/cards/:id', (req, res, ctx) => {
        const card = cards.filter((card)=>card.id === req.params.id)[0]
        return res(
            ctx.json(card)
        )
    }),
]

const cards = [
    {
        "img": "https://deckofcardsapi.com/static/img/AS.png",
        "value": "ACE",
        "suit": "SPADES",
        "id": "AS"
    },{
        "img": "https://deckofcardsapi.com/static/img/2S.png",
        "value": "2",
        "suit": "SPADES",
        "id": "2S"
    },
    {
        "img": "https://deckofcardsapi.com/static/img/3S.png",
        "value": "3",
        "suit": "SPADES",
        "id": "3S"
    },
    {
        "img": "https://deckofcardsapi.com/static/img/4S.png",
        "value": "4",
        "suit": "SPADES",
        "id": "4S"
    }
    , {
        "img": "https://deckofcardsapi.com/static/img/5S.png",
        "value": "5",
        "suit": "SPADES",
        "id": "5S"
    }
    , {
        "img": "https://deckofcardsapi.com/static/img/6S.png",
        "value": "6",
        "suit": "SPADES",
        "id": "6S"
    }, {
        "img": "https://deckofcardsapi.com/static/img/7S.png",
        "value": "7",
        "suit": "SPADES",
        "id": "7S"
    }, {
        "img": "https://deckofcardsapi.com/static/img/8S.png",
        "value": "8",
        "suit": "SPADES",
        "id": "8S"
    }, {
        "img": "https://deckofcardsapi.com/static/img/9S.png",
        "value": "9",
        "suit": "SPADES",
        "id": "9S"
    }, {
        "img": "https://deckofcardsapi.com/static/img/0S.png",
        "value": "10",
        "suit": "SPADES",
        "id": "10S"
    }, {
        "img": "https://deckofcardsapi.com/static/img/JS.png",
        "value": "J",
        "suit": "SPADES",
        "id": "JS"
    }, {
        "img": "https://deckofcardsapi.com/static/img/QS.png",
        "value": "Q",
        "suit": "SPADES",
        "id": "QS"
    }, {
        "img": "https://deckofcardsapi.com/static/img/KS.png",
        "value": "K",
        "suit": "SPADES",
        "id": "KS"
    },
    {
        "img": "https://deckofcardsapi.com/static/img/AH.png",
        "value": "ACE",
        "suit": "HEARTS",
        "id": "AH"
    }, {
        "img": "https://deckofcardsapi.com/static/img/2H.png",
        "value": "2",
        "suit": "HEARTS",
        "id": "2H"
    },
    {
        "img": "https://deckofcardsapi.com/static/img/3H.png",
        "value": "3",
        "suit": "HEARTS",
        "id": "3H"
    },
    {
        "img": "https://deckofcardsapi.com/static/img/4H.png",
        "value": "4",
        "suit": "HEARTS",
        "id": "4H"
    }
    , {
        "img": "https://deckofcardsapi.com/static/img/5H.png",
        "value": "5",
        "suit": "HEARTS",
        "id": "5H"
    }
    , {
        "img": "https://deckofcardsapi.com/static/img/6H.png",
        "value": "6",
        "suit": "HEARTS",
        "id": "6H"
    }, {
        "img": "https://deckofcardsapi.com/static/img/7H.png",
        "value": "7",
        "suit": "HEARTS",
        "id": "7H"
    }, {
        "img": "https://deckofcardsapi.com/static/img/8H.png",
        "value": "8",
        "suit": "HEARTS",
        "id": "8H"
    }, {
        "img": "https://deckofcardsapi.com/static/img/9H.png",
        "value": "9",
        "suit": "HEARTS",
        "id": "9H"
    }, {
        "img": "https://deckofcardsapi.com/static/img/0H.png",
        "value": "10",
        "suit": "HEARTS",
        "id": "10H"
    }, {
        "img": "https://deckofcardsapi.com/static/img/JH.png",
        "value": "J",
        "suit": "HEARTS",
        "id": "JH"
    }, {
        "img": "https://deckofcardsapi.com/static/img/QH.png",
        "value": "Q",
        "suit": "HEARTS",
        "id": "QH"
    }, {
        "img": "https://deckofcardsapi.com/static/img/KH.png",
        "value": "K",
        "suit": "HEARTS",
        "id": "KH"
    },
    {
        "img": "https://deckofcardsapi.com/static/img/AC.png",
        "value": "ACE",
        "suit": "CLUBS",
        "id": "AC"
    }, {
        "img": "https://deckofcardsapi.com/static/img/2C.png",
        "value": "2",
        "suit": "CLUBS",
        "id": "2C"
    },
    {
        "img": "https://deckofcardsapi.com/static/img/3C.png",
        "value": "3",
        "suit": "CLUBS",
        "id": "3C"
    },
    {
        "img": "https://deckofcardsapi.com/static/img/4C.png",
        "value": "4",
        "suit": "CLUBS",
        "id": "4C"
    }
    , {
        "img": "https://deckofcardsapi.com/static/img/5C.png",
        "value": "5",
        "suit": "CLUBS",
        "id": "5C"
    }
    , {
        "img": "https://deckofcardsapi.com/static/img/6C.png",
        "value": "6",
        "suit": "CLUBS",
        "id": "6C"
    }, {
        "img": "https://deckofcardsapi.com/static/img/7C.png",
        "value": "7",
        "suit": "CLUBS",
        "id": "7C"
    }, {
        "img": "https://deckofcardsapi.com/static/img/8C.png",
        "value": "8",
        "suit": "CLUBS",
        "id": "8C"
    }, {
        "img": "https://deckofcardsapi.com/static/img/9C.png",
        "value": "9",
        "suit": "CLUBS",
        "id": "9C"
    }, {
        "img": "https://deckofcardsapi.com/static/img/0C.png",
        "value": "10",
        "suit": "CLUBS",
        "id": "10C"
    }, {
        "img": "https://deckofcardsapi.com/static/img/JC.png",
        "value": "J",
        "suit": "CLUBS",
        "id": "JC"
    }, {
        "img": "https://deckofcardsapi.com/static/img/QC.png",
        "value": "Q",
        "suit": "CLUBS",
        "id": "QC"
    }, {
        "img": "https://deckofcardsapi.com/static/img/KC.png",
        "value": "K",
        "suit": "CLUBS",
        "id": "KC"
    },
    {
        "img": "https://deckofcardsapi.com/static/img/AD.png",
        "value": "ACE",
        "suit": "DIAMONDS",
        "id": "AD"
    }, {
        "img": "https://deckofcardsapi.com/static/img/2D.png",
        "value": "2",
        "suit": "DIAMONDS",
        "id": "2D"
    },
    {
        "img": "https://deckofcardsapi.com/static/img/3D.png",
        "value": "3",
        "suit": "DIAMONDS",
        "id": "3D"
    },
    {
        "img": "https://deckofcardsapi.com/static/img/4D.png",
        "value": "4",
        "suit": "DIAMONDS",
        "id": "4D"
    }
    , {
        "img": "https://deckofcardsapi.com/static/img/5D.png",
        "value": "5",
        "suit": "DIAMONDS",
        "id": "5D"
    }
    , {
        "img": "https://deckofcardsapi.com/static/img/6D.png",
        "value": "6",
        "suit": "DIAMONDS",
        "id": "6D"
    }, {
        "img": "https://deckofcardsapi.com/static/img/7D.png",
        "value": "7",
        "suit": "DIAMONDS",
        "id": "7D"
    }, {
        "img": "https://deckofcardsapi.com/static/img/8D.png",
        "value": "8",
        "suit": "DIAMONDS",
        "id": "8D"
    }, {
        "img": "https://deckofcardsapi.com/static/img/9D.png",
        "value": "9",
        "suit": "DIAMONDS",
        "id": "9D"
    }, {
        "img": "https://deckofcardsapi.com/static/img/0D.png",
        "value": "10",
        "suit": "DIAMONDS",
        "id": "10D"
    }, {
        "img": "https://deckofcardsapi.com/static/img/JD.png",
        "value": "J",
        "suit": "DIAMONDS",
        "id": "JD"
    }, {
        "img": "https://deckofcardsapi.com/static/img/QD.png",
        "value": "Q",
        "suit": "DIAMONDS",
        "id": "QD"
    }, {
        "img": "https://deckofcardsapi.com/static/img/KD.png",
        "value": "K",
        "suit": "DIAMONDS",
        "id": "KD"
    }
]