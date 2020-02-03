<template>
    <div class="block">
        <input type='text' v-model="mvue" />
        <input type="button" value="确定" @click="getvalue" />
    </div>
</template>
<script>
export default {
  name: 'input',
  props: ['tranvalue'],
  data () {
    return {
      mvue: ''
    }
  },
  methods: {
    getvalue () {
      this.$emit('getv', this.mvue, this.tranvalue)
    }
  }
}
</script>
<style scoped>
.block{
    background:#fff;
    position:fixed;
}
</style>
