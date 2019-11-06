import React from 'react';

class Poem extends React.Component {
  render(){
    const { id, title, content, author, read, readPoem } = this.props
    return (
      <div style={{color: read ? "red" : "black"}} onClick={()=>readPoem(id)}>
        <h3>{ title }</h3>
        <p>{ content }</p>
        <strong>- By { author }</strong>
      </div>
    ); 
  }
}

export default Poem;
