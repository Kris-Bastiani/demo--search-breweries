<template>
<footer class="demo__footer">
  <p v-if="author">Solution by {{ author }}</p>
  <p>&copy; {{ year }}</p>
</footer>
</template>

<script>
export default {
  name: 'DemoFooter',
  props: { author: String },
  data: () => ({ year: new Date().getFullYear() })
}
</script>
