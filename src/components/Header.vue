<template>
  <header id="home">
    <div class="container">
      <nav class="top-header d-flex justify-content-between">
        <a href="#home " class="logo">
          <img src="../assets/logo.png" alt />
        </a>

        <ul class="menu d-flex justify-content-between">
          <li>
            <a href="#home" v-smooth-scroll>Home</a>
          </li>
          <li>
            <a href="#products" v-smooth-scroll>Products</a>
          </li>
          <li>
            <a href="#cart">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </nav>

      <div class="header-text">
        <h1>Our clothing , your comfort</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          quaerat adipisci asperiores? Vitae nam architecto, sed nobis
          temporibus magni.
        </p>
      </div>

      <a href="#filter" v-smooth-scroll>
        <i class="fas fa-angle-down scroll-down"></i>
      </a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background: url("../assets/header-bg.png") no-repeat center center / cover;
  color: #fff;
}

a {
  color: #fff;
}

a:not([class="logo"]):hover {
  color: #fff;
  text-decoration: none;
  opacity: 0.85;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding-top: 2rem;
  padding-bottom: 1rem;
}

.menu {
  list-style: none;
  width: 17rem;
}

.menu a {
  position: relative;
  font-weight: 700;
  font-size: 1.1rem;
}

.cart {
  cursor: pointer;
}

.header-text {
  text-align: center;
}

.header-text h1 {
  font-size: 3.8rem;
}

.header-text p {
  font-weight: 200;
  max-width: 38rem;
  margin: 0 auto;
  font-size: 1.4em;
  opacity: 0.9;
}

.scroll-down {
  font-size: 3.5rem;
  text-align: center;
  width: 100%;
  cursor: pointer;
  transition: 0.2s;
}

@media (max-height: 400px) {
  .container {
    height: 400px;
  }
}
</style>
