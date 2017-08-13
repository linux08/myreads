import React from 'react'
import Shelf from './Shelf.js'
import * as BooksAPI from '../BooksAPI'

class Book extends React.Component {

    state = {
        book: []
    }
    componentDidMount() {
        const bookid = location.href.split("/").splice(-1)[0]
        console.log(bookid)
        BooksAPI.get(bookid)
            .then((book) => {
                this.setState({ book })
            })
            .catch((error) => {
                console.log(error)
            })

    }

    getbook = () => {

    }

    render() {
        // this.getbook()
        const book = this.state;
        console.log(book)
        return (
            <div className="list-books-search">

                <div className="list-books-content">
                    <div >
                        <div className="bookshelf">
                            <div>

                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <Shelf {...this.props}
                                            />
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                    <div> {book.description} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Book