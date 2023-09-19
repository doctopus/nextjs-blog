// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
// import fs from "fs";
import Link from "next/link";
// import matter from "gray-matter";
// import {PostMetadata} from "@/app/components/PostMetadata";
import getPostMetadata from "@/app/components/getPostMetadata";
import PostPreview from "@/app/components/PostPreview";

// const inter = Inter({ subsets: ['latin'] })


const Home = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
      <PostPreview key={post.slug} {...post} />
  ));
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>;
};

export default Home;