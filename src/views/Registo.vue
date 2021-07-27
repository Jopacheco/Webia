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
              <label for="data">Idade<span class="text-danger"> *</span></label>
              <input
                id="idade"
                v-model="idade"
                type="number"
                value=""
                class="form-control form-control-lg"
                placeholder="selecione a sua idade"
                min="10"
                max="80"
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
            <div class="form-group" >
              <label for="ocupacao"><b>Selecione a sua ocupação :</b><span class="text-danger"> *</span></label><br>            
              <input id="idal"  type="radio" value="aluno" label for="idal" name="ocupacao">  Aluno(a) 
              <input id="idprf" type="radio" value="professor" label for="idprf" name="ocupacao">  Professor(a)
              <input id="idoutro" type="radio" value="outro" label for="idoutro" name="ocupacao">  Outro(a) 
              </div> 
              <div class="form-group" required>
              <label for="nivel"><b>Selecione o nível ensino da sua instituição:</b><span class="text-danger"> *</span></label><br>
              <input id="nivelb" type="radio" value="Básico" label for="nivelb" name="nivel"> Básico
              <input id="nivels" type="radio" value="Secundario" label for="nivels" name="nivel"> Secundário
              <input id="nivelu" type="radio" value="Universitário" label for="nivelu" name="nivel"> Universitário
              </div><br>           
            
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
