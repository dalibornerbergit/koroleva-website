<template>
  <div class="container-fluid py-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 class="m-0" data-aos="flip-left" data-aos-duration="1000">{{msg}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "you should dance with us"
    };
  }
};
</script>

<style scoped>
.container-fluid {
  background-color: rgba(255, 179, 171, 0.6);
  font-family: "Great Vibes", cursive;
}
</style>