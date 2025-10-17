import styles from './CardsList.module.css';
import { CardsListProps } from './CardsList.types';
import Card from '../card/Card';

const CardsList = ({cards}: CardsListProps) => {
  return (
    <section className={ styles.cardsList }>
      {!!cards.length &&
        cards.map((card) => (
          <Card key={card.id} cat={card} />
        ))
      }
    </section>
  );
};

export default CardsList;
