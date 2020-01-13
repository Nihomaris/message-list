<template>
  <div class="message-counter">
      <div class="message-counter__title">Сообщения</div>
      <div class="message-counter__value">151</div>
  </div>
</template>

<script>
export default {

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

        &__title {
            color: #656B77;
        }

        &__value {
            color: #D2D8DE;
        }
    }
</style>