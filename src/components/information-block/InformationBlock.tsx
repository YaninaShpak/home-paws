import styles from './InformationBlock.module.css';

const InformationBlock = () => {
  return (
    <section className={styles.root}>
      <h2>Information</h2>
      <p> на сайт может зайти человек и искать своего пропавшего питомца
- на сайт может зайти человек, который нашел питомца и ищет, кто его потерял
- т.е. на сайте размещаются только животные, не их хозяева. Но двух ролей: потерянные и найденные</p>
    </section>
  );
};

export default InformationBlock;
