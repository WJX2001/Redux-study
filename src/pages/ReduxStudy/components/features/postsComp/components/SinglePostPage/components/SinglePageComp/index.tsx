import { useSearchParams } from '@umijs/max';
import { useSelector } from 'react-redux';

const SinglePageComp = () => {
  const [searchParamData] = useSearchParams();
  const postId = searchParamData.get('pageIndex');

  const post = useSelector((state: any) => {
    return state.posts.postsArr.find((post) => post.id === postId);
  });

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
    </div>
  );
};

export default SinglePageComp;
