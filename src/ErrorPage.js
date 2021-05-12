import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="error-page">
            <i className="fas fa-exclamation-triangle fa-2x"></i>
            <h1>Error, please Login and try again!</h1>
            <Link to="/">
                <button>back to home<i className="fas fa-angle-double-left"></i></button>
            </Link>
        </div>
    )
}

export { ErrorPage }
