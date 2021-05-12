import React, { Component } from 'react';
import { connect } from 'react-redux'

class LeaderBoard extends Component {
    render() {

        const { users } = this.props;

        const userData = Object.values(users)

        const weightedUsers = userData.map(data => {

            let newObj = {}
            newObj = {
                userName: data.name,
                userPic: data.avatarURL,
                numCreatedQuestions: data.questions.length,
                numAnsweredQuestions: (Object.keys(data.answers)).length,
                score: (Object.keys(data.answers)).length + data.questions.length,
            }
            return newObj
        })

        weightedUsers.sort((a, b) => b.score - a.score)  

        return (
            <div className="leaderboard-container">
                <h1>LeaderBoard</h1>            
                <ul>
                    {weightedUsers.map((user, idx) => (
                        <li key={user.userName} index={user.userName} className="leaderboard-profile">
                            <h2>{user.userName}</h2>
                            <img className="user-avatar" src={user.userPic} alt={`avatar of ${user.userName}`}/>
                            <div>
                                <h3 className="text-center">{`Questions Created: ${user.numCreatedQuestions}`}</h3>
                                <h3 className="text-center">{`Questions Answered: ${user.numAnsweredQuestions}`}</h3>
                            </div>
                            <h2 className="user-score">{`Total Score: ${user.score}`}{idx === 0 && <i className="fas fa-award gold"></i>}{idx === 1 && <i className="fas fa-award silver"></i>}{idx === 2 && <i className="fas fa-award bronze"></i>}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}    

const mapStateToProps = ({ users }) => {
    return {
        users,
    }
}

export default connect(mapStateToProps)(LeaderBoard)
