import { container as headerContainer } from "styles/header.css";
import { button } from "styles/button.css";
import {
  container,
  image,
  content,
  actions,
  title as titleStyle,
  description as descriptionStyle,
} from "styles/card.css";
import { grid } from "./App.css";

import solidLogo from "./assets/solid.svg";

function Button({ children, ...props }) {
  return (
    <button class={button} {...props}>
      {children}
    </button>
  );
}

const Card = ({ imageSrc, imageAlt, title, description }) => (
  <div class={container}>
    <img src={imageSrc} alt={imageAlt} class={image} />
    <div class={content}>
      <div class={titleStyle}>{title}</div>
      <div class={descriptionStyle}>{description}</div>
      <div class={actions}>
        <Button>Order This Mouse Now!</Button>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <>
      <div class={headerContainer}>
        <img
          src={solidLogo}
          alt="Solid logo"
          style="width: 25px; height: 25px;"
        />
        <div>SolidJS on Vite</div>
      </div>
      <div class={grid}>
        <Card
          imageSrc="./mirage.jpeg"
          imageAlt="Assassins Creed Mirage"
          title="Assassins Creed Mirage"
          description="Assassin's Creed Mirage is an upcoming action-adventure game developed by Ubisoft Bordeaux and published by Ubisoft. It will be the thirteenth major installment in the Assassin's Creed series and the successor to 2020's Assassin's Creed Valhalla."
        />
        <Card
          imageSrc="./calisto.jpeg"
          imageAlt="Calisto Protocol"
          title="Calisto Protocol"
          description="The Callisto Protocol is a 2022 survival horror video game developed by Striking Distance Studios and published by Krafton. I"
        />
      </div>
    </>
  );
}

export default App;