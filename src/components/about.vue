/**
* Created by WangMing on 15/12/9.
*/
<style>
    .about-panel{
        background-color: #E91E63;
        color: white;
        position: absolute;
        bottom: 0;
        right: 0;
        top: 57px;
        left: 150px;
    }
</style>

<template>
    <div class="about-panel">
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                msg:"这是关于的页面"
            }
        }
    }
</script>