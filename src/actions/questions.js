import { 
    _getQuestions, 
    _saveQuestion, 
    _saveQuestionAnswer, 
} from '../_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export const receiveInitialQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export const saveQuestion = (question) => {
    return {
        type: SAVE_QUESTION,
        question,
    }
}

export const saveAnswer = (user, qid, answer) => {
    return {
        type: SAVE_ANSWER,
        user,
        qid,
        answer,
    }
}

export function handleGetInitialQuestions() {
    return (dispatch) => {
        return _getQuestions()
            .then(questions => {
                dispatch(receiveInitialQuestions(questions))
            })
    }
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const author = authedUser
        return _saveQuestion({ optionOneText, optionTwoText, author })
            .then(formattedQuestion => {
                dispatch(saveQuestion(formattedQuestion))
            })
    }
}

export function handleSaveAnswer(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        // dispatch(saveAnswer(authedUser, qid, answer))
        return _saveQuestionAnswer({ authedUser, qid, answer })
            .then(() => dispatch(saveAnswer(authedUser, qid, answer)))
            .catch((e) => {
                console.warn("Error in handleSaveAnswer: ", e)
            })
    }
}