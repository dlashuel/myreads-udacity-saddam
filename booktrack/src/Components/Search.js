import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI.js';
import escapeRegExp from 'escape-string-regexp'
import '../App.css';

class Search extends Component{
  state = {
    query:'',
    books:[]
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()});
    BooksAPI.search(query, 20).then((books)=>{
      this.setState({ books:books})
    })
  }


    render(){

        return(
          <div>
            <input
            className="searchInput"
            type="text"
            placeholder="Search Books"
            value={this.state.query}
            onChange={(event)=>this.updateQuery(event.target.value)}
             />

             <ol className="Reading2">
                 {this.state.books.map((book)=>
                   <li key={book.id}>
                     <div className= 'bookImage' style={{backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} />
                     <div className="bookTitle">{book.title}</div>
                     <div className="bookAuthor">{book.authors}</div>
                   </li>
                 )}
             </ol>
          </div>
        )
    }
}

export default Search
