<style scoped>
.scoped {
  color: red;
}
</style>

<template>
  <div class="scoped">{{tekst}}</div>
  <button v-on:click="$emit('accepted')">OK</button>
</template>
<script>
export default {
  name: "Scoped",
  props: {
      tekst: String
  },
  emits: ['accepted']
};
</script>