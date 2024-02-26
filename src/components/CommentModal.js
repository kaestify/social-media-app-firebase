import { useState, useRef, useEffect } from "react";
import { updateDoc, doc, serverTimestamp } from "firebase/firestore";
import { useAuthContext } from "../hooks/useAuthContext";
import { db } from "../firebase/config";
export default function CommentModal({ postDetails2, handleClose }) {
  //   console.log(postDetails2);
  const { user } = useAuthContext();
  const innerRef = useRef();
  useEffect(() => innerRef.current && innerRef.current.focus());
  const [comment, setComment] = useState("");
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const timeNow = new Date()
      .toLocaleString()
      .replace(",", "")
      .replace(/:.. /, " ");
    const commentToAdd = {
      displayName: user.displayName,
      content: comment,
      createdAt: timeNow,
      id: Math.random(),
    };

    console.log(commentToAdd);
    const docRef = doc(db, "posts", postDetails2.id);

    const updatedDocument = await updateDoc(docRef, {
      comments: [...postDetails2.comments, commentToAdd],
    });

    setComment("");
    handleClose();
  };

  return (
    <form style={{ padding: "5%" }}>
      <span>
        <h1>New Comment </h1>{" "}
        <button
          style={{
            margin: 0,
            position: "absolute",
            opacity: 1,
            zIndex: 10,
            cursor: "pointer",
            bottom: "50px",
            right: "50px",
          }}
          className="btn"
          onClick={handleCommentSubmit}
        >
          Submit
        </button>
      </span>

      <input
        type="textarea"
        ref={innerRef}
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        style={{ height: "20vh", display: "block" }}
        name="comment"
        maxlength="100"
      />
    </form>
  );
}
