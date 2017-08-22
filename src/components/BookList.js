import React from 'react'
import *  as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import Shelf from './Shelf.js'

class BookList extends React.Component {

    state = {
        shelfName: ''
    }
    getBook = (event) => {
        this.props.getBook(event)

    }

    render() {
            console.log(this.props)
            const { books, title } = this.props
        return (
            // <div className="list-books">
            <div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{title}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.map((book, index) => (
                                        <li key={index}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover"><img src={book.imageLinks.smallThumbnail} alt="book.title"  className="book-cover-image"/></div>
                                                    <Shelf {...this.props}
                                                        {...book} />

                                                </div>
                                                <Link to={`getbook/${book.id}`}>  <div className="book-title" >{book.title}</div> </Link>
                                                <div className="book-authors">{book.authors}</div>
                                            </div>
                                        </li>
                                    ))}

                                </ol>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }

}
export default BookList