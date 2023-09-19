import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/app/components/getPostMetadata";

const getPostContent = (fileName: string) => {
    const folder = "posts/";
    const file = `${folder}${fileName}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};
 // const sample = matter(fs.readFileSync("posts/aws quickstart.md", "utf8"));
 // console.log(sample);
try {
    const sample = fs.readFileSync('./posts/wolfhunter.md', 'utf8');
    console.log(matter(sample));
} catch (error) {
    console.error('Error reading the file:', error);
}


export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post)=> ({
        postName: post.fileName,
    }));
};
const PostPage = (props: { params: { postName: string } }) => {
    const postName = decodeURI(props.params.postName);
    // console.log(slug);
    const post = getPostContent(postName);
    return (
        <div>
            <div className="my-12 text-center">
            <h1 className="text-2xl text-violet-700 font-bold">{post.data.title}</h1>
                <p className="text-slate-400 mt-2">{post.data.date}</p>
            </div>
            <article className="prose">
            <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;