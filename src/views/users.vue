<template>
  <section class="page-section mt-5">
    <b-container>
      <b-row class="text-center">
        <b-col>
          <h2 class="page-section-heading mt-2">Visitantes</h2>
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

      <div class="b-container">
        <div class="jumbotron">
          <h5 class="text-center text-primary">Ver Visitantes</h5>
          <br />

          <b-form
            id="registo"
            method="get"
            action="/api/users">
            <b-row>
              <b-col cols="4"></b-col>
              <b-col cols="4">               
                <div class="form-group">
                  <input
                    type="submit"
                    value="Visualizar"
                    class="btn btn-info btn-block"
                  />
                </div>
              </b-col>
            </b-row>
          </b-form>
        </div>
      </div>
    </b-container>
  </section>
</template>
