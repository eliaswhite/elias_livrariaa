<template>
  <header>
    <div>
      <span> <RouterLink to="/editoras">Editoras</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/categorias">Categorias</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/autores">Autores</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/livros">Livros</RouterLink> </span>
    </div>
  </header>
</template>

<style>
header span {
  padding: 0 20px;
}

header {
  background-color: #14211d;
  height: 15%;
  font-size: 1.5rem;
  padding-left: 2rem;
  color: #fca312;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>