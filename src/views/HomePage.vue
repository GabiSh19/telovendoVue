<template>
<CarritoCompras/>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1625732867209-7c8afdb21d10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h2 style="margin-bottom: 350px;">Bienvenidos a TeloVendo!</h2>
        <h5>Conoce nuestra sucural</h5>
        <p>Nos encontraras en Tangamandapio en la 18a region</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1501501753674-3cc5ea1bc1ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h5>Liretalmente Verdes!</h5>
        <p>todos nuestros productos son verdes... literalmete! ven a verlos en la seccion "productos"</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h5>Que haces aqui? compra!</h5>
        <p>nuestra sitio web es perfecto, no hace falta buscar por bugs...</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<FooterPage/>
</template>

<script>
import CarritoCompras from "@/components/CarritoCompras.vue"
import FooterPage from "@/components/FooterPage.vue"

export default {
  name: 'HomePage',
  components: {
    CarritoCompras,
    FooterPage
    
  }
}

</script>

<style scoped>
.carousel-item {
  height: 550px;
}

.carousel-item img {
    min-height: 550px;
    object-fit: cover;
    filter: brightness(50%);
}
</style>