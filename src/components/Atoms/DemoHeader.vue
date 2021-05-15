<template>
<div class="demo__header--wrapper">
  <header class="demo__header">
    <h1>{{ derivedTitle }}</h1>
  </header>
  <div class="demo__header--hero">
    <slot />
  </div>
</div>
</template>

<script>
export default {
  name: 'DemoHeader',
  props: { title: String },
  computed: {
    derivedTitle () {
      if (document) return document.title
      return this.title
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/tools';

.demo__header {
  h1,
  p {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1;
  }

  &--hero {
    margin: -0.75rem auto 0;
    padding: 0 $pad__x;
  }
}
</style>
