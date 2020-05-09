<template>
  <div class="blog-list">
    <a-list itemLayout="horizontal" :dataSource="propArchives" header="Blog">
      <a-list-item slot="renderItem" slot-scope="item">
        <h2>
          <router-link :to="'/archives/' + item.fields.slug">{{item.fields.title}}</router-link>
        </h2>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  props: {
    propArchives: {
      type: Array
    }
  }
}
</script>

<style scoped>
.v-list__tile {
  height: auto;
}

h2 {
  font-size: 18px; /* Medium */
}
</style>


