import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import { Navigation } from "../components/index";

const components = { Navigation };

export default function ContactPage({ content }) {
  const hydratedContent = hydrate(content, { components });
  return (
    <React.Fragment>
      <Navigation />
      <div className="contactPage">
        {hydratedContent}
      </div>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const mdxContent = await renderToString(contact, { components });
  return { props: { content: mdxContent } };
}

const contact = `
# Contactez-nous

`;
