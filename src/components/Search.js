import React, { Component } from 'react'
import serializeForm from 'form-serialize'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import SearchResult from './SearchResult.js'


class Search extends Component {

    state = {
        searchField: '',
        // searchResult: ''
    }



    handleUpdate(event, maxresult) {
        const match = new RegExp(escapeRegExp(event), 'i')
        console.log(match)
        this.setState({ searchField: event })
        this.props.searchBook(event, maxresult)
    }

    render() {
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Close</Link>
                        <div className="search-books-input-wrapper">

                            <input type="text" placeholder="Search by title or author" onChange={(event) => this.handleUpdate(event.target.value, 20)} />

                        </div>
                    </div>

                </div>
                <SearchResult {...this.props} />
            </div>
        )
    }


}
export default Search