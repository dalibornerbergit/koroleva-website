<template>
  <div id="app">
    <Navbar />
    <router-view name="landing"></router-view>
    <router-view name="slogan"></router-view>
    <router-view name="aboutus"></router-view>
    <router-view name="gallery"></router-view>
    <router-view name="groups"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    /* eslint-disable vue/no-unused-components */
    Navbar
  }
};
</script>

<style>
html {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Montserrat";
  font-size: 18px;
  background: #ada996; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
