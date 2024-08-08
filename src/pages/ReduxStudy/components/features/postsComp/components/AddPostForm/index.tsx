import CommonModalForm from '@/components/commonModalForm';
import { FormItemType } from '@/types/enum';
import { useSearchParams } from '@umijs/max';
import React, { useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectPostById } from '../../postsSlice';

interface Props {
  open: boolean;
  title: string;
  type: 'add' | 'edit';
  changeOpenHandle: () => void;
  onFinish: (value: { title: string; content: string }) => void;
}
const AddPostForm: React.FC<Props> = (props) => {
  const { open, changeOpenHandle, onFinish,type } = props;
  const [searchParamData] = useSearchParams();
  const postId = searchParamData.get('pageIndex');
  const formRef = useRef(null);
  // 将表格数据回显
  const post = useSelector((state) => selectPostById(state, postId));

  useEffect(() => {
    if (open && type === 'edit') {
      formRef.current?.setFieldsValue(post);
    }
  }, [open,type]);

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
        title={props.title}
        open={open}
        changeOpenHandle={changeOpenHandle}
        onFinish={onFinish}
        formItems={formItem}
        ref={formRef}
      />
    </div>
  );
};

export default AddPostForm;
