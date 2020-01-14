<template>
  <div class="message-counter">
      <div class="message-counter__title">Сообщения</div>
      <div class="message-counter__value">{{countMessages}}</div>
  </div>
</template>

<script>
export default {
    props: {
        countMessages: Number
    }
}
</script>

<style lang="scss" scoped>
    .message-counter {
        display: flex;
        align-items: center;
        font-family: TT Norms;
        font-size: 14px;
        line-height: 20px;
        cursor: default;
        padding: 24px 20px;

        &__title {
            color: #656B77;
        }

        &__value {
            margin-left: 10px;
            color: #D2D8DE;
        }
    }
</style>