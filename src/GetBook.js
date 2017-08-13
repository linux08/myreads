import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './components/Book.js'
import Header from './components/Header.js'

class GetBook extends React.Component {

    render() {
        return (
            <div className="app">
                <Header />
                <Book {...this.props} />
            </div>
        )
    }
}

export default GetBook
