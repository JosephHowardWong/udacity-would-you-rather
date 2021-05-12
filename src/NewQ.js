import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { handleSaveQuestion } from './actions/questions'

class NewQ extends Component {

    state = {
        optionOneText: "",
        optionTwoText: "",
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const { optionOneText, optionTwoText } = this.state

        this.props.dispatch(handleSaveQuestion(optionOneText, optionTwoText))
        this.setState(() => ({ optionOneText: ""}))
        this.setState(() => ({ optionTwoText: ""}))
        this.props.history.push('/')
    }

    handleChange = (e) => {
        this.setState(() => ({ [e.target.name]: e.target.value }))
    }
    
    render () {

        if(this.props.authedUser === null) {
            return <Redirect to='/error' />
        }

        return (
            <div className="new-question-container">
                <h3>Create a New Question</h3>
                <h3>Would You Rather?</h3>
                <form className="new-question-form" onSubmit={this.handleSubmit}>
                    
                    <label>Enter option # 1</label>
                    <input type="text" name="optionOneText" value={this.state.optionOneText} onChange={this.handleChange}/>
                    
                    <label>Enter option # 2</label>
                    <input type="text" name="optionTwoText" value={this.state.optionTwoText} onChange={this.handleChange}/>
                    
                    <button type="submit" disabled={this.state.optionOneText === "" || this.state.optionTwoText === ""}>Add Question</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(NewQ))
