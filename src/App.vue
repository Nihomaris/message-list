<template>
  <div id="app">
    <Chat /> 
  </div>
</template>

<script>
import Chat from './containers/chat'

export default {
  name: 'app',
  components: {
    Chat
  },
}
</script>

<style lang="scss">
@import 'mixins/css/fonts.scss';
</style>
