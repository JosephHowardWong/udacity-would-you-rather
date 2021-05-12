import { _getUsers } from '../_DATA'

export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveInitialUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function handleGetInitialUsers() {
    return (dispatch) => {
        return _getUsers()
            .then(users => {
                dispatch(receiveInitialUsers(users))
            })
    }
}

