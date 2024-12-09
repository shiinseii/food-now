<template>
  <div class="navbar" id="navbarNav">
    <ul class="navbar-nav" style="gap: 30px">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active-nav" href="#">Order</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav-item a {
  color: white;
}

.nav-item .active-nav {
  color: rgb(231, 126, 35);
}

.nav-item a:hover {
  color: rgb(231, 126, 35);
}
</style>
