<template>
  <b-container>
    <div id="page-top">
      <b-nav id="mainNav" class="navbar navbar-expand-lg bg-secondary fixed-top">
        <div class="container">
          <div class="navbar-brand js-scroll-trigger">
            <b-nav-item to="/">WEB &amp; IA </b-nav-item> </div>          
          <button class="navbar-toggler navbar-toggler-right  font-weight-bold  bg-primary text-white rounded"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation">
            Menu <i class="fas fa-bars"></i>
          </button>
          <div id="navbarResponsive" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
               <div class="nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger">
                   <b-nav-item to="/Registo">Registo</b-nav-item></div>                  
               <div class="nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger">
                   <b-nav-item to="/AI4K12">AI4K12</b-nav-item></div>
               <div class="nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger">
                  <b-nav-item to="/repositorio">Repositório</b-nav-item></div>
               <div class="nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger">
                   <b-nav-item to="/about">Acerca</b-nav-item></div>
               <div class="nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger">
                   <b-nav-item to="/contato">Contate-nos</b-nav-item></div>
               <div class="nav-link py-0 px-0 px-lg-2 rounded js-scroll-trigger">
                   <b-nav-item to="/menu">Área Privada</b-nav-item></div>
                        
            </ul>
          </div>
        </div>
      </b-nav>
    </div>
  </b-container>
</template>
