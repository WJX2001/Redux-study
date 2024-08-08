import { Button } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddPostForm from './components/AddPostForm';
import PostContent from './components/PostContent';
import { postAdded, selectAllPosts } from './postsSlice';
const PostsList = () => {
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  const dispatch = useDispatch();

  // 使用useSelector 从Redux store中读取数据
  // const posts = useSelector((state: any) => {
  //   return state.posts.postsArr;
  // });

  const posts = useSelector(selectAllPosts);

  return (
    <>
      <Button
        type="primary"
        style={{ marginBottom: '10px' }}
        onClick={() => setOpenAddModal(true)}
      >
        新增文章
      </Button>
      <PostContent postContemt={posts} />
      <AddPostForm
        title="新建文章"
        type="add"
        open={openAddModal}
        changeOpenHandle={() => setOpenAddModal(false)}
        onFinish={(values: { title: string; content: string }) => {
          dispatch(postAdded(values.title, values.content));
          setOpenAddModal(false);
        }}
      />
    </>
  );
};

export default PostsList;
