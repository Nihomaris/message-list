<template>
  <div class="room">
    <div class="room__window">
      <template v-if="messages && !isLoading">
        <Message v-for="(message, index) in reverseMessages" 
                :key="index" 
                :index="index"
                :message="message"  />
      </template>
      <ui-loader width="50" v-else />
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
    height: 100%;
    display: flex;
    flex-direction: column;

    &__window {
        display: flex;
        flex-direction: column-reverse;
        overflow-y: auto;
        height: 100%;
        padding-bottom: 44px;

        @include scroll();
    }

    &__chat-input {
      height: 80px;
      margin-top: auto;
      border-top: 1px solid #E9EDF2;
    }
  }
</style>