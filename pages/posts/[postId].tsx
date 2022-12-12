import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

export interface IPostDetailPageProps {
    post: any
}

const PostDetailPage = (props: IPostDetailPageProps) => {

    const { post } = props

    const router = useRouter()

    if (!post) return null

    return (
        <div>
            <h1>Post Detail Page</h1>

            <p>{post.title}</p>
            <p>{post.author}</p>
            <p>{post.description}</p>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1') 
    const data = await response.json()

    return {
        paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
        fallback: false
    }
};

export const getStaticProps: GetStaticProps<IPostDetailPageProps> = async (context: GetStaticPropsContext) => {
    const { params } = context

    if (!params?.postId) return { notFound: true }

    const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${params?.postId}`) 
    const data = await response.json()

    return {
        props: {
            post: data
        }
    }
};

export default PostDetailPage