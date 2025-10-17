import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href='/'>LOGO</Link>
      <nav className={styles.userNavigation}>
        <Link href='/add-ad'>Добавить объявление</Link>
        <Link href='/login'>Вход</Link>
        <Link href='/signup'>Регистрация</Link>
      </nav>
    </header>
  );
};

export default Header;
