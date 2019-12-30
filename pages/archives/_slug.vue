<template>
  <div class="archive">
    <h1>{{ archive.fields.title }}</h1>
    <div class="text-right" v-if="archive.fields.oldCreatedAt">
      <p>{{ archive.fields.oldCreatedAt }}</p>
    </div>
    <div v-html="$md.render(archive.fields.body)"></div>
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
  }
}
</script>

<style>
</style>
