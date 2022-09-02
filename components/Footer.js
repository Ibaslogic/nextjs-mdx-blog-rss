import { MdRssFeed } from 'react-icons/md';

const site_url = process.env.VERCEL_URL;

import styles from '../styles/Footer.module.css';
const Footer = () => {
  return (
    <footer>
      <div className={styles.inner}>
        <div className={styles.footer__content}>
          <p>&copy; {new Date().getFullYear().toString()} by Ibas</p>
          <a
            href={`${site_url}/rss.xml`}
            rel="noreferrer"
            target="_blank"
          >
            <MdRssFeed color="#ee802f" size="30px" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
