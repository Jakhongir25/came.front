<template>
    <section id="team">
        <div class="container">
            <div class="row">
                <div class="col-12 intro text-center">
                    <h6>Our Team</h6>
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard
                        dummy text ever since the 1500s</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="team-member">
                        <div class="img-wrapper">
                            <img src="../assets/img/team.jpg" alt="">
                            <div class="overlay"></div>
                            <div class="social-links">
                                <a href="#"><i class='bx bxl-facebook'></i></a>
                                <a href="#"><i class='bx bxl-linkedin'></i></a>
                                <a href="#"><i class='bx bxl-twitter'></i></a>
                                <a href="#"><i class='bx bxl-youtube'></i></a>
                            </div>
                        </div>
                        <div class="content">
                            <h5>Mahammatjonov. J</h5>
                            <p>Lorem Ipsum is simply</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <div class="img-wrapper">
                            <img src="../assets/img/team1.jpg" alt="">
                            <div class="overlay"></div>
                            <div class="social-links">
                                <a href="#"><i class='bx bxl-facebook'></i></a>
                                <a href="#"><i class='bx bxl-linkedin'></i></a>
                                <a href="#"><i class='bx bxl-twitter'></i></a>
                                <a href="#"><i class='bx bxl-youtube'></i></a>
                            </div>
                        </div>
                        <div class="content">
                            <h5>Qosimov. B</h5>
                            <p>Lorem Ipsum is simply</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <div class="img-wrapper">
                            <img src="../assets/img/team2.jpg" alt="">
                            <div class="overlay"></div>
                            <div class="social-links">
                                <a href="#"><i class='bx bxl-facebook'></i></a>
                                <a href="#"><i class='bx bxl-linkedin'></i></a>
                                <a href="#"><i class='bx bxl-twitter'></i></a>
                                <a href="#"><i class='bx bxl-youtube'></i></a>
                            </div>
                        </div>
                        <div class="content">
                            <h5>Bekjonova. M</h5>
                            <p>Lorem Ipsum is simply</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <div class="img-wrapper">
                            <img src="../assets/img/team3.jpg" alt="">
                            <div class="overlay"></div>
                            <div class="social-links">
                                <a href="#"><i class='bx bxl-facebook'></i></a>
                                <a href="#"><i class='bx bxl-linkedin'></i></a>
                                <a href="#"><i class='bx bxl-twitter'></i></a>
                                <a href="#"><i class='bx bxl-youtube'></i></a>
                            </div>
                        </div>
                        <div class="content">
                            <h5>Odilov. A</h5>
                            <p>Lorem Ipsum is simply</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <div class="img-wrapper">
                            <img src="../assets/img/team4.jpg" alt="">
                            <div class="overlay"></div>
                            <div class="social-links">
                                <a href="#"><i class='bx bxl-facebook'></i></a>
                                <a href="#"><i class='bx bxl-linkedin'></i></a>
                                <a href="#"><i class='bx bxl-twitter'></i></a>
                                <a href="#"><i class='bx bxl-youtube'></i></a>
                            </div>
                        </div>
                        <div class="content">
                            <h5>Gayratova. G</h5>
                            <p>Lorem Ipsum is simply</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <div class="img-wrapper">
                            <img src="../assets/img/team5.jpg" alt="">
                            <div class="overlay"></div>
                            <div class="social-links">
                                <a href="#"><i class='bx bxl-facebook'></i></a>
                                <a href="#"><i class='bx bxl-linkedin'></i></a>
                                <a href="#"><i class='bx bxl-twitter'></i></a>
                                <a href="#"><i class='bx bxl-youtube'></i></a>
                            </div>
                        </div>
                        <div class="content">
                            <h5>Tolipov. I</h5>
                            <p>Lorem Ipsum is simply</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TeamPage',
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

/* Team */
.team-member {
    text-align: center;
}
.team-member .img-wrapper {
    position: relative;
    overflow: hidden;
    
}

.team-member .overlay {
    position: absolute;
    top: -10%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(24, 54, 115, 0.8);
    transition: all 0.4s ease;
    opacity: 0;
}

.team-member .social-links {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
    opacity: 0;
}

.team-member:hover .overlay {
    opacity: 1;
    top: 0;
}

.team-member:hover .social-links {
    opacity: 1;
    top: 50%;
}

.team-member h5 {
    margin-top: 24px;
}
</style>