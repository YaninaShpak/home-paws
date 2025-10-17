import styles from "./Card.module.css";
import { CardProps } from "./Card.types";
import Image from "next/image";

const Card = ({ cat }: CardProps) => {
  const { photo, name, type, age, color } = cat;
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={`/images/${photo}`}
          alt="woman and cat"
          width="1536"
          height="1024"
          priority
        />
      </div>
      <div className={styles.card__info}>
        <h3>{type} {name}</h3>
        <p>
          Возраст: {age}
        </p>
        <p>Окрас: { color }</p>
      </div>
    </div>
  );
};

export default Card;
