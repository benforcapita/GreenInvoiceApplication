<template>
  <div id="app">
      <appHeader></appHeader>
       <router-view/>
     <appFooter></appFooter>
  </div>
</template>

<script>
    import appHeader from "./components/home-partial/appHeader.vue";
    import appFooter from "./components/home-partial/appFooter.vue";
    export default{
         components: {
           appHeader,appFooter,
         },
    }
</script>

