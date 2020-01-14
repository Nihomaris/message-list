const mockMassages = [
    [
        {
            id: 1,
            isUser: true,
            author: 'vasya',
            text: 'Привет, как дела?',
            created: '2019-08-01 23:59',
        },
        {
            id: 2,
            isUser: false,
            author: 'petya',
            created: '2019-08-02 01:20',
            text: 'Привет, все хорошо, спасибо!',
        },
        {
            id: 3,
            isUser: false,
            author: 'petya',
            created: '2019-08-02 05:20',
            text: 'А у тебя?',
        },
    ],
    [
        {
            id: 1,
            isUser: false,
            author: 'petr',
            created: '2019-08-06 12:20',
            text: 'Здравствуйте, тут есть кто-нибудь?',
        },
        {
            id: 2,
            isUser: true,
            author: 'vasya',
            created: '2019-08-06 12:34',
            text: 'Да, я вас слушаю!',
        },
        {
            id: 3,
            isUser: false,
            author: 'petr',
            created: '2019-08-06 12:38',
            text: 'Помогите мне настроить домен!',
        },
    ]
]
const changeActiveRoom = ({ commit }, roomId) => {
    commit('SET_ACTIVE_ROOM', roomId);
    commit('SET_LOADING', true);
    setTimeout(() => {
        commit('SET_MESSAGES', mockMassages[roomId-1]); 
        commit('SET_LOADING', false);
    }, 1000)
}

const sendMessage = ({ commit }, message) => {
    commit('SET_SENDING', true)
    setTimeout(() => {
        commit('PUSH_MESSAGE', { 
            id: 1,
            isUser: true,
            author: 'vasya',
            text: message,
            created: Date.now(), 
        })
        commit('SET_SENDING', false)
    }, 1000)
}

export {
    changeActiveRoom,
    sendMessage
}