import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import debounce from 'debounce'
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

    if (query === '') {
      this.setState({ searchResult: [] })
    }
    else {
      debounce(BooksAPI.search(query, maxresult).then(resp => {
        this.setState({ searchResult: resp })

        let idMatch = this.state.books.map(a => this.state.searchResult.map(b => {
          if (b.id === a.id) {
            b.shelf = a.shelf
          }
          return b
        }))
        
      })
        .catch((err) => {
          console.log(err);
        }), 2000)
    }

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
