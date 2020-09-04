<template>
  <div class="firstcarousel">
    <b-carousel indicators>
      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block w-100" height="960" src="~@/assets/download.png" />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block w-100" height="960" src="~@/assets/download.png" />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block w-100" height="960" src="~@/assets/download.png" />
        </template>
      </b-carousel-slide>
      <div>
        <div class="header container d-flex align-items-center justify-content-center">
          <a class="col-lg-2 col-2 d-flex justify-content-end">Shop</a>
          <a class="col-lg-3 col-2 d-flex justify-content-start">Plan My Kitchen</a>
          <img
            class="col-lg-1 col-2 d-flex justify-content-center"
            src="~@/assets/download (7).png"
          />
          <a class="col-lg-3 col-2 d-flex justify-content-end">About Us</a>
          <a class="col-lg-1 col-2 d-flex justify-content-start">Gallery</a>
          <a class="col-lg-2 col-2 box1 d-flex align-items-center justify-content-center">My ORder</a>
        </div>
        <hr class="col-md-10 col-12" />
        <div class="text1 d-flex align-items-end justify-content-center text-center">
          <a>Design and order your new kitchen online today</a>
        </div>
        <div
          class="text2 container col-lg-6 col-10 d-flex align-items-center justify-content-center text-center"
        >
          <h1>Bespoke & made to measure handmade kitchen design</h1>
        </div>
        <div
          class="text2 container col-lg-4 col-10 d-flex align-items-center justify-content-center text-center"
        >
          <a
            class="col-lg-4 col-md-5 col-4 mt-3 box2 d-flex align-items-center justify-content-center"
          >Order Now</a>
        </div>
      </div>
    </b-carousel>
  </div>
</template>

<script>
</script>

<style>
.firstcarousel li {
  background-color: white !important;
}
.firstcarousel .active {
  background-color: #d4b254 !important;
}
.firstcarousel {
  left: 0px;
  top: 0px;
  z-index: -1;
}
.w-100 {
  overflow: hidden;
  object-fit: cover;
}
.text2 h1 {
  font-family: Helvetica, sans-serif;
  color: #ffffff !important;
  font-size: 52px;
  font-weight: bold;
}
.header {
  height: 111px;
}
.box1 {
  height: 50px;
  border: 1px solid white;
  border-radius: 25px;
}
hr {
  height: 1px;
  background-color: white;
  opacity: 0.3;
  padding-top: 0px !important;
  margin-top: 0px !important;
}
.text1 {
  height: 230px;
}
.box2 {
  height: 60px;
  border: 1px solid #d4b254;
  background-color: #d4b254;
  border-radius: 40px;
}
.text1 a,
.header a {
  font-size: 13px;
  color: #ffffff !important;
  font-family: "Roboto", sans-serif;
}
a {
  font-size: 15px;
  color: #ffffff !important;
  font-family: "Roboto", sans-serif;
  position: relative;
}
</style>