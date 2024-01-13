"use client";

import Link from "next/link";
// import { useEffect } from "react";

const ListItem = (props: any) => {

  // useEffect(() => {
  //   서버에 부탁해서 DB 게시물 가져오기
  //   result에 저장
  // }, []);

  // 단점 : 검색 노출이 제대로 이루어지지 않음
  // useEffect는 html 렌더링이 끝난 후에 실행되기 때문
  const result = props.result;
  return (
    <div>
      {result.map(
        (
          post: { _id: string; title: string; content: string },
          index: number
        ) => (
          <Link href={"detail/" + post._id} key={index} className="list-item">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <Link href={"/edit/" + post._id}>
              <p>✏</p>
            </Link>
            <span onClick={()=>{
              fetch("/api/post/delete", {
                method: "DELETE",
                body: JSON.stringify({
                  id: post._id,
                }),
              }).then((res) => {
                if (res.status === 200) {
                  window.location.href = "/list";
                }
              });
            }}>삭제</span>
          </Link>
        )
      )}
      <Link href="write">
        <button>글쓰기</button>
      </Link>
    </div>
  );
};

export default ListItem;
