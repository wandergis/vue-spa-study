/**
* Created by WangMing on 15/12/7.
*/
<template>
    <div>
        <input type="text" v-model="manager">
        <ul>
            <li>{{manager}}</li>
        </ul>
    </div>
</template>
<script>
    module.exports={
        data:{
            manager:"Hello manager"
        }
    }
</script>
<style>

</style>