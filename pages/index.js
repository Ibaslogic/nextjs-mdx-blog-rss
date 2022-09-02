import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Nextjs blog.</h1>
      <p>
        A Next.js mdx starter project. We will add an RSS feed to this
        web app. Follow a step-by-step tutorial{' '}
        <a href="" target="_blank" rel="noopener noreferrer">
          here
        </a>
        .
      </p>
      <p>
        You can find Ibas on Twitter{' '}
        <a
          href={`https://twitter.com/ibaslogic`}
          target="_blank"
          rel="noopener noreferrer"
          title="twitter"
        >
          Ibas on Twitter
        </a>
        .
      </p>
    </div>
  );
};

export default Home;
