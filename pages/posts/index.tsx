import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';

export interface PostListProps {
    posts: any[]
}

export default function PostList({ posts }: PostListProps) {

    return (
        <div>
            <h1>Post List Page</h1>
            <ul>
                {posts.map(
                    post => <li key={post.id} >{post.title}</li>
                )}
            </ul>
        </div>
    );
}


export const getStaticProps: GetStaticProps<PostListProps> = async (
    context: GetStaticPropsContext
) => {
    //server side
    //build-time
    console.log('static props');
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    const data = await response.json();
    console.log(data);


    return {
        props: {
            posts: data.data.map((x: any) => ({ id: x.id, title: x.title }))
        }
    }
}
