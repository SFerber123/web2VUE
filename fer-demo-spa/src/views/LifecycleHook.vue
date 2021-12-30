<template>
  <div>
        <p>Lifecycle hook primjer</p>
       
        <p>Data: {{startTime}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      startTime: null,
    }
  },
  mounted() {
       window.setInterval(()=>{
         this.startTime=new Date().toLocaleTimeString("hr-HR");
       },1000);
  },
  created(){

  },
}
</script>


