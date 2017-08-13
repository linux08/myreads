import React from 'react';
import Shelf from './Shelf.js'

class SearchResult extends React.Component {

    render() {
        const book = this.props.searchResult
        console.log('search result')
        console.log(book.length)

        let searchComponent = book.map((b, index) => {
            if (b.length == 0 || undefined) {
                return
            }
            else {
                return (
                    <div className="list-books-search">

                        <div className="list-books-content">
                            <div >
                                <div className="bookshelf">
                                    <div>
                                        <ol className="books-grid">
                                            <li key={index}>
                                                <div className="book">
                                                    <div className="book-top">
                                                        <div className="book-cover"><img src={b.imageLinks.smallThumbnail} alt="book.title" /></div>
                                                        <div className="book-shelf-changer">
                                                            <Shelf {...this.props}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="book-title">{b.title}</div>
                                                    <div className="book-authors">{b.authors}</div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        })

        return (
            <div className="books-grid">
                {searchComponent}
            </div>

        )
    }
}
export default SearchResult