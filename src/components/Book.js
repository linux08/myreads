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
                console.log(this.state.book);
            })
            .catch((error) => {
                console.log(error)
            })

    }

    render() {
        // this.getbook()
        const book = this.state.book;
        let img = book.imageLinks
     //   console.log(Object.keys(img))
        // for(var key in img) {
        //     const value = img[key];
        //     console.log(value)
        //     break;
        // }

        

       
        
        //console.log(img.thumbnail)
        return (


            <div className="list-books-content">
                <div >
                    <div className="bookshelf">

                        <h2 className="bookshelf-title">{book.title}</h2>
                        <div>{
                            

                        <div className="book-cover"><img src={img} alt={book.title}  className="book-cover-image"/></div>
                        }
                            <div className="book">
                                <div className="book-top">
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
            </div>

        )
    }
}
export default Book