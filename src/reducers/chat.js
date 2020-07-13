let INITIAL_STATE = {
  messages: [],
};

function chat(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    // case "SEND_MESSAGE":
    //   return { ...state, message: payload };
    case "SAVE_MESSAGE":
      return { ...state, messages: [...state.messages, payload] };
    default:
      return state;
  }
}

export default chat;
