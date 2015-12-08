/**
* Created by WangMing on 15/12/7.
*/
<template>
    <div>
        <p>{{foo}}</p>
        <router-view></router-view>
    </div>
</template>
<script>
    module.exports={
        data: function () {
            return {
                foo:"Hello foo"
            }
        }
    }
</script>
<style>

</style>