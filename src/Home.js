import React, { Component } from 'react'
import { connect } from 'react-redux'
import QPrev from './QPrev'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            home: true,
        }
    }
    
    handlePageChange = (e) => {
        e.preventDefault()
        this.setState(() => ({ home: !this.state.home }))
    }

    render() {

        const { authedUser, questions } = this.props
        
        let ansdQuestions = []
        let unAnsdQuestions = []
            
        const qData = Object.values(questions)

        qData.forEach(q => {
            if(q.optionOne.votes.includes(authedUser) || q.optionTwo.votes.includes(authedUser)) {
                ansdQuestions = [...ansdQuestions, q]
            } else {
                unAnsdQuestions = [...unAnsdQuestions, q]
            }
        })

        ansdQuestions.sort((a, b) => b.timestamp - a.timestamp)
        unAnsdQuestions.sort((a, b) => b.timestamp - a.timestamp)

        if(authedUser === null) {
            return <Redirect to='/login' />
        }

        if(this.state.home === true) {
            
            return (
                <div className="home-container">
                    <button onClick={this.handlePageChange} >See your Answered Questions<i className="fas fa-angle-double-right"></i></button>
                    <h1 className="text-center">Here are your unAnswered Questions</h1>

                    {unAnsdQuestions.map(q => (
                        <QPrev key={q.id} qid={q.id} qAuthor={q.author} />
                    ))}

                </div>
            )
            
        } else {
            
            return (
                <div className="home-container">
                    <button onClick={this.handlePageChange}>See your unAnswered questions<i className="fas fa-angle-double-right"></i></button>
                    <h1 className="text-center">Here are your answered questions</h1>
                    
                    {ansdQuestions.map(q => (
                        <QPrev key={q.id} qid={q.id} qAuthor={q.author} />
                    ))}
                </div>
            )
        }
    }
}

const mapStateToProps = ({ authedUser, questions }) => {
    return {
        authedUser,
        questions,
    }
}

export default connect(mapStateToProps)(Home)
