const SET_ACTIVE_ROOM = (state, id) => {
    state.activeRoomId = id;
}

const SET_MESSAGES = (state, messages) => {
    state.messages = messages;
}

const SET_LOADING = (state, status) => {
    state.isLoading = status;
}

const SET_SENDING = (state, status) => {
    state.isSending = status;
}

const PUSH_MESSAGE = (state, message) => {
    state.messages.push(message)
}

const CHANGE_MESSAGE_TEXT = (state, message) => {
    state.messageText = message;
}

export {
    SET_ACTIVE_ROOM,
    SET_MESSAGES,
    SET_LOADING,
    SET_SENDING,
    PUSH_MESSAGE,
    CHANGE_MESSAGE_TEXT
}