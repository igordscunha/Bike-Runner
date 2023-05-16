import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__texto}>Todos os direitos reservados.</p><i className="fi fi-ts-biking"></i>
    </footer>
  );
}