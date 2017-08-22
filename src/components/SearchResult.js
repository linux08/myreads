import React from 'react';
import Shelf from './Shelf.js'

class SearchResult extends React.Component {

    render() {
        const book = this.props.searchResult
        const bookState = this.props.books
        console.log('bookState')
        console.log(bookState)
        console.log('book')
        console.log(book)

        // const b =book.map((b)=>{
        //     if(b.id === bookState.id){
        //         b.shelf = 
        //         console.log('bisi')
        //         console.log(b)
        //         return b

        //     }

        // })
        // console.log(b)
        // console.log('search result')
        //console.log(this.props.searchResult)
        console.log(book.length)


        let searchComponent = book.map((b, index) => {
            if (b.length == 0 || undefined) {
                return
            }
            else {
                console.log(bookState.id)
                if (b.id === bookState.id)
                    b.shelf = bookState.shelf

                return (

                    <div className="list-books-search" key={index} >

                        <div className="list-books-content">
                            <ol className="books-grid">
                                <li >
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover"><img src={b.imageLinks.smallThumbnail} alt="book.title" className="book-cover-image" /></div>

                                            <Shelf {...this.props}
                                                {...b}
                                            />
                                        </div>
                                        <div className="book-title">{b.title}</div>
                                        <div className="book-authors">{b.authors}</div>
                                    </div>
                                </li>
                            </ol>
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