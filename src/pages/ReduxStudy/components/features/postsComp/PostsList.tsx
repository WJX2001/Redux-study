import { PostMessageFormat } from '@/types/interface';
import { history } from '@umijs/max';
import { Button, Divider } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddPostForm from './components/AddPostForm';
import styles from './PostsList.less';
import { postAdded } from './postsSlice';
import { nanoid } from '@reduxjs/toolkit';
const PostsList = () => {
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  const dispatch = useDispatch();

  // 使用useSelector 从Redux store中读取数据
  const posts = useSelector((state: any) => {
    return state.posts.postsArr;
  });

  // 跳转
  const routeChange = (postId: string) => {
    history.push({
      pathname: '/reduxStudy/singlePage',
      search: `?pageIndex=${postId}`,
    });
  };

  // 将节点渲染出来
  const renderedPosts = posts.map((posts: PostMessageFormat) => (
    <article key={posts.id}>
      <h3>{posts.title}</h3>
      <p>{posts.content.substring(0, 100)}...</p>
      <div className={styles['post-content']}>
        <Button onClick={() => routeChange(posts.id)}>跳转</Button>
      </div>
      
      <Divider />
    </article>
  ));

  return (
    <div>
      <div>
        <Button
          type="primary"
          style={{ marginBottom: '10px' }}
          onClick={() => setOpenAddModal(true)}
        >
          新增文章
        </Button>
      </div>
      <section className="posts-list">
        <div className={styles['posts-list-header']}>
          <h2>Posts</h2>
        </div>
        {renderedPosts}
      </section>
      <AddPostForm
        open={openAddModal}
        changeOpenHandle={() => setOpenAddModal(false)}
        onFinish={(values: { title: string; content: string }) => {
          if (values.title && values.content) {
            dispatch(
              postAdded({
                id: nanoid(),
                title: values.title,
                content: values.content,
              }),
            );
          }
          setOpenAddModal(false);
        }}
      />
    </div>
  );
};

export default PostsList;
