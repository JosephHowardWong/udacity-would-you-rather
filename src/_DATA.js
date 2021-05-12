let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    // avatarURL: "./profilePics/sarahedo.jpg",
    avatarURL: "/static/media/sarahedo.fa3f0a5d.jpg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    // avatarURL: "./profilePics/tylermcginnis.jpg",
    avatarURL: "/static/media/tylermcginnis.1cfedc87.jpg",
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    // avatarURL: "./profilePics/johndoe.jpg",
    avatarURL: "data:image/jpeg;base64,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",
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
