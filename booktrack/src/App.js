import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Reading from './Components/Reading.js';
import Search from './Components/Search.js';
import WantToRead from './Components/WantToRead.js';
import Read from './Components/Read.js';
import * as BooksAPI from './BooksAPI.js';
import './App.css';

class App extends Component {
  state={
    books:[],
  }
  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books:books})
    })
  }

updateShelf = (book, shelf) => {
    BooksAPI.udpate(book, shelf).then(response => {
      book.shelf = shelf
      this.setState({ books: this.state.books.filter(b => b.id !== book.id).concat([ book ]) })
    })
  }



  render() {

    return (
      <div className="App">
          <div className="title">
            <div className="title1">MyReads</div>
          </div>
          <Link className="searchBtn" to = '/search'>Search</Link>

          <Route exact path="/" render={
            ({history})=>(
              <Reading pbooks={this.state.books} pupdateShelf={this.updateShelf()}/>
            )}/>

          <Route path="/search" render={
            ()=>(
              <Search pbooks={this.state.books} />
            )}/>

          <Route exact path="/" render={
            ({history})=> (
              <WantToRead pbooks={this.state.books} />
            )}/>

          <Route exact path="/" render={
            ({history})=> (
              <Read pbooks={this.state.books} />
            )}/>

      </div>
    );
  }
}

export default App;
