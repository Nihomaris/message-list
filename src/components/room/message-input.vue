<template>
  <div class="message-input">
      <label for="message-textfield" class="message-input__textfield">
          <textarea v-model="text" :disabled="isSending" id="message-textfield" class="message-input__input" type="text" placeholder="Введите текст..." />
      </label>
      <button :disabled="isSending" @click="validateText" :class="['message-input__send', { 'message-input__send_disabled': isSending }]">
          <ui-loader v-if="isSending" width="20" />
          <img v-else src="../../assets/send.svg" />
      </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

    computed: {
        ...mapGetters(['isSending', 'messageText']),

        /**
         * v-model and vuex work together
         */
        text: {
            get() {
                return this.messageText
            },
            set(value) {
                this.changeMessageText(value);
            }
        },
    },
    methods: {
        ...mapActions(['sendMessage', 'changeMessageText']),

        validateText() {
            if(!this.text || this.text === '') return;
            
            this.sendMessage(this.text)
        }
    }
}
</script>

<style lang="scss" scoped>
    .message-input {
        display: flex;
        max-height: 100%;

         &__textfield {
            flex-grow: 1;
            display: flex;
            align-items: center;
            height: 80px;
            cursor: text;

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
            padding: 0 30px;
            box-sizing: border-box;
            resize: none;
            border: none;
            outline: none;
            font-family: TT Norms;
            font-size: 14px;
            line-height: 20px;
            color: #2e3a46;
            overflow: hidden;

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

            &_disabled {
                cursor: progress;
            }
        }
    }
</style>