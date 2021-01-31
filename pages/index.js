import Link from "next/link";
import { Navigation } from "../components/index";

export default function AccueilPage() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="accueilPage">
        <h1>EEMIfrontend project</h1>

        <p>This project shows a standard 52-card deck.<br /> <br />

        You can find the landing page on '/'. <br />
        The '/cards' path display the card list. <br />
        By clicking on one of them, you can access '/cards/:id' which let you see all the current card details. <br />
        </p>

        <h2>How to run the app</h2>
        <code>
          # Initialize project <br />
          yarn install<br /><br />

          # run project in dev environment<br />
          yarn dev
        </code>

        <p>For production deployment, 2 bash views needed :</p>

        <code>
          # on first<br />
          yarn dev <br/>

          # on second <br />
          yarn build <br />

          # When it is done, you can exit them all and run <br />
          yarn start<br />
        </code>

        <h2>How to run tests</h2>
        <code>
          yarn test
        </code>

        <h2>How to use backstopjs</h2>
        <p>
        Backstopjs is installed in dev environment. <br /> <br />

        If you don't have backstopjs CLI locally, don't worry, use : yarn backstop instead. <br /><br />

        Backstop is already initialized. All you need to run is: <br /> <br />

        <code>
          backstop test --config="backstop.config.js" <br /><br />

          # or if you don't have the CLI locally run <br /> <br/>

          yarn backstop test --config="backstop.config.js"
        </code>

        </p>
      </div>
    </React.Fragment>
  );
}

