import Link from 'next/link';

const CardsPage = ({ cards }) => {
    return (
        <div style={{ marginTop: "100px" }}>
            {
            //     cards.map(card => (
            //     <Card card={card} />
            // ))
        }
        </div>
    );
}

export default CardsPage

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/cards')
    const cards = await res.json()

    console.log('cards', cards)

    // By returning { props: { cards } }, the Blog component
    // will receive `cards` as a prop at build time
    return {
        props: {
            cards,
        },
    }
}

const Card = ({ card }) => {
    return (
        <div key={card.id}>
            <Link href={`/cards/[id]`} as={`/cards/${card.id}`}>
                <a><h2>{card.value}</h2></a>
            </Link>
        </div>
    )
}