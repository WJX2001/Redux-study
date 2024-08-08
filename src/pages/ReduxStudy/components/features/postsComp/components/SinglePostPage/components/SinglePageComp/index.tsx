import { history, useSearchParams } from '@umijs/max';
import { Button } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postUpdated, selectPostById } from '../../../../postsSlice';
import AddPostForm from '../../../AddPostForm';

const SinglePageComp = () => {
  const [searchParamData] = useSearchParams();
  const postId = searchParamData.get('pageIndex');

  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  // const post = useSelector((state: any) => {
  //   return state.posts.postsArr.find((post) => post.id === postId);
  // });


  const post = useSelector((state) => selectPostById(state, postId));

  const dispatch = useDispatch();

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <section>
        <article className="post">
          <h2>{post.title}</h2>
          <p className="post-content">{post.content}</p>
        </article>
      </section>
      <Button type="primary" onClick={() => setEditModalOpen(true)}>
        编辑文章内容
      </Button>

      <AddPostForm
        open={editModalOpen}
        title={"编辑文章内容"}
        type='edit'
        changeOpenHandle={() => {
          setEditModalOpen(false);
        }}
        onFinish={(value: {
          title: string;
          content: string;
        }) => {
          if(value.title && value.content) {
            dispatch(postUpdated({
              id: postId,
              title: value.title,
              content: value.content
            }))
          }
          setEditModalOpen(false);
          // history.go(-1);
        }}
      />
    </div>
  );
};

export default SinglePageComp;
