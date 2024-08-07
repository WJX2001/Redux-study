import { PostMessageFormat } from '@/types/interface'
import React from 'react'
import { useSelector } from 'react-redux'
import AddPostForm from './components/AddPostForm'

const PostsList = () => {

  // 使用useSelector 从Redux store中读取数据
  const posts = useSelector((state: any) => {
    return state.posts.postsArr
  })

  // 将节点渲染出来
  const renderedPosts = posts.map((posts:PostMessageFormat) => (
    <article key={posts.id}>
      <h3>{posts.title}</h3>
      <p>{posts.content.substring(0, 100)}...</p>
    </article>
  ))


  return (
    <div>
      <section className='posts-list'>
        <h2>Posts</h2>
        {renderedPosts}
        <AddPostForm />
      </section>
    </div>
  )
}

export default PostsList