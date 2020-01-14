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
                     :changeActiveRoom="changeActiveRoom" />
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
    mounted() {
        this.setActiveRoom()
    },
    methods: {
        ...mapActions(['changeActiveRoom']),

        setActiveRoom() {
            const { params: { id: id } } = this.$route;
            this.changeActiveRoom(+id)
        }
    },
    computed: {
        ...mapGetters(['rooms', 'activeRoomId'])
    }
}
</script>

<style lang="scss" scoped>
@import '../../mixins/css/mixins.scss';

    .room-list {
        background: #F3F6F8;

        &__header {}

        &__body {
            @include scroll();
        }
    }
</style>