import { PostMessageFormat } from '@/types/interface';
import { history } from '@umijs/max';
import { Button, Divider } from 'antd';
import React from 'react';
import PostAuthor from '../PostAuthor';

interface Props {
  postContemt: any;
}

const PostContent: React.FC<Props> = (props) => {
  const { postContemt } = props;

  // 跳转
  const routeChange = (postId: string) => {
    history.push({
      pathname: '/reduxStudy/singlePage',
      search: `?pageIndex=${postId}`,
    });
  };

  return (
    <div>
      {postContemt.map((post: PostMessageFormat) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <div>
            <PostAuthor userId={post.user} />
          </div>
          <p>{post.content.substring(0, 100)}...</p>
          <Button onClick={() => routeChange(post.id)}>跳转</Button>
          <Divider />
        </article>
      ))}
    </div>
  );
};

export default PostContent;
