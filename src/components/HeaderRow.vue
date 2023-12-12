<template>
    <nav class="top-nav" id="home">
              <div class="container">
                  <div class="row justify-content-between">
                      <div class="col-auto">
                          <p>
                              <i class='bx bxs-envelope'></i>
                              <span>jmakhammatjonov@gmail.com</span>
                          </p>
                          <p>
                              <i class='bx bxs-phone-call'></i>
                              <span>+998907872237</span>
                          </p>
                      </div>
                      <div class="col-auto">
                          <div class="social-links">
                              <a href="#"><i class='bx bxl-facebook'></i></a>
                              <a href="#"><i class='bx bxl-linkedin'></i></a>
                              <a href="#"><i class='bx bxl-twitter'></i></a>
                              <a href="#"><i class='bx bxl-youtube'></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
          <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
              <div class="container">
                  <img src="../assets/img/nav.jpg" alt="">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav ms-auto">
                          <li class="nav-item">
                              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                          </li>
                          <li class="nav-item">
                              <router-link class="nav-link active" aria-current="page" to="/about">About</router-link>
                          </li>
                          <li class="nav-item">
                              <router-link class="nav-link active" aria-current="page" to="/service">Service</router-link>
                          </li>
                          <li class="nav-item">
                              <router-link class="nav-link active" aria-current="page" to="/portfolio">Portfolio</router-link>
                          </li>
                          <li class="nav-item">
                              <router-link class="nav-link active" aria-current="page" to="/team">Team</router-link>
                          </li>
                          <li class="nav-item">
                              <router-link class="nav-link active" aria-current="page" to="/reviews">Reviews</router-link>
                          </li>
                          <li class="nav-item">
                              <router-link class="nav-link active" aria-current="page" to="/blog">Blog</router-link>
                          </li>
                      </ul>
                      <router-link to="/sendMessage" class="btn btn-brand ms-lg-3">Contact Us</router-link>
                  </div>
              </div>
          </nav>
</template>

<script>


export default {
    name: 'HeaderRow',
    components: {

    }
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
</style>
