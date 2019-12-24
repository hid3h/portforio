<template>
  <div>
    <blog-list :prop-archives="archives" />
    <div class="mb-20"></div>
    <!-- <timeline-embedded/> -->
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import BlogList from '~/components/organisms/BlogList'
import TimelineEmbedded from '~/components/organisms/TimelineEmbedded'

const client = createClient()

export default {
  components: {
    BlogList,
    TimelineEmbedded
  },
  async asyncData({ env }) {
    const archives = await client.getEntries({
      content_type: env.ctfArchivesTypeId,
      order: '-sys.createdAt'
    })
    return {
      archives: archives.items
    }
  },
  head() {
    return {
      script: [
        {
          src:'https://platform.twitter.com/widgets.js',
          async: true,
          charset: "utf-8"
        }
      ]
    }
  }
}
</script>

<style>
</style>
