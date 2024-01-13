import { connectDB } from '@/util/db';
import { ObjectId } from 'mongodb';
import React from 'react';

const Edit = async (props: any) => {
  const db = (await connectDB).db("board");
  let result = await db.collection("post").findOne({ _id: new ObjectId(props.params.id) });

  if (!result) {
    alert('잘못된 접근입니다.');
    window.location.href = '/list';
    return;
  }
  return (
    <div className='p-20'>
      <h4>수정 페이지</h4>
      <form action="/api/post/edit" method="POST">
        <label htmlFor="title">제목</label>
        <input type="hidden" name="id" value={props.params.id} />
        <textarea name='title' className='edit-title' defaultValue={result.title}></textarea>
        <label htmlFor="content">내용</label>
        <textarea name='content' className='edit-content' defaultValue={result.content}></textarea>
        <button type="submit">수정</button>
      </form>

    </div>
  );
};

export default Edit;