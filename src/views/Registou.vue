<template>
  <section class="page-section mt-5">
    <b-container>
      <b-row class="text-center">
        <b-col>
          <h2 class="text-secondary d-inline-block mt-2">Registo</h2>
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
      <b-form id="">
        <b-row>
          <b-col cols="4"></b-col>
          <b-col cols="4">
            <div class="form-group">
              <label for="fname">Nome <span class="text-danger">*</span></label>
              <input
                id="fname"
                type="text"
                class="form-control"
                name="fname"
                placeholder="Escreva o seu nome"
                value=""
              />
            </div>
            <div class="form-group">
              <label for="fname"
                >Password <span class="text-danger">*</span></label
              >
              <input
                id="password"
                type="password"
                class="form-control"
                name="password"
                placeholder="Escreva a sua Password"
                value=""
              />
            </div>
            <div class="form-group">
              <label for="cpassword"
                >Confirme a Password <span class="text-danger">*</span></label
              >
              <input
                id="cpassword"
                type="password"
                class="form-control"
                name="cpassword"
                placeholder="Confirme a sua Password"
                value=""
              />
            </div>
            <button type="button" class="btn btn-info btn-block" @onclick='createUser()'>Registar</button>
              <div class="form-group">
              <div class="row">
                <div class="col-md-8">
                  Utilizador Existente? <a href="/Login">LOGIN</a>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </section>
</template>

<!--script> 
import CreateUser from '../../api/user.service';

export default {
  name: 'createUser',
  
  data() {
    return {
      username: "",
      password: "",
      }
  },

  methods: {     
    createUser() {
      if (
        document.querySelector("#txtPassword").value !==
        document.querySelector("#txtConfirmPassword").value
      ) {
        this.$alert(
          "Campos password não coincidem",
          "Erro de validação do formulário")
      } else 
         {
          console.log(this.firstName)
          const payload = {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email
          }
          this.$emit('createUser', payload)
          }     
      },
      userCreate(data) {
      console.log('data:::', data)
      CreateUser(data).then(response => {
        console.log(response);
    });
      }
  }
}  
  </script-->
