import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './actions/authedUser'
import sarahedo from './profilePics/sarahedo.jpg'
import tylermcginnis from './profilePics/tylermcginnis.jpg'
import johndoe from './profilePics/johndoe.jpg'

// I have to import the 3 profile pics or else the avatars don't work ???

class Nav extends Component {
    render() {

        const { authedUser, users } = this.props

        return (
            <nav>
                <h1>Would You Rather ???</h1>
                <ul className="nav-links text-center">
                    <NavLink className="nav-link" to="/" exact activeClassName='active'>
                        <li>Home</li>
                    </NavLink>
                    
                    <NavLink className="nav-link" to="/add" exact activeClassName='active'>
                        <li>New Question</li>
                    </NavLink>
                    
                    <NavLink className="nav-link" to="/leaderboard" exact activeClassName='active'>
                        <li>LeaderBoard</li>
                    </NavLink>
                </ul>

                {authedUser && 
                    <div className="user-profile">
                        <img className="user-avatar" src={users[authedUser].avatarURL} alt={`avatar of ${users[authedUser].name}`}/> 
                        <h3>{users[authedUser].name}</h3> 
                        {/* <img className="user-avatar" src={sarahedo} alt={`picture of ${users[authedUser].name}`}/>  */}
                    </div>}
                
                <Link to="/login" onClick={() => this.props.dispatch(logout())}>
                    <button>LogOut<i className="fas fa-angle-double-left"></i></button>
                </Link>
            </nav>
        )
    }
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        authedUser,
        users,
    }
}

export default connect(mapStateToProps)(Nav)