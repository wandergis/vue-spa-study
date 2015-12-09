/**
* Created by WangMing on 15/12/9.
*/
<style>
    .services-panel{
        background-color: #673AB7;
        color: white;
        position: absolute;
        bottom: 0;
        right: 0;
        top: 57px;
        left: 150px;
    }
</style>

<template>
    <div class="services-panel">
        <h3>{{msg}}</h3>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                msg:"这是服务的页面"
            }
        }
    }
</script>