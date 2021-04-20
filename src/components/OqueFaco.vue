<template>
  <div class="whatido">
    <h1>O que faço?</h1>
    <div class="tasks">
      <p>Atualmente estou trabalhado no Instituto Superior Dom Bosco, onde exerço a função de Docente.
        Algumas principais atividades destacam-se:</p>
      <ol>
        <li>Elaborar planos de aulas, exercícios, actividades praticas e relatório de
          actividades realizadas</li>
        <li>Leccionar os módulos indicados</li>
        <li>Orientar e acompanha o desenvolvimento das actividades na sala de
          aulas</li>
        <li>Esclarecer duvidas</li>
        <li>Elaborar propostas de avaliação diagnostica, formativa e sumativa</li>
      </ol>
    </div>
    <h2>Imagens</h2>
    <div class="image-task">
      <img src="../assets/img-01.webp"/>
      <img src="../assets/img-01.webp"/>
      <img src="../assets/img-01.webp"/>
      <img src="../assets/img-01.webp"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "OqueFaco"
}
</script>

<style scoped>

.whatido {
  display: flex;
  flex-direction: column;
}
.tasks {
  width: 600px;
  margin: 0 auto;
}

h1, h2 {
  width: 100%;
  text-align: center;
  margin: 15px 0;
}

ol {
  font-weight: bold;
  font-size: 11pt;
  margin: 5px 0;
}

li {
  margin: 2px 0;
}

img {
  width: 260px;
  margin: 0 10px;
}

.image-task {
  width: 100%;
  text-align: center;
}
</style>