const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  if (action.type === 'GOOD') {
    return { ...state, good: state.good + 1 }
  } else if (action.type === 'OK') {
    return { ...state, ok: state.ok + 1 }
  } else if (action.type === 'BAD') {
    return { ...state, bad: state.bad + 1 }
  } else {
    return initialState
  }
}

export default counterReducer