import React from "react";
import { CarouselLayout } from "./styles";

function Carousel() {
    return(
        <CarouselLayout>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-interval="2">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://www.mondosonoro.com/wp-content/uploads/2020/04/oasis-promo.jpg" class="d-block w-100" alt="img1"/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://i2.wp.com/www.scienceofnoise.net/wp-content/uploads/2018/05/guns.jpg" class="d-block w-100" alt="img2"/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Beatles_ad_1965_just_the_beatles_crop.jpg" class="d-block w-100" alt="img3"/>
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
        </CarouselLayout>
    )
}

export default Carousel;