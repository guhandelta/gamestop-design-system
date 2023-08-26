import { component$, useSignal } from '@builder.io/qwik';
 
import { container as headerContainer} from "styles/header.css";
import { button } from "styles/button.css";
import qwikLogo from './assets/qwik.svg';
import { grid } from './app.css';
import {
  container,
  image,
  content,
  actions,
  title as titleStyle,
  description as descriptionStyle,
} from 'styles/card.css'


// component$ is used to define a component in Qwik
const Button = component$(({ children, ...props }) => (
  <button class={button} {...props}>
    <Slot />
  </button>
));

const Card = component$(({ imageSrc, imageAlt, title, description }) => (
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
));

export const App = component$(() => { 

  return (
    <>
      <div className={headerContainer}>
        <img 
          src={qwikLogo} 
          alt="Qwik Logo"
          style="width: 25px; height:25px;"
        />
        <div className="">This Card was made using Qwik</div>
      </div>
      <div class={grid}>
        <Card
          imageSrc="./returnal.jpeg"
          imageAlt="Returnal"
          title="Returnal"
          description="Returnal is a 2021 roguelike video game developed by Housemarque and published by Sony Interactive Entertainment.."
        />
        <Card
          imageSrc="./nfs.jpeg"
          imageAlt="Need for Speed Unbound"
          title="Need for Speed Unbound"
          description="Need for Speed Unbound is a 2022 racing video game, the twenty-fifth instalment in the Need for Speed series."
        />
      </div>
    </>
  )
})
