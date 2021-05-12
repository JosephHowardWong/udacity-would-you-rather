import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class QPrev extends Component {
    render() {

        const { questions, users, qid, qAuthor } = this.props

        return (
            <div className="q-prev">
                <img className="user-avatar" src={users[qAuthor].avatarURL} alt={`avatar of ${users[qAuthor].name}`}/>
                <h3>{`${users[qAuthor].name} asked: `}</h3>
                <h4>{`Would you rather ${questions[qid].optionOne.text} or ${questions[qid].optionTwo.text}`} ?</h4>
                <Link to={`/questions/${qid}`} >
                    <button >Vote / View Poll</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = ({ questions, users }, { qid, qAuthor }) => {
    return {
        questions,
        users,
        qid,
        qAuthor,
    }
}

export default connect(mapStateToProps)(QPrev)
