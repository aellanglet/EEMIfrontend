import Link from 'next/link';
import { Navigation } from "../components/index";

const CardsPage = ({ cards }) => {
    return (
        <React.Fragment>
        <Navigation/>
        <div>
            {
                cards.map(card => (
                <Card key={card.id} card={card} />
            ))
        }
        </div>
        </React.Fragment>
    );
}

export default CardsPage

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    return await fetch('http://localhost:3000/api/cards')
    .then(res=>res.json())
    .then(cards=>{
        if (!cards) {
            return {
                notFound: true,
            }
        }

        // By returning { props: { cards } }, the Blog component
        // will receive `cards` as a prop at build time
        return {
            props: {
                cards,
            },
        }
    })
    .catch(error => ({ message: error }))
}

const Card = ({ card }) => {
    return (
        <Link key={card.id} href={`/cards/[id]`} as={`/cards/${card.id}`}>
            <div>
                <h2>{card.value}</h2>
                <img src={card.img} />
            </div>
        </Link>
    )
}