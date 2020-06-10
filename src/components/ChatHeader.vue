<template>
  <div class="ChatHeader">
    <div :class="user.name ? 'OnlineCircle Online' : 'OnlineCircle Offline'" />
    <p class="InfoText" v-if="user.name">You're online as <b>{{ user.name }}</b></p>
    <p class="InfoText" v-else>You' re offline right now</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'chat-header',
  computed: {
    ...mapState([ 'user' ])
  }
}
</script>

<style lang="less" scoped>
.ChatHeader {
  display: flex;
  align-items: center;
  flex: 1;
  display: flex;
  background: linear-gradient(to right, #000046, #1cb5e0);
  padding-left: 30px;

  .OnlineCircle {
    background-color: green;
    width: 10px;
    height: 10px;
    border-radius: 50%;

    &.Online {
      background: #00ff00;
    }
    &.Offline {
      background: #ff0707;
    }
  }
  .InfoText {
    margin-left: 10px;
    color: white;
  }
}
</style>
