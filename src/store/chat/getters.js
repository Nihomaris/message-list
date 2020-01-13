const rooms = state => state.rooms;

const activeRoomId = state => state.activeRoomId;

const activeRoom = state => {
    return state.rooms.find(item => state.activeRoomId === item.id);
}

export {
    rooms,
    activeRoom,
    activeRoomId
}