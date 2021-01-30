import { Navigation } from "../../components";

const CardPage = ({ card }) => {
    console.log('card', card)
    return (
        <React.Fragment>
            <Navigation />
            <div style={{ marginTop: "100px" }}>
                <h1>{card.id}</h1>
                <img src={card.img} />
                <p>{card.value} of {card.suit}</p>
            </div>
        </React.Fragment>
    );
}

export default CardPage

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api/cards')
    const cards = await res.json()

    // Get the paths we want to pre-render based on cards
    const paths = cards.map((card) => ({
        params: { id: card.id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the card `id`.
    // If the route is like /cards/1, then params.id is 1
    const res = await fetch(`http://localhost:3000/api/cards/${params.id}`)
    const card = await res.json()

    // Pass card data to the page via props
    return { props: { card } }
}