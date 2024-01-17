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
          post: {
            stringId: string;
            title: string;
            content: string;
          },
          index: number
        ) => (
          <div key={index} className="list-item">
            <Link href={"detail/" + post.stringId}>{post.title}</Link>
            <Link href={"detail/" + post.stringId}>{post.content}</Link>
            <Link href={"/edit/" + post.stringId}>
              <p>✏</p>
            </Link>
            <span
              onClick={(e) => {
                // const target = e.target as HTMLElement;
                // fetch("/api/post/delete", {
                //   method: "DELETE",
                //   body: JSON.stringify({
                //     id: post.stringId,
                //   }),
                // }).then((result) => {
                //     console.log(target);
                //     if (target.parentElement) {
                //       target.parentElement.style.opacity = '0';
                //       setTimeout(() => {
                //         if (target.parentElement)
                //         target.parentElement.style.display = 'none';
                //       }, 1000);
                //     }
                //   })
                fetch('/api/test?name=kim')
              }}
            >
              🗑
            </span>
          </div>
        )
      )}
      <Link href="write">
        <button>글쓰기</button>
      </Link>
    </div>
  );
};

export default ListItem;
