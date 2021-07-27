<template>
  <section class="page-section mt-5">
    <b-container>
      <b-row class="text-center">
        <b-col>
          <h2 class="page-section-heading mt-2">Ferramentas</h2>
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
      <b-container>
        <div class="jumbotron">
          <h5 class="text-center text-secondary">Visualizar ferramenta(s)</h5>
          <br />
          <b-form id="" method="get" action="api/tools/" class="needs-validation">
            <b-row>
              <b-col cols="4"></b-col>
              <b-col cols="4">
                <div class="form-group">
                  <label for="id"
                    >*ID<span class="text-danger"></span></label
                  >
                  <input
                    id="id"
                    type="text"
                    class="form-control"
                    name="id"
                    placeholder="Introduza o ID da ferramenta"
                    value=""/>
                </div>
                <div class="form-group">
                  <input type="submit" value="Visualizar"  class="btn btn-info btn-block"/></div
              ></b-col>
            </b-row>
          </b-form>          
          </div>    
      </b-container>
    </b-container>
  </section>
</template>

<script>
//import BASE_URL from '../../api/config';
export default{

}

</script>

