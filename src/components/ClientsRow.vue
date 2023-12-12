<template>
    <section id="clients" class="bg-cover">
        <div class="container">
            <div class="row gy-4 text-center justify-content-center">
                <div class="row gy-4">
                    <div class="col-lg-3 col-sm-6">
                        <div class="feature p-4 text-center">
                            <div class="feature-icon">
                                <i class='bx bx-plus-medical'></i>
                            </div>
                            <h4 class="text-white mt-4 mb-2">Lorem ipsum</h4>
                            <p class="text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="feature p-4 text-center">
                            <div class="feature-icon">
                                <i class='bx bxs-time'></i>
                            </div>
                            <h4 class="text-white mt-4 mb-2">Lorem ipsum</h4>
                            <p class="text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="feature p-4 text-center">
                            <div class="feature-icon">
                                <i class='bx bxs-coffee'></i>
                            </div>
                            <h4 class="text-white mt-4 mb-2">Lorem ipsum</h4>
                            <p class="text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="feature p-4 text-center">
                            <div class="feature-icon">
                                <i class='bx bxs-calendar-check'></i>
                            </div>
                            <h4 class="text-white mt-4 mb-2">Lorem ipsum</h4>
                            <p class="text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'ClientsRow',
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
/* Clients */
#clients {
    background: linear-gradient(rgba(72, 143, 158, 0.8), rgba(72, 138, 151, 0.8)), url(../assets/img/clients.jpg);
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
</style>