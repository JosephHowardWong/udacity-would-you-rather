import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from './actions/authedUser'

class Login extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            selectedUser: "sarahedo",
        }
    }
    
    handleChange = (e) => {
        this.setState(() => ({ selectedUser: e.target.value }))
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props
        const { selectedUser } = this.state
        dispatch(login(selectedUser))
    }
    
    render() {
        
        const { users, authedUser, questions } = this.props
        
        const userData = Object.values(users)

        const qKeys = Object.keys(questions)

        if(authedUser !== null && authedUser !== "" && this.props.location.state !== undefined) {
            if(qKeys.includes(this.props.location.state.referrer)) {
                return <Redirect to={`/questions/${this.props.location.state.referrer}`} />
            }
            return <Redirect to='/error' />
        }

        if(authedUser !== null && authedUser !== "") {
            return <Redirect to='/' />
        }
        
        return (
            <div className="login-container">
                <h2>Welcome to the Would You Rather Voting System!!</h2>
                <h3>Sign In</h3>
                <form className="login-form" onSubmit={(e) => {this.handleSubmit(e)}}>
                    <label>Select User</label>
                    <select value={this.state.selectedUser} onChange={this.handleChange} >
                        {userData.map((user) => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>

                    <button type="submit" >Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ users, authedUser, questions }) => {
    return {
        users,
        authedUser,
        questions,
    }
}

export default connect(mapStateToProps)(Login)