import React from "react";

function Carousel(){
    return(
        <div className="container">
           <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://himalayaoptical.com/cdn/shop/files/Website_Banner_03.jpg?v=1723203287" class="d-block w-100" alt="wait"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.shethopticals.com/Admin/image_banner/4_Website%20Banner%20Festive%202022%20-%201.png" class="d-block w-100" alt="wait"/> 
    </div>
    <div class="carousel-item">
      <img src="https://himalayaoptical.com/cdn/shop/files/Website_Banner_02_ec4aaecc-c4fc-4067-aa23-38b95bd5f234.jpg?v=1723207473" class="d-block w-100" alt="wait"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
export default Carousel;