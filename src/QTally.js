import React, { Component } from 'react';
import { connect } from 'react-redux'

class QTally extends Component {

    render() {

        const { authedUser, option, totalVotes } = this.props
        const { votes, text } = option

        let votePercent = votes.length * 100 / totalVotes
        votePercent = Math.trunc(votePercent)

        return (
            <div className="q-tally-container">
                <h3>{text}?</h3>
                {votes.includes(authedUser) ? <h3 className="option-chosen">You chose this option<i className="fas fa-certificate"></i></h3>
                : null}

                <h3>{`${votePercent} % of users voted for this option`}</h3>
                <h3>{`This answer has ${votes.length} votes out of ${totalVotes}`}</h3>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser }, { option, totalVotes }) => {
    return {
        authedUser,
        option,
        totalVotes,
    }
}

export default connect(mapStateToProps)(QTally)