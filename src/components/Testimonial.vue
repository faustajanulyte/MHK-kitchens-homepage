<template>
  <div class="secondcarousel">
    <b-carousel controls>
      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block w-100" height="600" src="~@/assets/download (8).png" />
          <div class="carousel-caption d-block py-0 px-0 mx-0">
            <div>
              <gold>What Our Customers Say</gold>
            </div>
            <div class="container col-lg-6 col-md-8 col-12 mt-2 px-0">
              <h1>Over 35 years experience designing handmade kitchens</h1>
            </div>
            <div class="container col-lg-7 col-md-10 col-12 mt-3 px-0">
              <testimonial>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</testimonial>
            </div>
            <div class="my-3">
              <grey>Jane, Dundee</grey>
            </div>
            <div class="container col-lg-4 col-10 d-flex align-items-center justify-content-center">
              <a
                class="col-lg-10 col-12 mt-3 box2 d-flex align-items-center justify-content-center"
              >Frequently Asked Questions</a>
            </div>
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block w-100" height="600" src="~@/assets/download (8).png" />
          <div class="carousel-caption d-block py-0 px-0 mx-0">
            <div>
              <gold>What Our Customers Say</gold>
            </div>
            <div class="container col-lg-6 col-md-8 col-12 mt-2 px-0">
              <h1>Over 35 years experience designing handmade kitchens</h1>
            </div>
            <div class="container col-lg-7 col-md-10 col-12 mt-3 px-0">
              <testimonial>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</testimonial>
            </div>
            <div class="my-3">
              <grey>Jane, Dundee</grey>
            </div>
            <div class="container col-lg-4 col-10 d-flex align-items-center justify-content-center">
              <a
                class="col-lg-10 col-12 mt-3 box2 d-flex align-items-center justify-content-center"
              >Frequently Asked Questions</a>
            </div>
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block w-100" height="600" src="~@/assets/download (8).png" />
          <div class="carousel-caption d-block py-0 px-0 mx-0">
            <div>
              <gold>What Our Customers Say</gold>
            </div>
            <div class="container col-lg-6 col-md-8 col-12 mt-2 px-0">
              <h1>Over 35 years experience designing handmade kitchens</h1>
            </div>
            <div class="container col-lg-7 col-md-10 col-12 mt-3 px-0">
              <testimonial>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</testimonial>
            </div>
            <div class="my-3">
              <grey>Jane, Dundee</grey>
            </div>
            <div class="container col-lg-4 col-10 d-flex align-items-center justify-content-center">
              <a
                class="col-lg-10 col-12 mt-3 box2 d-flex align-items-center justify-content-center"
              >Frequently Asked Questions</a>
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
</script>

<style>
grey {
  color: #777777;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
}
.secondcarousel h1 {
  font-family: Helvetica, sans-serif;
  color: #222222 !important;
  font-size: 32px;
  font-weight: bold;
}
testimonial {
  font-family: Helvetica, sans-serif;
  color: #777777;
  font-size: 18px;
}
.secondcarousel img {
  z-index: -1;
}
.carousel-control-next-icon {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAABGCAYAAABL/l33AAABUklEQVRoQ+3ayw0CMQwE0KQfioAGOMEdKoM7NyiAIqCfRVmkRfvJxk7ssQ9MBU8jn0aOr8dhG7vwDCGeN/vbNThI/KGSxgcsJsr7fjyF0F2+JdnDepQ32IDyBBuhvMBmKA+wRZQ1LIuyhK2irGBFlAWMhELDyCgkjIVCwdgoBKwKpQ2rRmnCmlBasGaUBkwEJQ0TQ0nCRFFSMHGUBEwF1QpTQ7XAVFG1MHVUDQyC4sJgKA4MiqLC4CgKzARVgpmh1mCmqBzMHDWFdTHs/qjUyjRLK6JpU7lZ0wy1trOaoErDLxxVAqWbg6IoICiKCoKhOCAIigtSR9WAVFG1IDVUC0gF1QoSR0mARFFSIDGUJEgEJQ1qRmmAmlBaoGqUJqgKpQ1ioxAgFgoFIqOQIBIKDSqiLECrKCtQFmUJWkRZg2YoD6ARygtoQHkC9SiX728eHwU/S6qiihKx2vUAAAAASUVORK5CYII=) !important;
}
.carousel-control-prev-icon {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAABGCAYAAABL/l33AAABW0lEQVRoQ83asQ0CMQyF4WQfhoAFqKCHyaCngwEYAvY5FNAh7rgkjmP7OVXSfXKkFL8Sg5P1vO4PIQynIYZN9GAaQcniAvULCiEeV9vLGTqpJVCaFgyVA8FQJRAEVQOZoyggUxQVZIZqAZmgWkHqKA5IFcUFqaF6QCqoXpA4SgIkipICiaEkQSIoaVA3SgPUhdICsVGaIBZKG9SMsgA1oaxAZJQliISyBlVRCFARhQJlUUjQIgoN+kN5AE1QXkBflCfQG/W47dZxCPd0GPvQZ49bPlFpHu6ub7wkT7BJyfMC+8uLHmCLzRMNy4ZYJKxYh1GwarJGwKooxDtGQlnDyChLWBPKCtaMsoCxUNowNkoT1oXSgnWjNGAiKGmYGEoSJoqSgomjJGAqqF6YGqoHporiwtRRHJgJqhVmhmqBmaKoMHMUBQZB1WAwVAkGReVgcNQc5uL727yPJdQL4hmgvgX/UoUAAAAASUVORK5CYII=) !important;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
  width: 37px !important;
  height: 70px !important;
}
.carousel-caption {
  top: 50%;
  transform: translateY(-70%);
}
</style>