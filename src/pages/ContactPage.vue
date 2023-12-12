<template>
    <!-- Modal -->
   <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 bg-cover" id="cnt"></div>
                    <div class="col-lg-8">
                        <form action="" class="row p-lg-5 gy-3">
                            <div class="col-12">
                                <h1>Get in Touch</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard
                                    dummy text ever since the 1500s</p>
                            </div>
                            <div class="col-lg-6">
                                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name">
                            </div>
                            <div class="col-lg-6">
                                <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name">
                            </div>
                            <div class="col-12">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="FirstName@gmail.com">
                            </div>
                            <div class="col-12">
                                <label for="message" class="form-label">Message</label>
                                <textarea name="" id="" cols="30" rows="4" class="form-control" placeholder="Write your opinion"></textarea>
                            </div>
                            <div class="col-12">
                                <button type="button" class="btn btn-brand">Send Message</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>
            </div>    
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactPage',
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

#cnt {
    background-image: url('../assets/img/cnt.jpg'); 
    min-height: 300px;
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

/*Form*/
.form-control:focus {
    box-shadow: none;
    border-color: #427883;
}
</style>
