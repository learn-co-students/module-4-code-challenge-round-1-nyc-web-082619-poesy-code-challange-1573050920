import React from 'react';

const Poem = (props) => {

    const { id, title, content, author, read, readPoem, like } = props

    return (
      <div style={{color: read ? "red" : "black"}} onClick={()=>readPoem(id)}>
        <h3>{ title }</h3>
        <p>{ content }</p>
        <strong>- By { author }</strong>
        <br/>
        {like ? <button onClick={()=>like(id)}>Like</button> : null }
      </div>
    ); 
}

export default Poem;
