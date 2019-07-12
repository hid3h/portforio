<template>
  <div class="container">
    <div>
      <logo />
      <div v-for="archive in archives" v-html="$md.render(archive.fields.body)">
      
      </div>
      <h1 class="title">nuxt</h1>
      <h2 class="subtitle">My epic Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    Logo,
  },
  async asyncData({ env }) {
    console.log('hello')
    const archives = await client.getEntries({
      content_type: env.CTF_ARCHIVES_TYPE_ID,
      order: '-sys.createdAt'
    })
    console.log(archives.items)
    return {
      archives: archives.items
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
