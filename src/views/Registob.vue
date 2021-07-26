<template>
  <section class="page-section mt-5">
    <b-container>
      <b-row class="text-center">
        <b-col>
          <h3 class="text-secondary  d-inline-block mt-2">Registo de Visitante</h3>
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col>
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-brain"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div>
        </b-col> </b-row
      ><br />
      <br />
      <form id="registo" method="post" action="/api/users">
        <b-row>
          <b-col cols="4"></b-col>
          <b-col cols="4">
            <div class="form-group">
              <label for="nome">Nome<span class="text-danger"> *</span></label>
              <input
                id="nome"
                type="text"
                class="form-control"
                name="nome"
                placeholder="Escreva o seu nome"
                value=""
                required
              />
            </div>
            <div class="form-group">
              <label for="data"
                >Data nascimento<span class="text-danger"
                  >*</span></label 
              >
              <input
                id="data"
                type="date"
                class="form-control"
                name="data"
                placeholder="Escreva a sua data nascimento"
                value=""
                max="2014-01-01"
                min="1950-01-01"
                required
              />
            </div>
            <div class="form-group">
              <label for="ocupacao"
                >Ocupacao<span class="text-danger">*</span></label
              >
              <input
                id="ocupacao"
                type="text"
                class="form-control"
                name="ocupacao"
                placeholder="Escreva a sua ocupação(Professor,Estudante)"
                value=""
                required
              />
            </div>
            <div class="form-group">
              <label for="email"
                >Email <span class="text-danger">*</span></label
              >
              <input
                id="email"
                type="email"
                class="form-control"
                name="email"
                placeholder="Escreva o seu email"
                value=""
                required
              />
            </div>
            <div class="form-group">
              <label for="escola"
                >Escola<span class="text-danger">*</span></label
              >
              <input
                id="escola"
                type="number"
                class="form-control"
                name="escola"
                placeholder="Escreva a sua escola"
                value=""
                required
              />
            </div>
            <div class="form-group">
              <input
                type="submit"
                value="Registar"
                class="btn btn-info btn-block"
              />
            </div>
          </b-col>
        </b-row>
      </form>
    </b-container>
  </section>
</template>

<script>
</script>
