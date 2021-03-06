import React, {Component} from 'react';

import '../App.css';



class WantToRead extends Component {

  render(){
    console.log(this.props.pbooks)
    return(
      <div className="ReadingComponent">
          <div className="Reading1">Want to Read</div>
          <hr/>
          <div>
              <ol className="Reading2">
                  {this.props.pbooks.filter((book)=> book.shelf == "wantToRead").map((book)=>
                    <li key={book.id}>
                      <div className= 'bookImage' style={{backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} />
                      <div className="bookTitle">{book.title} </div>
                      <div className="bookAuthor">{book.authors}</div>
                    </li>
                  )}
              </ol>
          </div>
      </div>
    );
  }
}

export default WantToRead
