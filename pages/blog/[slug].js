import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import MDXComponents from '../../components/MdxComponents';
import { getPostDir, getFileBySlug } from '../../utils/mdx';
import { parseISO, format } from 'date-fns';

import styles from '../../styles/SinglePost.module.css';

const SinglePost = ({ mdxSource, frontMatter }) => {
  const { title, featured, date, readingTime } = frontMatter;

  return (
    <article className={styles.single__post}>
      <header>
        <h1>{title}</h1>
        <span className={styles.post__meta}>
          {format(parseISO(date), 'MMMM dd, yyyy')}
          <span> . </span> {readingTime.text}
        </span>
        {featured && (
          <Image
            width={800}
            height={470}
            src={featured}
            alt={title}
          />
        )}
      </header>
      <div>
        <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
      </div>
    </article>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  const posts = await getPostDir();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getFileBySlug(slug);
  return {
    props: {
      ...post,
    },
  };
}
