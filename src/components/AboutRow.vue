<template>
    <section id="about">
        <div class="container">
            <div class="row">
                <div class="col-12 intro text-center">
                    <h6>About Us</h6>
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard
                        dummy text ever since the 1500s</p>
                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-5">
                    <div class="row">
                        <div class="col-12 info-box mt-4">
                            <img src="../assets/img/about1.jpg" alt="medical-history">
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div class="col-12 info-box mt-4">
                            <img src="../assets/img/about2.jpg" alt="medical-history">
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div class="col-12 info-box mt-4">
                            <img src="../assets/img/about3.jpg" alt="medical-history">
                            <div>
                                <h5>Lorem Ipsum</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 info-box1 g-5">
                    <img src="../assets/img/about4.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutRow',
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
/* BTN */
.btn {
    padding: 9px 24px;
    font-weight: 500;
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
/* INFOBOX */
.info-box {
    display: flex;
    align-items: center;
}

.info-box img {
    margin-right: 18px;
    max-width: 140px;
    box-shadow: -10px -10px 0 #427883;
    border-radius: 50px;
}

.info-box1 img {
    margin-right: 18px;
    box-shadow: -10px -10px 0 #427883;
    border-radius: 100px;
    margin-left: 15px;
}
</style>