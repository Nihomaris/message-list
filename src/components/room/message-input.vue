<template>
  <div class="message-input">
      <label for="message-textfield" class="message-input__textfield">
          <textarea v-model="text" :disabled="isSending" id="message-textfield" class="message-input__input" type="text" placeholder="Введите текст..." />
      </label>
      <button :disabled="isSending" @click="sendMessage(text)" class="message-input__send">Ok</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            text: ''
        }
    },
    computed: {
        ...mapGetters(['isSending'])
    },
    methods: {
        ...mapActions(['sendMessage'])
    }
}
</script>

<style lang="scss" scoped>
    .message-input {
        display: flex;
        max-height: 100%;

         &__textfield {
            flex-grow: 1;
            padding: 33px 30px;

            &::-webkit-scrollbar {
                width: 7px;
                height: 7px;
                background-color: #F5F5F5;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                background-color: #555;
            }

            &::-webkit-scrollbar-track {
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                border-radius: 10px;
                background-color: #F5F5F5;
            }
        }

        &__input {
            width: 100%;
            height: auto;
            resize: none;
            border: none;
            outline: none;
            font-family: TT Norms;
            font-size: 14px;
            line-height: 20px;
            color: #2e3a46;

            &::placeholder {
                color: #7D8790;
            }
        }

        &__send {
            width: 80px;
            background: #398BFF;
            border: none;
            color: #ffffff;
            cursor: pointer;
        }
    }
</style>