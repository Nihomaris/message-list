<template>
  <div class="room">
    <div class="room__window">
      <template v-if="messages && !isLoading">
        <Message v-for="(message, index) in reverseMessages" 
                :key="index" 
                :index="index"
                :message="message"  />
      </template>
      <div v-else>...Загрузка</div>
    </div>
    <div class="room__chat-input">
      <MessageInput />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Message from './message'
import MessageInput from './message-input'

export default {
  components: {
    Message,
    MessageInput
  },
  computed: {
    ...mapGetters(['activeRoom', 'isLoading', 'messages']),

    reverseMessages() {
      return this.messages.slice().reverse()
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../mixins/css/mixins.scss';

  .room {

    &__window {
        display: flex;
        flex-direction: column-reverse;
        overflow-y: auto;
        height: 300px;
        max-height: 300px;

        @include scroll();
    }

    &__chat-input {
      height: 80px;
      margin-top: 44px;
      border-top: 1px solid #E9EDF2;
    }
  }
</style>