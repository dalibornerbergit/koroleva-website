<template>
  <div class="container-fluid py-4" id="skupine">
    <div class="row text-center">
      <div class="container">
        <h1>Skupine</h1>
        <button @click="show()" class="button">{{msg}}</button>
        <hr />
      </div>

      <!-- Icons -->
      <div class="container">
        <div class="row">
          <div class="col-md-4" data-aos="zoom-in-up" data-aos-duration="2100">
            <img @click="show()" src="../assets/img/skupine/giraffe.png" alt />
            <transition name="slide-fade">
              <div v-show="showData" class="info mt-2 py-3">
                <h4>
                  <strong>Žirafe</strong>
                </h4>
                <h4>
                  Uzrast:
                  <strong>13+</strong>
                </h4>
                <hr />
                <h4>Termini treninga</h4>
                <p class="m-0">Utorak: 20 - 21h</p>
                <p class="m-0">Četvrtak: 20 - 21h</p>
                <p class="m-0">+</p>
                <p class="m-0">
                  Dodatni treninzi u
                  <br />dogovorenom terminu.
                </p>
              </div>
            </transition>
          </div>
          <div class="col-md-4" data-aos="zoom-in-up" data-aos-duration="2100">
            <img @click="show()" src="../assets/img/skupine/seal.png" alt />

            <transition name="slide-fade">
              <div v-show="showData" class="info mt-2 py-3">
                <h4>
                  <strong>Foke</strong>
                </h4>
                <h4>
                  Uzrast:
                  <strong>13+</strong>
                </h4>
                <hr />
                <h4>Termini treninga</h4>
                <p class="m-0">Utorak: 20 - 21h</p>
                <p class="m-0">Četvrtak: 20 - 21h</p>
                <p class="m-0">+</p>
                <p class="m-0">
                  Dodatni treninzi u
                  <br />dogovorenom terminu.
                </p>
              </div>
            </transition>
          </div>
          <div class="col-md-4" data-aos="zoom-in-up" data-aos-duration="2100">
            <img @click="show()" src="../assets/img/skupine/penguin.png" alt />

            <transition name="slide-fade">
              <div v-show="showData" class="info mt-2 py-3">
                <h4>
                  <strong>Pingvini</strong>
                </h4>
                <h4>
                  Uzrast:
                  <strong>10 - 12.5</strong>
                </h4>
                <hr />
                <h4>Termini treninga</h4>
                <p class="m-0">Utorak: 19 - 20h</p>
                <p class="m-0">Četvrtak: 19 - 20h</p>
                <p class="m-0">+</p>
                <p class="m-0">
                  Dodatni treninzi u
                  <br />dogovorenom terminu.
                </p>
              </div>
            </transition>
          </div>
          <div class="col-md-4" data-aos="zoom-in-up" data-aos-duration="2100">
            <img @click="show()" src="../assets/img/skupine/squirrel.png" alt />

            <transition name="slide-fade">
              <div v-show="showData" class="info mt-2 py-3">
                <h4>
                  <strong>Vjeverice</strong>
                </h4>
                <h4>
                  Uzrast:
                  <strong>6 - 9.5</strong>
                </h4>
                <hr />
                <h4>Termini treninga</h4>
                <p class="m-0">Ponedjeljak: 18:30 - 19:30h</p>
                <p class="m-0">Srijeda: 18:30 - 19:30h</p>
                <p class="m-0">+</p>
                <p class="m-0">
                  Dodatni treninzi u
                  <br />dogovorenom terminu.
                </p>
              </div>
            </transition>
          </div>
          <div class="col-md-4" data-aos="zoom-in-up" data-aos-duration="2100">
            <img @click="show()" src="../assets/img/skupine/koala.png" alt />

            <transition name="slide-fade">
              <div v-show="showData" class="info mt-2 py-3">
                <h4>
                  <strong>Koale</strong>
                </h4>
                <h4>
                  Uzrast:
                  <strong>6 - 9.5</strong>
                </h4>
                <hr />
                <h4>Termini treninga</h4>
                <p class="m-0">Ponedjeljak: 18:30 - 19:30h</p>
                <p class="m-0">Srijeda: 18:30 - 19:30h</p>
                <p class="m-0">+</p>
                <p class="m-0">
                  Dodatni treninzi u
                  <br />dogovorenom terminu.
                </p>
              </div>
            </transition>
          </div>
          <div class="col-md-4" data-aos="zoom-in-up" data-aos-duration="2100">
            <img @click="show()" src="../assets/img/skupine/duck.png" alt />

            <transition name="slide-fade">
              <div v-show="showData" class="info mt-2 py-3">
                <h4>
                  <strong>Pačići</strong>
                </h4>
                <h4>
                  Uzrast:
                  <strong>3 - 5.5</strong>
                </h4>
                <hr />
                <h4>Termini treninga</h4>
                <p class="m-0">Ponedjeljak: 17:30 - 18:25h</p>
                <p class="m-0">Srijeda: 17:30 - 18:25h</p>
                <p class="m-0">+</p>
                <p class="m-0">
                  Dodatni treninzi u
                  <br />dogovorenom terminu.
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showData: false,
      msg: "Prikaži više"
    };
  },
  methods: {
    show() {
      if (!this.showData) {
        this.showData = !this.showData;

        this.msg = "Prikaži manje";
      } else {
        this.showData = !this.showData;

        this.msg = "Prikaži više";
      }
    }
  }
};
</script>

<style scoped>
img {
  max-width: 200px;
  max-height: 200px;
  background-color: rgba(255, 179, 171, 0.6);
  border-radius: 45px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0);
}

img:hover {
  border-color: #000;
  cursor: pointer;
  transition: 1s;
}

.button {
  display: inline-block;
  padding: 12px 35px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #212529;
  background-color: rgb(255, 179, 171);
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px #999;
}

.button:hover {
  background-color: rgba(255, 179, 171, 0.8);
}

.button:active {
  background-color: rgb(255, 179, 171);
  box-shadow: 0 2px #999;
  transform: translateY(4px);
}

.info {
  background-color: rgba(255, 179, 171, 0.6);
  border-radius: 45px;
}

.col-md-4 {
  padding: 1.5em;
  text-align: center;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.7s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>