import React from 'react'


class Shelf extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(book, event) {
        this.props.updateBook(book, event)
    }

    render() {
        const book = this.props;
        return (
            <div className="book-shelf-changer">
                <select   value={book.shelf} onChange={(event) => this.handleChange(book, event.target.value)}>

                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option selected="none">None</option>

                </select>
            </div>

        )
    }
}

export default Shelf