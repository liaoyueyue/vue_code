<script setup>
import { ref } from 'vue';
import { getAllProblems, searchProblems } from '@/api/problem';

const problems = ref([]);
const searchConditions = ref({ level: '', title: '' });

async function fetchData() {
    problems.value = await getAllProblems();
}
fetchData();

async function search() {
    if (!searchConditions.value.level) {
        alert("请选择题目等级");
        return;
    }
    problems.value = await searchProblems(searchConditions.value);
}
</script>


<template>
    <div>
        <label for="level">题目等级：</label>
        <select id="level" v-model="searchConditions.level" required>
            <option value="" disabled selected hidden>请选择</option>
            <option value="简单">简单</option>
            <option value="中等">中等</option>
            <option value="困难">困难</option>
        </select>
        题目标题：<input type="text" v-model="searchConditions.title">
        <button type="button" @click="search">搜索</button>
    </div>
    <br>
    <br>
    <table>
        <tr>
            <th>编号</th>
            <th>标题</th>
            <th>等级</th>
            <th>操作</th>
        </tr>
        <tr v-for="item in problems" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.level }}</td>
            <td>
                <button type="button">编辑</button>
                <button type="button">删除</button>
            </td>
        </tr>
    </table>
</template>

<style scoped>
table {
    border-collapse: collapse;
    border: 1px solid black;
    /* 表格边框 */
}

th,
td {
    border: 1px solid black;
    /* 单元格边框 */
    padding: 8px;
    /* 单元格内边距 */
}
</style>