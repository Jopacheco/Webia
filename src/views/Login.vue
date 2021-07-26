<template>
  <section class="page-section mt-5">
    <b-container>
      <b-row class="text-center">
        <b-col>
          <h2 class="text-secondary d-inline-block mt-2">Login</h2>
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
        </b-col>
      </b-row>
      <br />
      <br />

      <!--FORM-->
      <form id="login" action="/api/auth" method="POST">
        <b-row>
          <b-col cols="4"></b-col>
          <b-col cols="4">
            <div class="form-group">
              <label for="username"
                >Username<span class="text-danger">*</span></label
              >
              <input
                id="username"
                type="username"
                class="form-control"
                name="username"
                placeholder="Introduza o seu username"
              />
            </div>
            <div class="form-group">
              <label for="password"
                >Password <span class="text-danger">*</span></label
              >
              <input
                id="password"
                type="password"
                class="form-control"
                name="password"
                placeholder="Introduza a sua password"
              />
            </div>
            <div class="form-group">
              <input
                type="submit"
                value="Login"
                class="btn btn-info btn-block"
              />
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-md-10">
                  Novo utilizador? <a href="/registou">REGISTAR</a>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </form>
    </b-container>
  </section>
</template>

<script>

</script>
