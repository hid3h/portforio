<template>
  <div class="archive">
    <h1>{{ archive.fields.title }}</h1>
    
    <div>
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
    </div>
    
    <div class="text-right" v-if="archive.fields.oldCreatedAt">
      <p>{{ archive.fields.oldCreatedAt }}</p>
    </div>
    
    <div v-html="$md.render(archive.fields.body)"></div>
    
    <div>
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  async asyncData({ env, params, payload, error }) {
    if (payload) {
      return {
        archive: payload
      }
    }
    const archive = await client.getEntries({
      content_type: env.ctfArchivesTypeId,
      'fields.slug': params.slug,
      limit: 1
    })
    // console.log(archive.items)
    if (!archive.items) {
      error({ statusCode: 404, message: 'ページが見つかりません' })
    }
    return {
      archive: archive.items[0]
    }
  },
  head() {
    return {
      title: this.archive.fields.title,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        { hid: 'description', name: 'description', content: this.getDescription() },
        { hid: 'og:title', property: 'og:title', content: this.archive.fields.title },
        { hid: 'og:description', property: 'og:description', content: this.getDescription() },
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
      ]
    }
  },
  methods: {
    getDescription() {
      return this.$md.render(this.archive.fields.body).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').substr(0,100)
    }
  },
  mounted() {
    twttr.widgets.load();
  }
}
</script>

<style>
</style>
