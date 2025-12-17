import React from 'react'

export default function PostsPage() {
    const posts = [
        { id: 1, title: 'hi' },
        { id: 2, title: 'bye' }
    ]
    return (
        <div>
            {posts.map((post) => {
                return <div key={post.id}>
                    {post.title}
                </div>
            })}
        </div>
    )
}
