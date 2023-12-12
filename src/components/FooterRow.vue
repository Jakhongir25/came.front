<template>
    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 mx-auto">
                        <img src="../assets/img/nav.jpg" alt="">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard
                            dummy text ever since the 1500s</p>
                        <div class="social-links">
                            <a href="#"><i class='bx bxl-facebook'></i></a>
                            <a href="#"><i class='bx bxl-linkedin'></i></a>
                            <a href="#"><i class='bx bxl-twitter'></i></a>
                            <a href="#"><i class='bx bxl-youtube'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p class="mb-0">Copyright@2023. All right Reserved</p>
            </div>
        </div>
    </footer>
</template>
 
<script>
export default {
    name: 'FooterRow',
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
/*Footer*/
.footer-top img {
    border-radius: 50px;
    max-width: 80px;
    text-align: center;
    display: inline-block;
}

footer {
    padding-top: 80px;
    background: linear-gradient(rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86)), url(../assets/img/slire1.jpg);
    color: #ffffff;
    text-align: center;
    padding-bottom: 20px;
}

.footer-top {
    margin-bottom: 40px;
}

.footer-bottom {
    border-top: 1px solid rgba(9, 32, 50, 0.08);
    padding-top: 20px;
}

footer .social-links {
    margin-left: 5px;
    margin: 5px;
}
</style>