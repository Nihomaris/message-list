<template>
  <div class="room">
    <div class="room__window">
      <Message v-for="(message, index) in activeRoom.parts" 
              :key="index" 
              :index="index"
              :message="message"  />
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
    ...mapGetters(['activeRoom']),
  },
  mounted() {
    console.log(this.activeRoom)
  }
}
</script>

<style lang="scss" scoped>
  .room {

    &__window {
        display: flex;
        flex-direction: column-reverse;
        overflow-y: auto;
    }

    &__chat-input {
      height: 80px;
      margin-top: 44px;
      border-top: 1px solid #E9EDF2;
    }
  }
</style>