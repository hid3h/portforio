<template>
  <a-layout>
    <a-layout-header><h1><router-link to="/">踊りながらWebサービスを個人開発している人のブログ</router-link></h1></a-layout-header>
    <a-layout-content>
      <nuxt />
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<style>
.ant-layout-header {
  background: #FFF;
  margin-bottom: 10px;
}

.ant-layout-content {
  max-width: 620px;
  background: #FFF;
  margin: 0 auto;
  padding: 15px;
}

.ant-layout {
  background: #fafafa;
}

h1 {
  font-size: 18px;
}
h2 {
  font-size: 16px;
}
</style>
