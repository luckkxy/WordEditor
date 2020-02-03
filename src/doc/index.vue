<template>
    <div>
        <markdown @getData="getdata"></markdown>
    </div>
</template>
<script>
export default {
  name: 'doc',
  methods: {
    getdata (data, selction) {
      console.log(data) // 这个是编辑器里的内容
      console.log(selction) // 这个是鼠标选中的内容
    }
  }
}
</script>
