import Image from 'next/image';
import { Navigation } from "../../components";
import { motion } from "framer-motion"

const CardPage = ({ card }) => {
    return (
        <React.Fragment>
            <Navigation />
            <motion.div animate={{ scale: 1.5 }}
                transition={{ duration: 0.5 }}>
            <div className="single-card">
                <h1>{card.id}</h1>
                
                <Image
                    src={card.img}
                    alt={card.id}
                    width="100px"
                    height="125px"
                />
                
                <p>{card.value} of {card.suit}</p>
            </div>
            </motion.div>
        </React.Fragment>
    );
}

export default CardPage

export async function getServerSideProps({params}) {
    const res = await fetch(`${process.env.URL}/api/cards/${params.id}`)
    const card = await res.json()
    if (!card) {
        return {
            notFound: true,
        }
    }
    
    // Pass card data to the page via props
    return { props: { card } }
}