<template>
    <div class="chat">
        <div class="chat__side">
            <room-list />
        </div>
        <div class="chat__room">
            <router-view v-if="activeRoom" />
            <div class="chat__notif" v-else>...Выберите чат</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RoomList from '../components/room-list'

export default {
    components: {
        RoomList
    },
    computed: {
        ...mapGetters(['activeRoom']),
    },
}
</script>

<style lang="scss" scoped>
    .chat {
        display: flex;
        height: 100vh;
        min-width: 768px;

        &__side {
            width: 400px;
        }

        &__room {
            width: 100%;
        }

        &__notif {
            font-family: TT Norms;
            font-weight: bold;
        }
    }
</style>