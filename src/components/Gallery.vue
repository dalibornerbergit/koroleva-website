<template>
  <div class="container-fluid py-4" id="galerija">
    <div class="row d-flex justify-content-center text-center">
      <div class="container">
        <h1>Galerija</h1>
        <hr />
      </div>
      <div class="col-lg-8 p-0" data-aos="flip-left" data-aos-duration="1500">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <picture>
                <img src="../assets/img/carousel/skokstr.jpg" class="d-block w-100" alt="..." />
              </picture>
            </div>
            <div class="carousel-item">
              <img src="../assets/img/carousel/cstr.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/img/carousel/moststr.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  max-height: 100vh;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
</style>