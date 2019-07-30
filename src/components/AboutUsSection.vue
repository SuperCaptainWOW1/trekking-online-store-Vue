<template>
  <section id="about-us">
    <div class="container">
      <p class="title">About us</p>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#about-us {
  background-color: #aa9b77;
  padding: 3.5rem 0;
}

.title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #837659;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  top: 0.9rem;
  background-color: #aa9b77;
  width: 8rem;
  margin: 0 auto;
}

.description {
  border: 2px solid #8376599d;
  padding: 4rem 8rem;
  text-align: center;
  font-weight: 700;
  width: 70%;
  margin: 0 auto;
  font-size: 1.05rem;
  color: #424242;
}

@media (max-width: 992px) {
  .description {
    padding: 3rem;
  }
}

@media (max-width: 768px) {
  .description {
    width: 100%;
  }
}
</style>
