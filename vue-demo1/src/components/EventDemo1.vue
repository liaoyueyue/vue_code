<template>
    <h3>内联事件处理器1</h3>
    <div>{{ count }}</div>
    <button v-on:click="count++">add</button>
</template>

<script>
export default{
    data() {
        return {
            count : 0
        }
    }
}
</script>