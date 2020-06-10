<template>
  <div id="app">
    <div class="content">
      <chat-header></chat-header>
      <messages></messages>
      <message-input></message-input>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ChatHeader from '@/components/ChatHeader';
import Messages from '@/components/Messages';
import MessageInput from '@/components/MessageInput';

export default {
  name: 'App',
  components: {
    ChatHeader,
    Messages,
    MessageInput
  },
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted() {
    const name = prompt('Enter your username');
    if (name) {
      this.$store.dispatch('setUser', { name });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
</style>
