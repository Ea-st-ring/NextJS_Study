import { NextApiRequest } from "next";

export default function Write() {


  return (
    <div>
      <h4>글쓰기</h4>
      <form action='/api/write' method="POST" className="write-box">
        <input type="text" name="title" placeholder="제목" className="title-input"/>
        <textarea name="content" placeholder="내용" className="content-textarea"></textarea>
        <button type="submit" className="submit-button">작성 완료</button>
      </form>
    </div>
  );
}