import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search.js'


class SearchBook extends React.Component {

  render() {
    return (
      <div className="app">
        <Search {...this.props} />

      </div>
    )
  }
}

export default SearchBook
