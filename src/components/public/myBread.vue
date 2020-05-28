<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{leaver1}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{leaver2}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: 'My-Bread',
  data () {
    return {}
  },
  props: [ 'leaver1', 'leaver2' ]
}
</script>
<style>

</style>
