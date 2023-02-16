import "../assets/Post.css";

const Post = ({ title, snippet, link }) => {
  return (
    <section className="post">
      <h1>{title}</h1>
      <p>{snippet}</p>
      <a href={link} target="_blank" rel="noreferrer">
        Read more
      </a>
    </section>
  );
};

export default Post;
