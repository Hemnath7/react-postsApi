import "../App.css";

function PostCard(props) {
  return (
    <div className="card">
      <img src={props.Image} />
      <h3>{props.Title}</h3>
      <a>100k Likes</a>
    </div>
  );
}

export default PostCard;
