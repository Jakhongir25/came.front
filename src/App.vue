<template data-bs-spy="scroll" data-bs-target=".navbar">
  <!--Navbar-->
   <HeaderRow/>   

      <!--SLIDER-->
      

      <!-- ABOUT -->
      

      <!-- Clients -->
      

      <!-- Services -->
      
        <router-view/>
      <!-- PARDFOLIO -->
      

      <!-- Team -->
      

      <!--Reviews-->
      

      <!--Blog-->
      

      <!--Footer-->
      <FooterRow/>

      

      

</template>

<script>
import HeaderRow from './components/HeaderRow.vue';
import FooterRow from './components/FooterRow.vue'
export default {
  name: 'App',
  components: {HeaderRow, FooterRow}
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
/* Navbar */
.top-nav {
    background-color: #427883;
    padding-top: 5px;
    padding-bottom: 5px;
}

.top-nav p {
    margin-bottom: 0;
    display: inline-block;
    margin-right: 16px;
    color: #ffffff;
}

.top-nav i,
.top-nav span {
    vertical-align: middle;
}

.social-links a {
    width: 34px;
    height: 34px;
    background-color: rgba(255, 255, 255, 0.5);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 20px;
    border-radius: 100%;
}

.social-links a:hover {
    background-color: #ffffff;
    color: #427883
}

.navbar {
    box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.08);
}

.navbar .navbar-nav .nav-link:hover,
.navbar .navbar-nav .nav-link.active {
    color: #427883;
}

.navbar-brand {
    font-weight: 700;
    font-size: 26px;
    color: #427883;
    margin: 2px;
}

.navbar-brand span {
    color: #427883;
}

.navbar img {
    margin-right: 140px;
    border-radius: 50px;
    margin-left: 15px;
    max-width: 50px;
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

/* SLIDER */
.slide1 {
    background: linear-gradient(rgba(9, 32, 50, 0.4), rgba(9, 32, 50, 0.4)), url(../src/assets/img/slire1.jpg);
}

.slide2 {
    background: linear-gradient(rgba(9, 32, 50, 0.4), rgba(9, 32, 50, 0.4)), url(../src/assets/img/slide2.jpg);
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

/* Clients */
#clients {
    background: linear-gradient(rgba(72, 143, 158, 0.8), rgba(72, 138, 151, 0.8)), url(../src/assets/img/clients.jpg);
}

#clients .display-4,
#clients p {
    color: #ffffff;
}

#clients .display-4 {
    font-weight: 700;
}


.feature {
    border: 2px solid rgba(255, 255, 255, 0.2);
}

.feature .feature-icon {
    width: 80px;
    height: 80px;
    background-color: #1b3439;
    color: #ffffff;
    font-size: 28px;
    display: inline-grid;
    align-content: center;
    text-align: center;
    border-radius: 20px;
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

/*Projects*/
.project {
    position: relative;
    overflow: hidden;
}

.project .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(21, 20, 51, 0.8);
    padding: 30px;
    display: flex;
    align-items: flex-end;
    transition: all 0.4s ease;
    opacity: 0;
}

.project img {
    transition: all 0.4s ease;
}

.project:hover .overlay {
    opacity: 1;
}

.project:hover img {
    transform: scale(1.1);
}

.carousel-control-prev,
.carousel-control-next {
    background-color: rgba(0, 0, 0, 0.6);
    width: 20px;
    height: 35px;
    margin: auto;
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

/* Reviews */
#reviews {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../src/assets/img/rev.jpg);
}

.review img {
    width: 100px;
    height: 80px;
    object-fit: cover;
}

.review .quote-icon {
    font-size: 74px;
    color: #F58d17;
    line-height: 1;
}

.review .stars {
    color: #F58d17;
}

#reviews .carousel-indecators {
    margin-bottom: -3rem;
}

#reviews .carousel {
    opacity: 0.6;
}

/*Blog*/
.blog-post {
    position: relative;
}

.blog-post .tag {
    padding: 4px 12px;
    background-color: #427883;
    color: #ffffff;
    border-radius: 100px;
    top: 20px;
    left: 20px;
    position: absolute;
}

.blog-post a {
    font-weight: 700;
}

.blog-post img {
    margin-bottom: 12px;
    border-radius: 12px;
}

.blog-post h4 {
    margin-top: 12px;
    margin-bottom: 12px;
}

.blog-post small {
    color: #427883;
    text-decoration: underline;
    text-transform: uppercase;
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
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../src/assets/img/slire1.jpg);
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

/*Form*/
.form-control:focus {
    box-shadow: none;
    border-color: #427883;
}

</style>
