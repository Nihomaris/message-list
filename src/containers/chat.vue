<template>
    <div class="chat">
        <div class="chat__side">
            <room-list />
        </div>
        <div class="chat__room">
            <!-- <div>...Выберите чат</div> -->
            <router-view />
        </div>
    </div>
</template>

<script>
import RoomList from '../components/room-list'

export default {
    components: {
        RoomList
    },
}
</script>

<style lang="scss" scoped>
    .chat {
        display: flex;

        &__side {
            max-width: 300px;
        }

        &__room {
            width: 100%;
        }

    }
</style>