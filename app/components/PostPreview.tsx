import Link from "next/link";
import {PostMetadata} from "@/app/components/getPostMetadata";
// export interface PostMetadata {
//     title: string;
//     date: string;
//     subtitle: string;
//     slug: string;
//     fileName: string;
//     x: string;
// }

// export const PI = 3.14;

// const printMesssage = (): void => {
//     console.log('hi');
// }
//
// const adddJs = (num, num2) => {
//     return num + num2;
// }
//
// interface Values {
//     num: number;
//     num2: number;
// }
// const add = (values: { num: number, num2: number }): string => {
//     return `Answer is ${values.num + values.num2}`;
// }

const PostPreview = (props:PostMetadata) => {
    return (
        <div className="border border-slate-300 p-4 rounded-md shadow-sm bg-white">
        <Link href={`/posts/${props.slug}`}>
            <h2 className="font-bold text-violet-600 hover:underline mb-4">{props.title}</h2>
            <p className="text-sm text-slate-400">{props.date}</p>
            <p className="text-slate-700">{props.subtitle}</p>
            <p className="text-slate-700">{props.fileName}</p>
        </Link>
    </div>
    );
};
export default PostPreview;