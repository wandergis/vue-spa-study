/**
* Created by WangMing on 15/12/7.
*/
<template>
    <div class="app-main">
        {{msg}}
        <input type="text" v-model="msg">
    </div>
</template>
<script>
    require("./assets/css/style.css");
    module.exports={
        data:{
            msg:"Hello Vue"
        }
    }
</script>
<style>
    .app-main{
        height: 200px;
        width: 100px;
        background-color: #40a070;
    }
</style>