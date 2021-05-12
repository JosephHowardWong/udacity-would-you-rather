import { RECEIVE_USERS } from '../actions/users'
import { SAVE_QUESTION, SAVE_ANSWER } from '../actions/questions'

export default function users(state = {}, action) {
    switch(action.type) {

        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }

        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.author]: { ...state[action.question.author],
                    questions: [...state[action.question.author].questions, action.question.id]
                }
            }

        case SAVE_ANSWER:
            return {
                ...state,
                [action.user]: {...state[action.user],
                    answers: {...state[action.user].answers, [action.qid] : action.answer }
                }
            }

        default:
            return state
    }
}

