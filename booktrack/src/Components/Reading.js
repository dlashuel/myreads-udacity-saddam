import React, {Component} from 'react';

import '../App.css';



class Reading extends Component {

  render(){
    console.log(this.props.pbooks)
    return(
      <div className="ReadingComponent">
          <div className="Reading1">Currenty Reading</div>
          <hr/>
          <div >
              <ol className ="Reading2">
                  {this.props.pbooks.filter((book)=> book.shelf === "currentlyReading").map((book)=>
                    <li key={book.id}>
                      <div className= 'bookImage' style={{backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} />
                      <div className="bookTitle">{book.title}</div>
                      <div className="bookAuthor">{book.authors}</div>
                      <button onClick={this.props.updateShelf(book.id, book.shelf)}>Change shelf to Want to Read</button>
                    </li>
                  )}
              </ol>
          </div>
      </div>
    );
  }
}


export default Reading
