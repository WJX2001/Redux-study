import { nanoid } from '@reduxjs/toolkit';
import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from '../../postsSlice';

const AddPostForm = () => {
  const { Item } = Form;
  const dispatch = useDispatch();
  const formRef = useRef(null);
  // 提交函数
  const onFinish = (values: { title: string; content: string }) => {
    console.log('Success:', values);
    console.log(formRef,'1')
    // 进行修改
    if (values.title && values.content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title: values.title,
          content: values.content,
        }),
      );
      formRef?.current?.resetFields()
    }
  };

  return (
    <div>
      <section>
        <h2>添加新文章</h2>
        <Form onFinish={onFinish} ref={formRef}>
          <Item label="文章标题" name="title">
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Item>
          <Item label="文章内容" name="content">
            <TextArea placeholder="请输入文章内容" style={{ width: 400 }} />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Item>
        </Form>
      </section>
    </div>
  );
};

export default AddPostForm;
