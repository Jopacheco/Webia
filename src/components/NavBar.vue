<template>
  <b-container>
    <div id="page-top">
      <b-nav id="mainNav" class="navbar navbar-expand-lg bg-secondary fixed-top">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="/#page-top"
            >WEB &amp; IA
          </a>
          <button
            class="
              navbar-toggler navbar-toggler-right
              font-weight-bold
              bg-primary
              text-white
              rounded
            "
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu <i class="fas fa-bars"></i>
          </button>
          <div id="navbarResponsive" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <!--b-nav-item :to="{name: 'login'}" :disabled=!isUserLoggedIn>Login</b-nav-item-->
              <li class="nav-item mx-0 mx-lg-1">
                <a
                  class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  href="/registo"
                  >Registo</a
                >
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a
                  class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  href="/AI4K12"
                  >AI4K12</a
                >
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a
                  class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  href="/repositorio"
                  >Repositório</a
                >
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a
                  class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  href="/#about"
                  >Acerca
                </a>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a
                  class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  href="/contato"
                  >Contate-nos</a
                >
              </li>

              <li class="nav-item mx-0 mx-lg-1"></li>
              <li class="nav-item mx-0 mx-lg-1">
                <a
                  class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  href="/menu"
                  >Área Privada e Gestão</a
                >
              </li>

              <li class="nav-item mx-0 mx-lg-1"></li>
            </ul>
          </div>
        </div>
      </b-nav>
    </div>
  </b-container>
</template>
