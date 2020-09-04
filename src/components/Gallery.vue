<template>
  <div class="galleryandfooter">
    <div class="gallery">
      <h1 class="mb-4">Customer Gallery</h1>
      <div class="container">
        <img class="col-3 mb-3" src="~@/assets/download (10).png" />
        <img class="col-3 mb-3" src="~@/assets/download (3).png" />
        <img class="col-3 mb-3" src="~@/assets/download (4).png" />
        <img class="col-3 mb-3" src="~@/assets/download (5).png" />
      </div>
      <div class="container d-flex align-items-center justify-content-center">
        <a
          class="col-lg-2 col-md-3 col-6 mt-3 box3 d-flex align-items-center justify-content-center"
        >View More</a>
      </div>
      <div class="footer">
        <img
          class="py-4 container d-flex align-items-center justify-content-center"
          src="~@/assets/download (14).png"
        />
        <div class="container d-flex align-items-center justify-content-center">
          <h4 class="col-lg-3 mb-4">About</h4>
          <h4 class="col-lg-3 mb-4">Service</h4>
          <h4 class="col-lg-3 mb-4">Info</h4>
          <h4 class="col-lg-3 mb-4">Follow</h4>
        </div>
        <div class="container mb-4 d-flex justify-content-center">
          <div class="container col-lg-3 mt-3">
            <footertext>Shop</footertext>
            <br />
            <footertext>Plan My Kitchen</footertext>
            <br />
            <footertext>About Us</footertext>
            <br />
            <footertext>Gallery</footertext>
          </div>
          <div class="container col-lg-3 mt-3">
            <footertext>FAQ</footertext>
            <br />
            <footertext>Contact</footertext>
            <br />
            <footertext>How toBuy</footertext>
            <br />
            <footertext>Downloads</footertext>
          </div>
          <div class="container col-lg-3 mt-3">
            <footertext>Delivery</footertext>
            <br />
            <footertext>Terms</footertext>
            <br />
            <footertext>Privacy</footertext>
          </div>
          <div class="container logo col-lg-3 mt-3">
            <img class="mr-2" scr="~@/assets/download (11).png" />
            <img class="mr-2" scr="~@/assets/download (12).png" />
            <img class="mr-2" scr="~@/assets/download (13).png" />
          </div>
        </div>
        <div class="container py-4 col-lg-3 col-md-5 col-12 text-center">
          <copyright>
            Copyright Online MTC Home Kitchens 2018 - All rights reserved.
            Responsive website design, Development & Hosting by mtc.
          </copyright>
        </div>
        <img
          class="py-4 container d-flex align-items-center justify-content-center"
          src="~@/assets/download (15).png"
        />
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.gallery h1 {
  padding-top: 50px;
  text-align: center;
  font-size: 32px;
  color: #222222;
  font-weight: bold;
  font-family: Helvetica, sans-serif;
}
.gallery {
  background-color: rgba(255, 255, 255, 0.9);
}
.footer {
  background-color: rgba(0, 0, 0, 0.7);
}
.footer h4 {
  color: #ffffff !important;
  font-size: 24px;
  font-weight: bold;
  font-family: Helvetica, sans-serif;
}
.logo img {
  width: 41px;
  height: 41px;
}
footertext {
  font-size: 13px;
  opacity: 0.8;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
}
copyright {
  font-size: 13px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  opacity: 0.5;
}
.box3 {
  height: 60px;
  border: 1px solid #d4b254;
  background-color: #d4b254;
  border-radius: 40px;
  margin-bottom: 80px !important;
}
.galleryandfooter {
  background-image: url("../assets/download(6).png");
}
</style>