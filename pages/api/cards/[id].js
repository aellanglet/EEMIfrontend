import cards from '../../../public/files/cards.json';

export default (req, res) => {
    res.statusCode = 200
    res.json(cards.filter((card) => card.id === req.query.id)[0])
}  