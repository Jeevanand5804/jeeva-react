import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useFetcher, useHref, useParams } from "react-router-dom";

function PostDetail() {
  let { postId } = useParams();
  const [postDetail, setpostDetail] = useState({});

  useEffect(() => {
    if (postId != undefined && postId >= 0) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => setpostDetail(response.data));
    }
  }, [postId]);

  return (
    <>
      <div>
        {Object.keys(postDetail).length > 0 ? (
          <>
            postDetail:{postId}
            <p>{postDetail.body}</p>
          </>
        ) : (
          <h5>No data found</h5>
        )}
      </div>
    </>
  );
}

export default PostDetail;