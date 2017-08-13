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

        const book = this.props.books

        const currentlyReading = book.filter((b) => {

            return b.shelf === 'currentlyReading'
        })

        const wantToRead = book.filter((b) => {

            return b.shelf === 'wantToRead'
        })

        const read = book.filter((b) => {
            return b.shelf === 'read'
        })

        return (
            <div className="list-books">

                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {currentlyReading.map((book, index) => (
                                        <li key={index}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <Shelf {...this.props}
                                                            {...book} />
                                                    </div>
                                                </div>
                                                <Link to={`getbook/${book.id}`}>  <div className="book-title" >{book.title}</div> </Link>
                                                <div className="book-authors">{book.authors}</div>
                                            </div>
                                        </li>
                                    ))}

                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {wantToRead.map((book, index) => (
                                        <li key={index}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <Shelf {...this.props}
                                                            {...book} />
                                                    </div>
                                                </div>
                                                <Link to="/search"> <div className="book-title">{book.title}</div> </Link>
                                                <div className="book-authors">{book.authors}</div>
                                            </div>
                                        </li>
                                    ))}

                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {read.map((book, index) => (
                                        <li key={index}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <Shelf {...this.props}
                                                            {...book} />
                                                    </div>
                                                </div>
                                                <Link to="/search"> <div className="book-title">{book.title}</div> </Link>
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