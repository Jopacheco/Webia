<template>
  <b-container fluid>
    <section id="portfolio" class="page-section portfolio">
      <div class="b-container fluid">
        <!-- Repositorio Section Heading-->
        <div class="text-center">
          <h3 class="portfolio-modal-subtitle text-secondary  mt-4 d-inline-block">
            Repositório - As cinco Ideias em IA
          </h3>
        </div>
        <!-- Icon Divider-->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-brain"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Repositorio Grid Items-->
        <div class="row justify-content-center">
          <!-- Repositorio Items-->
          <div class="col-md-6 col-lg-4 mb-5">
            <div
              class="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal0"
            >
              <div
                class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
              >
                <div
                  class="portfolio-item-caption-content text-center text-white"
                >
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="../assets/img/repositorio/percecao1.png"
                alt="Percecao"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5">
            <div
              class="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal1"
            >
              <div
                class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
              >
                <div
                  class="portfolio-item-caption-content text-center text-white"
                >
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="../assets/img/repositorio/representacao.png"
                alt="Representação e Conhecimento"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5">
            <div
              class="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal2"
            >
              <div
                class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
              >
                <div
                  class="portfolio-item-caption-content text-center text-white"
                >
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="../assets/img/repositorio/aprendizagem.png"
                alt="Aprendizagem Máquina"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5">
            <div
              class="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal3"
            >
              <div
                class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
              >
                <div
                  class="portfolio-item-caption-content text-center text-white"
                >
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div><br><br><br><br><br>
              <img
                class="img-fluid"
                src="../assets/img/repositorio/interacao.png"
                alt="Interação Natural"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5">
            <div
              class="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal4"
            >
              <div
                class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
              >
                <div
                  class="portfolio-item-caption-content text-center text-white"
                >
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div><br><br><br><br><br>
              <img
                class="img-fluid"
                src="../assets/img/repositorio/impacto.png"
                alt="Impacto Social"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Repositorio Modal-->
    <div
      id="portfolioModal0"
      class="portfolio-modal modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="#portfolioModal0Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl " role="document">
        <div class="modal-content">
          <button
            class="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
          </button>
          <div class="modal-body text-center">
            <div class="b-container ">
              <div class="row justify-content-center mb-5 mt-0">
                <div class="col-lg-8">
                  <!-- Repositorio Modal - Title-->
                  <h4 class="portfolio-modal-subtitle text-secondary mt-0">
                    Perceção
                  </h4>
                  <!-- Icon Divider-->
                  <div class="divider-custom mt-0">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fas fa-brain"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                   </div>
                  <!-- Repositorio Modal - Image-->
                  <img class="img float-left img-thumbnail mt-5 " src="../assets/img/repositorio/pac.png" style="width:300px;height:300px;"/>
                  
                  <!-- Repositorio Modal - Title-->                
                    <p class="portfolio-modal-subtitle text-secondary mt-5"><h6>Ferramenta Personal Audio Classifier (PAC)<p>Nível Ensino: 3º ciclo e Secundário</p></h6> Propósito: Reconhecimento de padrões de áudio <br><br/>
                <div class="mr-5">
                  <b-container >
                  <section id="Documentos" class="mr-3">Documentos ><b-link href = "https://drive.google.com/file/d/1X28Rv-WWnhrLPTQzufGqaMJAqSsLon9x/view?usp=sharing" ><b><pre>->Guião Resumo(PDF)</pre></b></b-link>
                  </section><br>
                  <section id="Videos" class="mr-3">Vídeos ><a href="https://youtu.be/Lfh6Trv_qVk" target="_BLANK"><b><pre>->Vídeo(Youtube)</pre></b></a>
                  </section><br>
                   <section id="Apontadores" class="mr-2">Apontadores ><a href="https://c1.appinventor.mit.edu/" target="_BLANK"><b><pre>->Web Interface</pre></b></a>
                  
                  </section></b-container>
                </div>

                  <button class="btn btn-primary mb-0 mt-5" href="#" data-dismiss="modal">
                    <i class="fas fa-times fa-fw"></i>Close Window
                  </button> 
                  </div>              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div
      id="portfolioModal1"
      class="portfolio-modal modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="#portfolioModal1Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button
            class="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
          </button>
          <div class="modal-body text-center">
            <div class="b-container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <!-- Repositorio Modal - Title-->
                  <h2 class="portfolio-modal-title text-secondary mb-0">
                    Representação e Raciocínio
                  </h2>
                  <!-- Icon Divider-->
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fas fa-brain"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <!-- Repositorio Modal - Image-->
                  <img
                    class="img-fluid rounded mb-5"
                    src="../assets/img/repositorio/representacao.png"
                    alt="Representação e Raciocínio"
                  />
                  <!-- Repositorio Modal - Text-->
                  <!--p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p-->
                  <button class="btn btn-primary" href="#" data-dismiss="modal">
                    <i class="fas fa-times fa-fw"></i>Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="portfolioModal2"
      class="portfolio-modal modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="#portfolioModal2Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button
            class="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
          </button>
          <div class="modal-body text-center">
            <div class="b-container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <!-- RepositorioModal - Title-->
                  <h2 class="portfolio-modal-title text-secondary mb-0">
                    Aprendizagem Máquina
                  </h2>
                  <!-- Icon Divider-->
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fas fa-brain"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <!-- Repositorio Modal - Image--><img
                    class="img-fluid rounded mb-5"
                    src="../assets/img/repositorio/aprendizagem.png"
                    alt="Aprendizagem Máquina"
                  />
                  <!-- Repositorio Modal - Text-->
                  <!--p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p-->
                  <button class="btn btn-primary" href="#" data-dismiss="modal">
                    <i class="fas fa-times fa-fw"></i>Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="portfolioModal3"
      class="portfolio-modal modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="#portfolioModal3Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button
            class="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
          </button>
          <div class="modal-body text-center">
            <div class="b-container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <!-- Repositorio Modal - Title-->
                  <h2 class="portfolio-modal-title text-secondary mb-0">
                    Interação Natural
                  </h2>
                  <!-- Icon Divider-->
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fas fa-brain"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <!-- Repositorio Modal - Image-->
                  <img
                    class="img float-left img-thumbnail mt-5 " style="width:300px;height:300px;"
                    src= "../assets/img/repositorio/chatbot.png"
                    alt="Interação Natural"/>

                  <!-- Repositorio Modal - Text-->
                  <!--p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p-->
                   <p class="portfolio-modal-subtitle text-secondary mt-5"><h6>Agente de conversação (ChatBot)<br>Nível Ensino - Secundário</h6>Propósito: Responder a questões sobre um tema<br><br>
                <div class="mr-0">
                  <b-container >
                  <section id="Documentos" class="mr-3">Documentos >
                  <b-link href = "https://universidadedosacores-my.sharepoint.com/:b:/g/personal/20072656_uac_pt/EYAxbiA7_iBBvaHiJwszQTMBihPz4dKLZ8i1-cn02Xia_A?e=y9iDcE" download target="_BLANK"><b><pre>->Guião(PDF)</pre></b></b-link>
                  <b-link href = "https://universidadedosacores-my.sharepoint.com/:b:/g/personal/20072656_uac_pt/EYzkTA58auxBkK0lJULXzOQBvLRdgJbYvbuATu8Ww-W9Aw?e=XIUbCy" download target="_BLANK"><b><pre>->Guião Resumo(PDF)</pre></b></b-link></section><br>
                  <section id="Videos" class="mr-5">Vídeos ><b-link href="https://youtu.be/o51kzSXjfVA" target="_BLANK"><b><pre>->Vídeo(Youtube)</pre></b></b-link>
                  </section><br>
                   <section id="Apontadores" class="mr-1">Apontadores >
                  <b-link href="https://machinelearningforkids.co.uk/#!/worksheets" target="_BLANK"><b><pre>->Interface Web ML4Kids</pre></b></b-link>
                  <b-link href="https://machinelearningforkids.co.uk/scratch3/" target="_BLANK"><b><pre>                              ->Scracth ML4Kids</pre></b></b-link>
                  </section></b-container>
                </div><br><br> <button class="btn btn-primary" href="#" data-dismiss="modal">
                    <i class="fas fa-times fa-fw"></i>Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="portfolioModal4"
      class="portfolio-modal modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="#portfolioModal4Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button
            class="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
          </button>
          <div class="modal-body text-center">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <!-- Portfolio Modal - Title-->
                  <h2 class="portfolio-modal-title text-secondary mb-0">
                    Impacto Social
                  </h2>
                  <!-- Icon Divider-->
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fas fa-brain"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <!-- Portfolio Modal - Image-->
                  <img
                    class="img float-left img-thumbnail mt-5 " style=""
                    src="../assets/img/repositorio/impacto.png"
                    alt="Impacto Social"
                  />
                  <!-- Portfolio Modal - Text-->
                  <!--p class="mb-5"></p-->
                  <button class="btn btn-primary" href="#" data-dismiss="modal">
                    <i class="fas fa-times fa-fw"></i>Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
//import tool from "../api/tool.service";



</script>
