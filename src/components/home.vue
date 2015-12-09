/**
* Created by WangMing on 15/12/9.
*/
<style>

</style>

<template>
    <div>
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