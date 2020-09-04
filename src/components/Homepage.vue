<template>
  <div class="homepage">
    <Slider :Slider="Slider" />
    <Intro :Intro="Intro" />
    <Testimonial :Testimonial="Testimonial" />
    <Gallery :Gallery="Gallery" />
  </div>
</template>

<script>
import Slider from "./Slider";
import Intro from "./Intro";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";

export default {
  name: "homepage",
  components: {
    Slider,
    Intro,
    Testimonial,
    Gallery,
  },
};
</script>

<style>
</style>
