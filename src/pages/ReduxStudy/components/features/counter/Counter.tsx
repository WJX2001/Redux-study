import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from './counterSlice';
const Counter = () => {
  // 使用useSelector 从store中读取数据
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <Button onClick={() => dispatch(increment())}>Increment value</Button>
        <Button onClick={() => dispatch(decrement())}>Decrememt value</Button>
        <div>{count}</div>
      </div>
    </div>
  );
};

export default Counter;
