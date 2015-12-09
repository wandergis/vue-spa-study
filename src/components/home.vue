/**
* Created by WangMing on 15/12/9.
*/
<style>
    .home-panel{
        background-color: #FFEB3B;
        color: white;
        position: absolute;
        bottom: 0;
        right: 0;
        top: 57px;
        left: 150px;
    }
</style>

<template>
    <div class="home-panel">
        <h1>{{msg}}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                msg:"这是主页的页面"
            }
        }
    }
</script>