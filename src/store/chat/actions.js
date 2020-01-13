
const openRoom = ({ commit }, roomId) => {
    commit('SET_ACTIVE_ROOM', roomId);
}

export {
    openRoom
}