<template>
    <h3>内联事件处理器2</h3>
    <div>{{ count }}</div>
    <button @click="addCount">Add</button>
</template>

<script>
export default{
    data() {
        return {
            count : 0
        }
    },
    methods: {
        addCount() {
            this.count += 1;
        }
    }
}
</script>