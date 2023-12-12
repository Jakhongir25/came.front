<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-touch="false">
        <div class="carousel-inner">

            <div class="carousel-item text-center bg-cover vh-100 active slide1">
                <div class="container h-100 d-flex align-items-center justify-content-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <h6 class="text-white">Lorem Ipsum</h6>
                            <h1 class="display-1 fw-bold text-white">Ipsum Lorem Ipsum Lorem Ipsum</h1>
                            <a href="#" class="btn btn-brand">Get Started</a>
                            <a href="#" class="btn btn-outline-light ma-md-3">Our Work</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item text-center bg-cover vh-100 active slide2">
                <div class="container h-100 d-flex align-items-center justify-content-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <h6 class="text-white">Lorem Ipsum Lorem</h6>
                            <h1 class="display-1 fw-bold text-white">Lorem Ipsum Ipsum</h1>
                            <router-link to="/creator" class="btn btn-brand">Creator</router-link> 
                            <router-link to="/portfolio" class="btn btn-outline-light ma-md-3">Our Work</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SliderPage',
    components: {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');

template {
    font-family: 'Barlow', sans-serif;
    line-height: 1.7;
    color: #516171;
}

h1,h2,h3,h4,h5,h6 {
    font-weight: 700 !important;
    color: #092032;
}

a {
    color: #092032;
    text-decoration: none;
    transition: all 0.4s ease;
    font-weight: 500;
}
a:hover {
    color: #427883;
}

img {
    width: 100%;
}

section {
    padding-top: 80px;
    padding-bottom: 80px;
}

.bg-cover {
    background-position: center !important;
    background-size: cover !important;
    background-position: center !important;
}

.intro {
    margin-bottom: 40px;
}

.intro h6 {
    font-weight: 400;
    color: #427883;
}

.intro p {
    max-width: 500px;
    margin: auto;
}
.btn {
    padding: 9px 24px;
    font-weight: 500;
    margin: 4px;
}

.btn-brand {
    background-color: #427883;
    color: #ffffff;
    border-color: #427883;
}

.btn-brand:hover {
    color: #ffffff;
    background-color: #23616e;
}
/* SLIDER */
.slide1 {
    background: linear-gradient(rgba(9, 32, 50, 0.4), rgba(9, 32, 50, 0.4)), url(../assets/img/slire1.jpg);
}

.slide2 {
    background: linear-gradient(rgba(9, 32, 50, 0.4), rgba(9, 32, 50, 0.4)), url(../assets/img/slide2.jpg);
}

#heroSlider h6::after,
#heroSlider h6::before {
    content: "";
    width: 40px;
    height: 4px;
    background-color: #ffffff;
    display: inline-block;
    margin: 10px;
    vertical-align: middle;
}
</style>