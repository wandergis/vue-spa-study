/**
* Created by WangMing on 15/12/9.
*/
<style>
.contact-panel{
    background-color: #F44336;
    color: white;
    position: absolute;
    bottom: 0;
    right: 0;
    top: 57px;
    left: 150px;
}
</style>

<template>
    <div class="contact-panel">
        <h3>{{msg}}</h3>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                msg:"这是联系的页面"
            }
        }
    }
</script>