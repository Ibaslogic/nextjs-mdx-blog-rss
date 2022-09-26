/* ==================== 
 feed npm  
======================= */
import fs from 'fs';
import { Feed } from 'feed';
import { getSortedPost } from './mdx';

export default async function generateRssFeed() {
  const allPosts = await getSortedPost();
  const site_url = process.env.VERCEL_URL; // use 'localhost:3000' in dev mode or create .env.local file in project root and add this: VERCEL_URL=http://localhost:3000

  const feedOptions = {
    title: 'Blog posts | RSS Feed',
    description: 'Welcome to this blog posts!',
    id: site_url,
    link: site_url,
    image: `${site_url}/logo.png`,
    favicon: `${site_url}/favicon.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      // other feed formats
      json: `${site_url}/rss.json`,
      atom: `${site_url}/atom.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  allPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${site_url}/blog/${post.slug}`,
      link: `${site_url}/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
    });
  });

  fs.writeFileSync('./public/rss.xml', feed.rss2());

  // write other feed formats to public folder
  fs.writeFileSync('./public/rss.json', feed.json1());
  fs.writeFileSync('./public/atom.xml', feed.atom1());
}

/* ==================== 
 rss npm feed  
======================= */

// import fs from 'fs';
// import RSS from 'rss';
// import { getSortedPost } from './mdx';

// export default async function generateRssFeed() {
//   const site_url = 'localhost:3000';

//   const allPosts = await getSortedPost();

//   const feedOptions = {
//     title: 'Blog posts | RSS Feed',
//     description: 'Welcome to this blog posts!',
//     site_url: site_url,
//     feed_url: `${site_url}/rss.xml`,
//     image_url: `${site_url}/logo.png`,
//     pubDate: new Date(),
//     copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
//   };

//   const feed = new RSS(feedOptions);

//   allPosts.map((post) => {
//     feed.item({
//       title: post.title,
//       description: post.description,
//       url: `${site_url}/blog/${post.slug}`,
//       date: post.date,
//     });
//   });

//   fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
// }
