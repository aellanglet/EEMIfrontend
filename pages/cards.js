import Link from 'next/link';
import Image from 'next/image';
import styled from "styled-components";
import { Navigation } from "../components/index";

const CardsPage = ({ cards }) => {
    return (
        <React.Fragment>
        <Navigation/>
        <Cards>
            {
                cards.map(card => (
                <Card key={card.id} card={card} />
            ))
        }
        </Cards>
        </React.Fragment>
    );
}

export default CardsPage

export async function getServerSideProps() {
    // Call an external API endpoint to get posts
    const res = await fetch(`${process.env.URL}/api/cards`)
    const cards = await res.json()
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
}

const Card = ({ card }) => {
    return (
        <Link key={card.id} href={`cards/[id]`} as={`cards/${card.id}`}>
            <a>
        <>
            <div className="card">
                    <p>{card.value}</p>
                <Image
                    src={card.img}
                    alt={card.id}
                    width="200px"
                    height="250px"
                />
            </div>
        </>
        </a>
        </Link>
    )
}

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: start;
align-items: auto;
align-content: start;
`;
