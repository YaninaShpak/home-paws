import styles from './PromoBlock.module.css';

const PromoBlock = () => {
  return (
    <section className={`${styles.promo} container`}>
      <p className={styles.title}>Поиск потеряшек и хозяев потеряшек</p>
      <p className={styles.text}>Найди своего пропавшего питомца или хозяина найденного</p>
    </section>
  );
};

export default PromoBlock;
