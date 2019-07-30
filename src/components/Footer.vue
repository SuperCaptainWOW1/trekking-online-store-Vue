<template>
  <div id="footer">
    <div class="container d-flex justify-content-between align-items-center flex-wrap">
      <div class="description">
        <span class="description__title">trekking</span>
        <p
          class="description__text"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <nav class="menu">
        <ul>
          <li class="menu__item">credits</li>
          <li class="menu__item_line">|</li>
          <li class="menu__item">privacy</li>
          <li class="menu__item_line">|</li>
          <li class="menu__item">about</li>
          <li class="menu__item_line">|</li>
          <li class="menu__item">contact</li>
        </ul>
        <span class="menu__signature">
          Design by
          <a href="https://www.gianlucacosetta.com/">gianlucca cosetta</a>
        </span>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  background-color: #424242;
  padding: 8rem 0;
  color: #fff;
}

.description {
  width: 33%;
}

.description__title {
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 700;
}

.description__text {
  margin-top: 0.7rem;
  margin-bottom: 0;
  text-transform: uppercase;
  font-size: 0.78rem;
  line-height: 1.6rem;
  color: #eee;
}

.menu {
  width: 33%;
  text-align: right;
}

.menu ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.menu__item {
  cursor: pointer;
  transition: 0.2s;
}

.menu__item:hover {
  color: #aa9b77;
}

.menu__item_line {
  color: #aa9b77;
}

.menu__signature {
  font-size: 1.2rem;
  font-weight: 700;
}

.menu__signature a {
  color: #fff;
  transition: 0.1s;
  text-decoration: none;
}

.menu__signature a:hover {
  color: #aa9b77;
}

@media (max-width: 1200px) {
  .description {
    width: 40%;
  }
  .menu {
    width: 40%;
  }
}

@media (max-width: 992px) {
  .description {
    width: 47%;
  }
  .menu {
    width: 47%;
  }
}

@media (max-width: 768px) {
  #footer {
    padding: 5rem 0;
  }
  .description {
    text-align: center;
    width: 100%;
  }
  .menu {
    margin-top: 6rem;
    width: 100%;
    text-align: center;
  }
  .menu ul {
    width: 85%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
}
</style>
