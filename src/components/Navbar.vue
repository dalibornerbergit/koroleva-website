<template name="component-name">
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="/">KOROLEVA</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#onama">O nama</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#galerija">Galerija</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skupine">Skupine</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#kontakt">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  install() {
    this.data = {
      title: "omi"
    };
  }
};
</script>

<style scoped>
nav {
  min-height: 8vh;
}

button:focus {
  outline: 0;
}
</style>