import React from "react";

class NewPoemForm extends React.Component {
  createPoem = (title, content, author) => {
    return {
      title: title,
      content: content,
      author: author
    };
  };

  handleSubmit = event => {
    event.preventDefault();

    const title = event.target.title.value;
    const content = event.target.content.value;
    console.log(this.props);
    const author = this.props.user;
    const poem = this.createPoem(title, content, author);

    this.props.addPoem(poem);
  };
  render() {
    return (
      <div className="new-poem">
        <form onSubmit={this.handleSubmit} className="new-poem-form">
          <input name="title" placeholder="Name your masterpiece..." />
          <textarea
            name="content"
            placeholder="Your masterpiece belongs here..."
          />
          <input type="submit" value="Share your masterpiece" />
        </form>
      </div>
    );
  }
}

export default NewPoemForm;
