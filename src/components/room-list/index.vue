<template>
  <div class="room-list">
      <div class="room-list__header">
          <Header />
      </div>
      <div class="room-list__body">
          <RoomBlock v-for="(room, index) in rooms" 
                     :key="index"  
                     :index="index"
                     :room="room"
                     :activeRoomId="activeRoomId"
                     :openRoom="openRoom" />
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from './header'
import RoomBlock from './room-block'

export default {
    components: {
        Header,
        RoomBlock
    },
    methods: {
        ...mapActions(['openRoom'])
    },
    computed: {
        ...mapGetters(['rooms', 'activeRoomId'])
    }
}
</script>

<style lang="scss" scoped>
    .room-list {
        background: #F3F6F8;
    }
</style>