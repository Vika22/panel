<template>
  <div>
    <header>
      <div class="container">
        <img src="logo.png" class="logo" />
      </div>
    </header>
    <div class="sidenav">
      <ul class="p-0">
        <li>
          <router-link to="/" class="a">
            <span title="Главная">Главная</span>
          </router-link>
        </li>
        <li>
          <router-link to="/pendants" class="a">
            <span title="Подвески">Подвески</span>
          </router-link>
        </li>
        <li>
          <router-link to="/rings" class="a">
            <span title="Кольца">Кольца</span>
          </router-link>
        </li>
        <li>
          <router-link to="/earrings" class="a">
            <span title="Серьги">Серьги</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="main">
      <div class="container">
        <div class="row"></div>
      </div>
    </div>

    <router-view></router-view>
    <hello-world msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    "hello-world": () => import("@/components/HelloWorld")
  },
  data: () => {
    return {};
  }
};
</script>

<style>
header {
  background-color: #ffa573;
  height: 10vh;
  box-shadow: 0 0 50px rgb(255, 165, 115);
  position: absolute;
  width: 100%;
  z-index: 2;
}
.logo {
  width: 10vh;
}
.sidenav {
  overflow: hidden;
  position: fixed;
  height: 100vh;
  width: 15vw;
  background-color: #009e8e;
  z-index: 1;
  left: 0;
}
ul {
  margin-top: 15vh;
}
ul li {
  text-align: center;
  transform-style: preserve-3d;
  list-style: none;
}
ul li .a {
  display: block;
  color: #c6f9f4;
  padding: 10px;
  top: 0;
  left: 0;
  text-decoration: none;
  font-size: 30px;
  text-transform: uppercase;
  position: relative;
}
ul li .a:hover {
  text-decoration: none;
  color: transparent;
}
ul li .a span {
  display: block;
  padding: 15px 20px;
}
ul li .a span::before {
  content: attr(title);
  position: absolute;
  top: 0;
  left: 0;
  width: 15vw;
  color: #009e8e;
  background: #c6f9f4;
  padding: 25px 30px;
  transform-style: preserve-3d;
  transition: 0.3s;
  text-decoration: none;
  transform: rotateY(90deg) translateX(0px);
  transform-origin: left;
}
ul li .a span:hover::before {
  transform: rotateX(0) translateY(0);
}
ul li .a span::after {
  content: attr(title);
  position: absolute;
  top: 0;
  left: 0;
  width: 15vw;
  color: #c6f9f4;
  background: #009e8e;
  padding: 25px 30px;
  transform-style: preserve-3d;
  transition: 0.3s;
  transform: rotateY(0deg) translateX(0px);
  transform-origin: right;
}
ul li .a span:hover::after {
  transform: rotateY(90deg) translateX(-10px);
}

.main {
  margin-left: 15vw;
}
</style>
