<script setup lang="ts"></script>

<template>
  <div class="greetings">
    <h3>Hi, I'm Daphne Lai</h3>
    <h1>
      I’m a designer who crafts gratifying experiences with storytelling and creative problem solving.
    </h1>
    <button type="button" class="button-txt" >❁ Let’s connect</button>

  </div>
  <div class="centre logo">
    <img alt="3D me" src="https://s3.us-east-2.amazonaws.com/daphnelai.github.io/3D-me.svg"/>
  </div>
</template>
<!-- testing -->
<style scoped>
.button-txt {
  color: #5F5A5A;
  font-family: "Instrument Sans";
  font-weight: 100;
  font-size: large;
  padding: 0.8rem 1.5rem;
  border-color: #CBC6C6;
  border-radius: 80rem;

}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.centre {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
