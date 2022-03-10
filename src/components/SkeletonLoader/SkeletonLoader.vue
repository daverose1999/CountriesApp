<template>
  <section class="container" v-show="loading">
    <!--  -->
    <article class="card">
      <figure>
        <p></p>
      </figure>
      <header>
        <p class="heading"></p>
        <p class="body"></p>
        <p class="body"></p>
        <p class="body"></p>
      </header>
    </article>
  </section>
</template>

<script>
import skeletonloader from "./skeletonloader";

export default skeletonloader;
</script>

<style lang="scss" src="./skeletonloader.scss" scoped></style>
