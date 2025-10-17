import CardsList from "@/components/cards-list/CardsList";
import styles from "./page.module.css";
import { getPetsList } from "@/lib/getPetsList";

export default async function Home() {
  const cats  = await getPetsList() || [];
  return (
    <div>
      <main>
        <div className={styles.mainWrapper}>
          <section className={`${styles.promo} container`}>
            <p className={styles.promoTitle}>Поиск потеряшек и хозяев потеряшек</p>
            <p className={styles.promoText}>Найди своего пропавшего питомца или хозяина найденного</p>
          </section>
          <section className="search-widget">

          </section>
        </div>
        <div className="container">
          <div>
          <h2>Information</h2>
          <p> на сайт может зайти человек и искать своего пропавшего питомца
- на сайт может зайти человек, который нашел питомца и ищет, кто его потерял
- т.е. на сайте размещаются только животные, не их хозяева. Но двух ролей: потерянные и найденные</p>
        </div>
          <CardsList cards={cats}/>
        </div>
      </main>
    </div>
  );
}
