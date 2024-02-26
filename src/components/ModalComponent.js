import { Card } from "react-bootstrap";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
export default function ModalComponent({ postDetails }) {
  return (
    <Card
      style={{
        // width: "35rem",
        background: "transparent",
        margin: "20px",
        border: "none",
      }}
    >
      <Card.Body>
        <h2 style={{ display: "flex", textDecoration: "underline" }}>
          {postDetails.caption}
        </h2>
        <Card.Img
          variant="top"
          style={{
            objectFit: "contain",
            maxHeight: "400px",
            border: "2px solid #555",
          }}
          src={postDetails.imgURL}
        />
        <Card.Text>
          <div className="form-group">
            <div className="grid-container">
              Posted on {postDetails.timestamp.toDate().toDateString()} by{" "}
              {postDetails.displayName}
            </div>
            Post: {postDetails.post}
            <h2>Comments: </h2>
            {postDetails.comments.length > 0 ? (
              postDetails.comments.map((comment) => (
                <>
                  <ul
                    className="comment-box"
                    style={{
                      backgroundColor: "#D3D3D3",
                      boxShadow: "2px 4px",
                      padding: "2%",
                      borderRadius: "10px",
                      width: "70%",
                      listStyleType: "none",
                    }}
                  >
                    <li key={comment.id}>
                      Written by <b>{comment.displayName}</b>{" "}
                      {formatDistanceToNow(new Date(comment.createdAt), {
                        addSuffix: true,
                      })}
                    </li>

                    <li
                      style={{
                        backgroundColor: "white",
                        padding: "2%",
                        borderRadius: "10px",
                      }}
                      key={comment.id}
                    >
                      {comment.content}
                    </li>
                  </ul>
                </>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
