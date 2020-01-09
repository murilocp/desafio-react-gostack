import React from 'react';

function PostComment ({ author, content }) {
  return(
    <li>
      <img src={author.avatar} alt="Avatara Comentário"/>
      <div id="comment-content">
      <span><strong>{ author.name }</strong> { content }</span>
      </div>
    </li>
  );
}

function Post ( { author, content, date, comments } ) {
  return(
    <li id="post-item">
      <div id="author">
        <img src={author.avatar} alt="Avatar Post"/>
        <div className="author-name">
          <p className="post-author">{author.name}</p>
          <span className="post-date">{date}</span>
        </div>
      </div>

      <p id="post-content">{content}</p>

      <div className="line"></div>

      <ul id="comments">
        {comments.map(comment => (
          <PostComment 
            key={comment.id} 
            author={comment.author}
            content={comment.content} 
          />
        ))}
      </ul>
    </li>
  );
}

export default Post;