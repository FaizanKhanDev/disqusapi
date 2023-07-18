<template>
  <v-container>
    <section class='comments' aria-labelledby="comment">
      <h2 id="comment">Comments</h2>
      <Disqus />
    </section>

  </v-container>
</template>

<script>
import { Disqus } from 'vue-disqus'
export default {
  name: 'IndexPage',
  components: {
    Disqus
  }
}
</script>
