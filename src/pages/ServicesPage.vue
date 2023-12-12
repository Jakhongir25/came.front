<template>
    <section id="service">
        <div class="container">
            <div class="row">
                <div class="col-12 intro text-center">
                    <h6>Our Services</h6>
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s</p>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-sm-6">
                    <div class="service-box">
                        <img src="../assets/img/service1.jpg" alt="">
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="service-box">
                        <img src="../assets/img/service2.jpg" alt="">
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard
                            dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="service-box">
                        <img src="../assets/img/service3.jpg" alt="">
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard
                            dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="service-box">
                        <img src="../assets/img/service4.jpg" alt="">
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard
                            dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="service-box">
                        <img src="../assets/img/service5.jpg" alt="">
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard
                            dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="service-box">
                        <img src="../assets/img/service6.jpg" alt="">
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard
                            dummy text ever since the 1500s</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ServicesPage',
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
/* Services*/

.service-box img {
    
    margin-right: 18px;
    max-width: 140px;
    box-shadow: -5px -5px 0 #427883;
    border-radius: 50px;
    width: unset;
        
}

.service-box {
    padding: 32px;
    box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.08);
    text-align: center;
}

.service-box h5 {
    margin-top: 24px;
    margin-bottom: 12px;
}
</style>