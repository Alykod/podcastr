import ReactMarkdown from "react-markdown";

const BlogPostLayout = props => {

  const cardUrlHandler = url => {
    return `http://localhost:1337/${url}`;
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">{props.title}</h1>
        <div className="section">
        {props.image && (
          <img className="image" src={cardUrlHandler(props.image.url)} type={props.image.mime} />
        )}
        </div>
        <div className="content">
        <ReactMarkdown source={props.content} />
        </div>
      </div>
    </section>
  );
};

export default BlogPostLayout;
