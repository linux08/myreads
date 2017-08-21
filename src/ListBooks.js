import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList.js'
import Header from './components/Header.js'

class ListBooks extends React.Component {


    render() {
        const books = this.props.books
        return (
           <div>
               <Header />
                <div className="list-books">
                    <BookList
                        title='Currently Reading'
                        {...this.props}
                        books={books.filter((book) => book.shelf === 'currentlyReading')} />

                    <BookList
                        title='Want to Read'
                        {...this.props}
                        books={books.filter((book) => book.shelf === 'wantToRead')} />

                    <BookList
                        title='Read'
                        {...this.props}
                        books={books.filter((book) => book.shelf === 'read')} />
                </div>
            </div>
        )
    }
}

export default ListBooks