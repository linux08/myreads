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
                //console.log(error)
            })

    }

    render() {
        const book = this.state.book;
        let img = book.imageLinks

        return (

            <div className="list-books-content">
                <div >
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{book.title}</h2>
                        <div className="book">
                            <div className="book-top">
                                <div ><img src={(img || {}).thumbnail} alt={book.title} className="book-cover-image" /></div>
                                <Shelf {...this.props}
                                    {...book}
                                />
                            </div>

                            <div className="book-title">TITLE:{book.title}</div>
                            <div className="book-authors">AUTHOR:{book.authors}</div>
                            <div> Publisher:{book.publisher} </div>

                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default Book