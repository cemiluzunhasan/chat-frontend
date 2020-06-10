<template>
  <div class="MessageInput">
    <textarea class="MessageText" name="message" placeholder="Enter your message" />
    <button class="SendButton">
      <img src="@/assets/icons/send.svg" />
    </button>
  </div>
</template>

<script>

export default {
  name: 'message-input'
}
</script>

<style lang="less" scoped>
.MessageInput {
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  box-shadow: 0px -2px 57px -19px rgba(0,0,0,0.58);
  flex: 1;
  .MessageText {
    border: none;
    width: 85% !important;
    height: 100% !important;
    outline: none;
    font-size: 16px;
    padding: 0;
    padding-left: 20px;
    padding-top: 20px;
    box-sizing: border-box;
    font-family: Helvetica;
    resize: none;
    overflow: auto;
  }

  .SendButton {
    position: absolute;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 10px;
    top: 20%;
    background: linear-gradient(to right, #000046, #1cb5e0);
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    word-break: break-all;
    img {
      width: 65%;
    }
  }
}
</style>
