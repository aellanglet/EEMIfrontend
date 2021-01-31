import Image from 'next/image';
import { Navigation } from "../../components";

const CardPage = ({ card }) => {
    return (
        <React.Fragment>
            <Navigation />
            <div style={{ marginTop: "100px" }}>
                <h1>{card.id}</h1>
                <Image
                    src={card.img}
                    alt={card.id}
                    width="200px"
                    height="250px"
                />
                <p>{card.value} of {card.suit}</p>
            </div>
        </React.Fragment>
    );
}

export default CardPage

export async function getServerSideProps({params}) {
    const res = await fetch(`http://localhost:3000/api/cards/${params.id}`)
    const card = res.json()
    if (!card) {
        return {
            notFound: true,
        }
    }
    
    // Pass card data to the page via props
    return { props: { card } }
}