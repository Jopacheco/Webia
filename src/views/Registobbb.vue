<template>
  <section class="page-section">
    <b-container>
      <b-row class="text-center">
        <b-col>
          <h3 class="page-section-heading mt-5">Registo de Visitante</h3>
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
      ><br><br>
      <b-row>
        <b-col cols="4">
         </b-col>
        <b-col cols="4">

      <!--FORM-->      
          <form method="post" action="/api/users" @submit.prevent="createUser" >
            <div class="form-group">
              <label for="nome"><b>Nome</b><span class="text-danger"> *</span></label>
              <input
                id="nome"
                v-model="nome"
                type="text"
                value=""
                class="form-control form-control-lg"
                placeholder="escreva o seu nome"
                required
              />
            </div>
            <div class="form-group">
              <label for="data"><b>Idade</b><span class="text-danger"> *</span></label>
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
               <label for="email"><b>Email</b><span class="text-danger"> *</span></label>
              <input
                id="email"
                v-model="email"
                type="email"
                value=""
                class="form-control form-control-lg"
                placeholder="escreva o seu email"
                required/>
            </div>
              <div class="form-group" required>
              <label for="ocupacao"><b>Selecione a sua ocupação :</b><span class="text-danger"> *</span></label><br>            
              <input id="idal" v-model="ocupacao" type="radio" value="aluno" label for="idal">  Aluno(a) 
              <input id="idprf" v-model="ocupacao" type="radio" value="professor" label for="idprf">  Professor(a)
              <input id="idoutro" v-model="ocupacao" type="radio" value="outro" label for="idoutro">  Outro(a) 
              </div> 
              <div class="form-group" required>
              <label for="nivel"><b>Selecione o nível ensino da sua instituição:</b><span class="text-danger"> *</span></label><br>
              <input id="nivelb" v-model="nivel" type="radio" value="Básico" label for="nivelb"> Básico
              <input id="nivels" v-model="nivel" type="radio" value="Secundario" label for="nivels"> Secundário
              <input id="nivelu" v-model="nivel" type="radio" value="Universitário" label for="nivelu"> Universitário
              </div><br>           
              <div class="form-group">
              <input type="button" @click="createUser" class="btn btn-info btn-block" value="Registar">
              </div>
            </form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>


</script>
