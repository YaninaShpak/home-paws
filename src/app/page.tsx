import CardsList from "@/components/cards-list/CardsList";
import styles from "./page.module.css";
import { getPetsList } from "@/lib/getPetsList";
import InformationBlock from "@/components/information-block/InformationBlock";
import PromoBlock from "@/components/promo-block/PromoBlock";
import SearchWidget from "@/components/search-widget/SearchWidget";

export default async function Home() {
  const cats  = await getPetsList() || [];
  return (
    <main className={styles.root}>
      <div className={styles.mainWrapper}>
        <PromoBlock />
        <SearchWidget/>
      </div>
      <div className="container">
        <InformationBlock />
        <CardsList cards={cats}/>
      </div>
    </main>
  );
}
