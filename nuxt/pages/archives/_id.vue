<template>
  <div>
    <h1>{{ archive.fields.title }}</h1>
    <div>{{ archive.fields.body }}</div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  async asyncData({ env, params }) {
      console.log(params.id)
    const archive = await client.getEntry("1w86cH51mRtlT9oTs26sLg");
    return {
      archive: archive
    }
  }
}
</script>

<style>
</style>
