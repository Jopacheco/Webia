<template>
<section class="page-section" id="contactos">
    <div class="b-container">
        <!-- Contact Section Heading-->
        <div class="text-center">
          <h2 class="page-section-heading text-secondary d-inline-block mt-4 mb-3">
            Contate-nos
          </h2>
        </div>
        <!-- Icon Divider-->
        <div class="divider-custom mt-0">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-brain"></i></div>
          <div class="divider-custom-line"></div>
        </div>
    </div><br><br><br>        
      <div class="container">
        <!-- Contact Section Heading -->
        <!--FORM-->
        <form @submit.prevent="send">
          <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="8">
              <div class="form-group">
                <input
                  v-model="name"
                  type="text"
                  class="form-control form-control-lg"
                  id="txtName"
                  placeholder="escreva o seu nome"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  v-model="email"
                  type="email"
                  class="form-control form-control-lg"
                  id="txtName"
                  placeholder="escreva o seu e-mail"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  v-model="subject"
                  type="text"
                  class="form-control form-control-lg"
                  id="txtName"
                  placeholder="escreva o assunto"
                  required
                />
              </div>
              <div class="form-group">
                <textarea
                  id="txtDescription"
                  class="form-control form-control-lg"
                  placeholder="escreva a sua mensagem"
                  cols="30"
                  rows="10"
                  v-model="message"
                  required
                ></textarea>
              </div>
            </b-col>
            <b-col cols="2"></b-col>
          </b-row>
          <b-row>
            <b-col cols="2"></b-col>
            <b-col>
              <b-button type="submit" variant="info" class="p2 mr-2">
                <i class="fas fa-envelope-square "></i>ENVIAR
              </b-button>
              <b-button type="reset" variant="primary" class="">
                <i class="fas fa-eraser mr-2"></i>LIMPAR
              </b-button>
            </b-col>
            <b-col cols="2"></b-col>
          </b-row>
        </form>
      </div>
    </section>
    </template>
    <script>

    import emailService  from '../../api/email.service';
    
    export default {
        name:"contato",
        data:function() {
            return{
              name:"",
              email:"",
              subject:"",
              message:""  
            }
          },
    methods: {
        send() {
      (`${emailService}`, this.$data).then(() => this.$alert(this.getMessage, "E-mail enviado!", "success"),
        err => this.$alert(`${err.message}`, "Erro", "error")
      );
    }
    }
    }

    </script>
    
