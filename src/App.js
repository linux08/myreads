import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'
import SearchBook from './SearchBook.js'
import GetBook from './GetBook.js'


class App extends Component {


  state = {
    books: [],
    searchResult: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }


  updateBook = (book, shelf) => {

    const booksInState = this.state.books
    console.log('book place')
    console.log(book)

    BooksAPI.update(book, shelf)
      .then((books) => {
        console.log(books)
        let updatedBook = this.state.books.map(b => {
          if (b.id === book.id)
            b.shelf = shelf
          return b
        })
        this.setState({ books: updatedBook })
      })
      .catch((err) => (
        console.log(err)))

  }

  searchBook = (query, maxresult) => {

    if (query == '') {
      this.setState({ searchResult: [] })
    }
    BooksAPI.search(query, maxresult).then((resp) => {

      this.setState({ searchResult: resp })
      console.log(resp)
    })
      .catch((err) => {
        this.setState({ searchResult: [] })
        console.log(err);
      })


  }


  render() {
    console.log(this.state);
    return (
      <div className="app" >
        <Route exact path="/" render={() => (
          <ListBooks {...this.state}
            updateBook={this.updateBook} />
        )} />
        <Route path="/search" render={() => (
          <SearchBook  {...this.state}
            searchBook={this.searchBook}
            updateBook={this.updateBook} />
        )}
        />
        <Route path="/getbook" render={() => (
          <GetBook {...this.state}
            updateBook={this.updateBook} />
        )}
        />
      </div >
    )
  }
}



export default App
