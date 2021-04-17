<template>
  <div class="app">
    <header>
      <div class="brand">
        <h1>{{ nome }}</h1>
        <h3>{{ profissao }}</h3>
      </div>
      <nav class="menu-app">
        <ul>
          <li><a href="/#/">Quem sou eu</a></li>
          <li><a href="/#/oquefaco">O que faço</a></li>
          <li><a href="/#/hobbies">Hobbies</a></li>
        </ul>
      </nav>
    </header>
    <router-view class="viewer"></router-view>
    <footer>
      <div>
        <img src="./assets/facebook.png" alt="fb-logo">
        <a href="https://www.facebook.com/ednilson.dava">Ednilson Dava</a>
      </div>
      <div>
        <img src="./assets/whatsapp.png" alt="wa-logo">
        <a href="#">+258 84 3602 532</a>
      </div>
      <div>
        <img src="./assets/google-plus.png" alt="gp-logo">
        <a href="mailto:dava.ednilson@gmail.com">dava.ednilson@gmail.com</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      nome: "Ednilson Dava",
      profissao: "Mestrando em MW"
    }
  }
}
</script>

<style scoped>
header {
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

li {
  display: inline-block;
  padding: 0 10px;
  border-right: 2px solid black;
}

li:nth-last-child(1) {
  border-right: none;
}

a {
  text-decoration: none;
  font-size: 20px;
  color: dodgerblue;
}

.viewer {
  background: #eae4e4;
  height: 450px;
  overflow: hidden;

  display: flex;
  align-items: flex-start;
}

footer {
  background: #e73556;
  height: 87px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

img {
  width: 32px;
  margin: 0 10px;
}

footer div {
  display: flex;
  align-items: center;
}

footer a {
  font-size: 14px;
  font-weight: bold;
  color: white;
}
</style>
