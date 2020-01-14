<template>
  <img class="loader" src="../../../assets/loader.gif" :width="width" alt="...Загрузка">
</template>

<script>
export default {
    props: {
        width: {
            type: [String, Number],
            default: 30
        }
    }
}
</script>

<style lang="scss" scoped>
    .loader {
        margin: 0 auto;
    }
</style>