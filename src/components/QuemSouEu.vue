<template>
  <div class="whoiam">
    <div class="wrapper">
      <div class="profile-photo">
        <img src="../assets/profile.png"/>
      </div>
      <div class="profile-info">
        <h1>Saudações,</h1>
        <h3>Quem sou eu</h3>
        <div class="personal-info">
          <div>
            <img src="../assets/phone.png" alt="phone.png"/>
            <p>+258 84 3602 532</p>
          </div>
          <div>
            <img src="../assets/language-512.webp" alt="language.png"/>
            <p>Portugues & Ingles</p>
          </div>
          <div>
            <img src="../assets/94-512.webp" alt="location.png"/>
            <p>Maputo, Moçambique</p>
          </div>
        </div>
        <p>{{descricao}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuemSouEu",
  data() {
    return{
      descricao: "Sou Ednilson Dava, atualmente mestrando em Tecnologias e Sistemas Informaticos Web " +
          "na Universidade Aberta. Tambem trabalho como Docente do Ensino Superior no Instituto Superior" +
          " Dom Bosco, onde lecciono UCs dos cursos do departamento de TICs."
    }
  }
}
</script>

<style scoped>

.wrapper {
  position: relative;
  width: 980px;
  margin: 0 auto;
  display: flex;
}

.wrapper > div {
  display: inline-block;
  margin-top: 60px;
}

.profile-photo {
  margin-right: 90px;
}

.profile-photo img {
  width: 380px;
  height: 350px;
}
.personal-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-weight: bold;
}

.personal-info > div {
  margin: 30px 0;
}

.profile-info {
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: small;
}
.profile-info img {
  width: 48px;
  padding: 25px;

  border-radius: 48px;
  border: 3px solid #3c3c3c;
}
</style>