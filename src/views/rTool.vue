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
      <div class="b-container">
        <div class="jumbotron">
          <h5 class="text-center text-secondary mt-0">Registar ferramenta</h5>
          <br />
          <form
            id="registo"
            method="post"
            action="/api/tools"
            class="needs-validation">
            <b-row>
              <b-col cols="4"></b-col>
              <b-col cols="4">
                <div class="form-group">
                  <label for="id"
                    >ID<span class="text-danger">*</span></label
                  >
                  <input
                    id="id"
                    type="text"
                    class="form-control"
                    name="id"
                    placeholder="Introduza o ID da ferramenta"
                    value=""
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="designa"
                    >Designacão<span class="text-danger">*</span></label
                  >
                  <input
                    id="designacao"
                    type="text"
                    class="form-control"
                    name="designacao"
                    placeholder="Introduza a designacão da ferramenta"
                    maxlenght="15"
                    value=""
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="area"
                    >Área da ferramenta (de 1 a 5 de AI4K12)
                    <span class="text-danger">*</span></label
                  >
                  <input
                    id="area"
                    type="number"
                    class="form-control"
                    name="area"
                    placeholder="Introduza a área de 1 a 5 da ferramenta"
                    min="1"
                    max="5"
                    value=""
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="descricao"
                    >Descrição<span class="text-danger">*</span></label
                  >
                  <input
                    id="descricao"
                    type="text"
                    class="form-control"
                    name="descricao"
                    placeholder="Introduza a descricao"
                    maxlenght="25"
                    value=""
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="nivel"
                    >Nível Ensino - 3º Ciclo "3" ou Secundário "4"
                    <span class="text-danger">*</span></label
                  >
                  <input
                    id="nivel"
                    type="number"
                    class="form-control"
                    name="nivel"
                    placeholder="Introduza o Nível Ensino"
                    min="3"
                    max="4"
                    value=""
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="uriimagem"
                    >UriImagem<span class="text-danger">*</span></label
                  >
                  <input
                    id="uriimagem"
                    type="text"
                    class="form-control"
                    name="uriimagem"
                    placeholder="Introduza o uri da Imagem"
                    value=""
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="urlficheiro"
                    >UrlFicheiro1<span class="text-danger"></span
                  ></label>
                  <input
                    id="urlficheiro1"
                    type="url"
                    class="form-control"
                    name="urlficheiro1"
                    placeholder="Introduza o url do Ficheiro1"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="urlficheiro"
                    >UrlFicheiro2<span class="text-danger"></span
                  ></label>
                  <input
                    id="urlficheiro2"
                    type="url"
                    class="form-control"
                    name="urlficheiro2"
                    placeholder="Introduza o url do Ficheiro2"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="urlvideo"
                    >UrlVídeo<span class="text-danger"></span
                  ></label>
                  <input
                    id="urlvideo"
                    type="url"
                    class="form-control"
                    name="urlvideo"
                    placeholder="Introduza o url do Vídeo"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="urlapontador"
                    >UrlApontador1<span class="text-danger"></span
                  ></label>
                  <input
                    id="urlapontador1"
                    type="url"
                    class="form-control"
                    name="urlapontador1"
                    placeholder="Introduza o url do Apontador1"
                    value=""
                  />
                </div>
                  <div class="form-group">
                  <label for="urlapontador"
                    >urlapontador2<span class="text-danger"></span
                  ></label>
                  <input
                    id="urlapontador2"
                    type="url"
                    class="form-control"
                    name="urlapontador2"
                    placeholder="Introduza o url do Apontador2"
                    value=""
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
        </div>
      </div>
    </b-container>
  </section>
</template>
