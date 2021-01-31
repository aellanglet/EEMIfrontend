import '../styles/styles.css'

if (process.env.NODE_ENV !== "production") {
    require("../mocks");
}

function EEMIfrontendApp({ Component, pageProps }) {
    if (pageProps.error) {
        return <Error statusCode={pageProps.error.statusCode} title={pageProps.error.message} />;
    }
    return <Component {...pageProps} />;
}

export default EEMIfrontendApp;
