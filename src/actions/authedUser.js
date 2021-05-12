export const LOGOUT = 'LOGOUT'
export const LOGIN = 'LOGIN'

export const login = (user) => {
    return {
        type: LOGIN,
        user,
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}