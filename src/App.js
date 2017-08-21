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
        console.log('ghjk')
        
        console.log(this.state.books)
      })
      .catch((err) => (
        console.log(err)))

  }

  searchBook = (query, maxresult) => {
    BooksAPI.search(query, maxresult).then((resp) => {
      if (resp.error) {
        this.setState({ searchResult: [] })
      }
      this.setState({ searchResult: resp })
      console.log(resp)
    })
      .catch((err) => {
        console.log(err);
      })

  }

  searchAndUpdate = (book, shelf) => {

    this.setState({ books: Object.assign(this.state.books, book) })

  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
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
      </div>
    )
  }
}



export default App
