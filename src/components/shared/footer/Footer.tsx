import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.root}>
      <p>Автор: <a href="https://github.com/YaninaShpak" target="_blank">Yanina Shpak</a> — frontend-разработчик, создающий проекты, которые приносят реальную пользу людям</p>
    </footer>
  );
};

export default Footer;
