import { MdRssFeed } from 'react-icons/md';

import styles from '../styles/Footer.module.css';
const Footer = () => {
  return (
    <footer>
      <div className={styles.inner}>
        <div className={styles.footer__content}>
          <p>&copy; {new Date().getFullYear().toString()} by Ibas</p>
          <a
            // production url after deploy to vercel
            href="https://nextjs-mdx-blog-rss.vercel.app/rss.xml" // or use 'http://localhost:3000/rss.xml' in development
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
