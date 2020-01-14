import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

const state = {
    activeRoomId: 1,
    messages: null,
    messageText: '',
    isLoading: false,
    isSending: false,
    rooms: [
        {
          id: 1,
          subject: 'Простой запрос',
          created: '2019-08-01 23:59',
        },
        {
          id: 2,
          subject: 'Вопрос по домену',
          created: '2016-03-02 14:19',
        },
        {
          id: 3,
          subject: 'Старый друг',
          created: '2022-09-02 01:19',
        }
    ]
};

export default {
    state,
    getters,
    mutations,
    actions
}