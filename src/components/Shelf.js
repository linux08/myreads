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
                <select defaultValue={book.shelf} onChange={(event) => this.handleChange(book, event.target.value)}>

                    <option value="none" disabled>Move to...</option>
                    <option className={book.shelf === 'currentlyReading' ? 'highlight-shelf' : null} value="currentlyReading">Currently Reading</option>
                    <option className={book.shelf === 'wantToRead' ? 'highlight-shelf' : null} value="wantToRead">Want to Read</option>
                    <option className={book.shelf === 'read' ? 'highlight-shelf' : null} value="read">Read</option>
                    <option className={book.shelf === 'none' ? 'highlight-shelf' : null} value="none">None</option>

                </select>
            </div>

        )
    }
}

export default Shelf