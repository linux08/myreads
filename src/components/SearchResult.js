import React from 'react';
import Shelf from './Shelf.js'

class SearchResult extends React.Component {

    render() {
        console.log(this.props)
        const book = this.props.searchResult

        return (
            <div className="books-grid">
                <div className="list-books-search"  >
                    <div className="list-books-content">
                        <ol className="books-grid">
                            {book.map((b, index) => (
                                <li key={index}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover"><img src={b.imageLinks.smallThumbnail} alt="book.title" className="book-cover-image" /></div>

                                            <Shelf updateBook={this.props.updateBook}
                                                {...b} />
                                        </div>
                                        <div className="book-title">{b.title}</div>
                                        <div className="book-authors">{b.authors}</div>
                                    </div>
                                </li>))}
                        </ol>
                    </div>
                </div>
            </div>

        )
    }
}
export default SearchResult