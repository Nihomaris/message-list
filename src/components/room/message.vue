<template>
    <div class="message message_incoming">
        <div class="message__text-block">
            {{message.text}}
        </div>
        <div class="message__info-block">
            <div class="message__author">{{message.author}}</div>
            <div class="message__date">{{message.created}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: Object
    }
}
</script>

<style lang="scss" scoped>
    .message {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 20px 16px 0px 39px;
        font-family: TT Norms;
        font-weight: normal;
 
        &_incoming {}

        &__text-block {
            max-width: 380px;
            padding: 18px 26px;
            background: #E9F5F4;
            border-radius: 8px 8px 0px 8px;
            font-size: 14px;
            line-height: 20px;
            color: #475453;
        }
        &__info-block {
            display: flex;
            align-items: center;
        }
        &__author {
            font-size: 13px;
            line-height: 18px;
            color: #000000;
        }
        &__date {
            font-size: 10px;
            line-height: 14px;
            color: #B7C0C8;
        }
    }
</style>