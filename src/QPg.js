import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from './actions/questions'
import QTally from './QTally'
import { Redirect } from 'react-router-dom'
import { logout } from './actions/authedUser'
// import sarahedo from './profilePics/sarahedo.jpg'
// import tylermcginnis from './profilePics/tylermcginnis.jpg'
// import johndoe from './profilePics/johndoe.jpg'

class QPg extends Component {

    state = {
        selectedOption: "",
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { match, dispatch } = this.props
        const { params } = match
        const { qid } = params
        dispatch(handleSaveAnswer(qid, this.state.selectedOption))
    }

    handleChange = (e) => {
        this.setState(() => ({ selectedOption: e.target.name }))
    }

    render() {

        const { match, authedUser, questions, users } = this.props
        const { params } = match
        const { qid } = params
        
        if(!questions[qid]) {
            this.props.dispatch(logout())    
            return <Redirect to={{ pathname: "/login", state: { referrer: qid } }} />
        }
        
        if(authedUser === null) {
            return <Redirect to={{ pathname: "/login", state: { referrer: qid } }} />
            // return <Redirect to='/error' />
        }

        let totalVotes = questions[qid].optionOne.votes.length +
                            questions[qid].optionTwo.votes.length 

        if(questions[qid].optionOne.votes.includes(authedUser) || questions[qid].optionTwo.votes.includes(authedUser)) {

            return (
                <div className="q-results-container">
                    <h1>Results of this question</h1>
                    <img className="user-avatar" src={users[questions[qid].author].avatarURL} alt={`avatar of ${users[questions[qid].author].name}`}/>
                    <div>{`Question made by: ${users[questions[qid].author].name}`}</div>
                    <QTally option={questions[qid].optionOne} qid={qid} totalVotes={totalVotes} />
                    <QTally option={questions[qid].optionTwo} qid={qid} totalVotes={totalVotes} />
                </div>
            )
            
        } else {
            
            return (
                <div className="question-container">
                    <img className="user-avatar" src={users[questions[qid].author].avatarURL} alt={`avatar of ${users[questions[qid].author].name}`}/>
                    {/* <img className="user-avatar" src={tylermcginnis}/> */}
                    <h2>{`${users[questions[qid].author].name} asks: Would You Rather?`}</h2>
                    <form className="question-form" onSubmit={this.handleSubmit}>
                        
                        <div className="question-option">
                            <label>{questions[qid].optionOne.text}</label>
                            <input type="checkbox" name="optionOne" value={this.state.selectedOption} checked={this.state.selectedOption === "optionOne"} onChange={this.handleChange} />      
                        </div>

                        <div className="question-option">
                            <label>{questions[qid].optionTwo.text}</label>
                            <input type="checkbox" name="optionTwo" value={this.state.selectedOption} checked={this.state.selectedOption === "optionTwo"} onChange={this.handleChange} />  
                        </div>

                        <button type="submit" disabled={this.state.selectedOption === ""}>Submit</button>              
                    </form>
                </div>
            )
        }
    }
}

const mapStateToProps = ({ authedUser, questions, users }) => {
    return {
        authedUser,
        questions,
        users,
    }
}

export default connect(mapStateToProps)(QPg)