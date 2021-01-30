if (process.env.NODE_ENV !== "production") {
    require("../mocks");
}

function EEMIfrontendApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default EEMIfrontendApp;
