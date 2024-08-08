import CommonModalForm from '@/components/commonModalForm';
import { FormItemType } from '@/types/enum';
import { Button, Form, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  open: boolean;
  changeOpenHandle: () => void;
  onFinish: (value: { title: string; content: string }) => void;
}
const AddPostForm: React.FC<Props> = (props) => {
  const { open, changeOpenHandle, onFinish } = props;

  const { Item } = Form;
  const dispatch = useDispatch();
  const formRef = useRef(null);
  // 提交函数
  // const onFinish = (values: { title: string; content: string }) => {
  //   console.log('Success:', values);
  //   console.log(formRef, '1');
  //   // 进行修改
  //   if (values.title && values.content) {
  //     dispatch(
  //       postAdded({
  //         id: nanoid(),
  //         title: values.title,
  //         content: values.content,
  //       }),
  //     );
  //     formRef?.current?.resetFields();
  //   }
  // };

  const formItem = useMemo(
    () => [
      {
        label: '文章标题',
        name: 'title',
        allowclear: true,
        colProps: {
          span: 24,
        },
        type: FormItemType.TEXT,
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
      },
      {
        label: '文章内容',
        name: 'content',
        allowclear: true,
        colProps: {
          span: 24,
        },
        type: FormItemType.TEXT,
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
      },
    ],
    [],
  );

  return (
    <div>
      <CommonModalForm
        open={open}
        changeOpenHandle={changeOpenHandle}
        onFinish={onFinish}
        formItems={formItem}
      />
    </div>
  );
};

export default AddPostForm;
