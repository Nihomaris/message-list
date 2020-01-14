const rooms = state => state.rooms;

const activeRoomId = state => state.activeRoomId;

const isLoading = state => state.isLoading;

const isSending = state => state.isSending;

const messages = state => state.messages;

const messageText = state => state.messageText;

const activeRoom = state => {
    return state.rooms.find(item => state.activeRoomId === item.id);
}

export {
    rooms,
    activeRoom,
    activeRoomId,
    isLoading,
    isSending,
    messages,
    messageText
}