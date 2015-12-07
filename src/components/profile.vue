/**
 * Created by WangMing on 15/12/7.
 */
<template>
    <div>
        <input type="text" v-model="profile">
        <ul>
            <li>{{profile}}</li>
        </ul>
    </div>
</template>
<script>
    module.exports={
        data:{
            profile:"Hello profile"
        }
    }
</script>
<style>

</style>