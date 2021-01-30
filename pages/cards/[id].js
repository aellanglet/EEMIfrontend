import { Navigation } from "../../components";

const CardPage = ({ card }) => {
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
    return await fetch('http://localhost:3000/api/cards')
    .then(res=>res.json())
    .then(cards => cards.map((card) => ({ params: { id: card.id } })))
    .then(paths=>{
        return { paths, fallback: false }
    })
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    return await fetch(`http://localhost:3000/api/cards/${params.id}`)
    .then(res=>res.json())
    .then(card=>{
        if (!card) {
            return {
                notFound: true,
            }
        }

        // Pass card data to the page via props
        return { props: { card } }
    })
    .catch(error=>({message:error}))
}