import Image from "next/image";
import { grid } from "./page.css";
import { button } from  "styles/button.css"
import { container, 
  image, 
  content, 
  actions, 
  title as titleStyle, 
  description as descriptionStyle 
} from  "styles/card.css"

const Button = ({ children, ...props }) =>(
  <button className={button} {...props}>
    {children}
  </button>
);

const Card = ({ imageSrc, imageAlt, title, description }) => (
  <div className={container}>
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={1024}
      height={1024}
      className={image}
    />
    <div className={content}>
      <div className={titleStyle}>{title}</div>
      <div className={descriptionStyle}>{description}</div>
      <div className={actions}>
        <Button>Order This Mouse Now!</Button>
      </div>
    </div>
  </div>
)

export default function Page(): JSX.Element {
  return (
    <>
      <div className={grid}>
        <Card
          imageSrc="/horizon.jpeg"
          imageAlt="Horizon Forbidden West"
          title="Horizon Forbidden West"
          description="Horizon Forbidden West is a 2022 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. "
        />
        <Card
          imageSrc="/immortals.jpeg"
          imageAlt="Immortals of Aveum"
          title="Immortals of Aveum"
          description="Immortals of Aveum is a first-person shooter game developed by Ascendant Studios and published by Electronic Arts."
        />
      </div>
    </>
  );
}
