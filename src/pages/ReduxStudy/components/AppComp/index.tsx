import { Tabs } from 'antd';
import Counter from '../features/counter/Counter';
import PostsList from '../features/postsComp/PostsList';

const AppComp = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: '计算机案例',
            key: '1',
            children: <Counter />,
          },
          {
            label: 'demo2',
            key: '2',
            children: <PostsList />,
          },
        ]}
      />
      {/* <Counter />
      <PostsList /> */}
    </>
  );
};

export default AppComp;
