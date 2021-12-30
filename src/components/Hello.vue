<template>
  <div class="hello">
        <p>Nova stranica</p>
        <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    msg: String,
  },
};
</script>

