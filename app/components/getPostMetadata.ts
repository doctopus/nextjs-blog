import fs from "fs";
import matter from "gray-matter";
// import {PostMetadata} from "@/app/components/PostPreview";
export interface PostMetadata {
    title: string;
    date: string;
    subtitle: string;
    slug: string;
    fileName: string;
}

const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    console.log(markdownPosts);
    // Get gray-matter data from each file.
    return markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        const slug = fileName.replace(".md", "");
        // const slug = fileName.replace(".md", "");
        const originalFileName = fileName;
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: slug,
            fileName: originalFileName, // Save the original file name
        };
    });
};
export default getPostMetadata;