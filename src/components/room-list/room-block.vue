<template>
  <div :class="['room-block',  {'room-block_active': activeRoomId === room.id }]" @click="openRoom(room.id)">
      <div class="room-block__title">{{ room.subject }}</div>
      <div class="room-block__date">{{ room.created }}</div>
      <div class="room-block__preview">{{ room.parts[0].text }}</div>
  </div>
</template>

<script>
export default {
    props: {
        index: Number,
        room: Object,
        activeRoomId: Number,
        openRoom: Function
    }
}
</script>

<style  lang="scss" scoped>
    .room-block {
        padding: 21px 23px;
        cursor: pointer;
        font-family: TT Norms;
        border-top: 1px solid #E9EDF2;
        transition: all 0.3s ease-in-out;

        &:hover {
            background: #FFFFFF;
        }

        &:last-child {
            border-bottom: 1px solid #E9EDF2;
        }

        &_active {
            background: #FFFFFF;
            border-left: 2px solid #398BFF;
            cursor: default;
        }

        &__title {
            font-size: 14px;
            line-height: 20px;
            color: #35383D;
        }

        &__date {
            font-size: 10px;
            line-height: 14px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #B7C0C8;
        }

        &__preview {
            font-size: 13px;
            line-height: 18px;
            color: #7D8790;
        }
    }
</style>