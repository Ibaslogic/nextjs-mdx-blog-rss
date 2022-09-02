import Link from 'next/link';
import menuItems from '../menuItems';

import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.site__header}>
      <div className={styles.top__bar}>
        <p>
          The source code for this blog is{' '}
          <a
            href="https://github.com/Ibaslogic/nextjs-mdx-blog-starter"
            target="_blank"
            rel="noopener noreferrer"
            title="github"
          >
            available on GitHub
          </a>
        </p>
      </div>
      <div className={`${styles.nav__area} ${styles.inner}`}>
        <Link href="/">
          <a className={styles.logo}>Demo Site</a>
        </Link>
        <nav>
          <ul className={styles.menus}>
            {menuItems.map(({ url, label }, index) => (
              <li className={styles.menu__items} key={index}>
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
