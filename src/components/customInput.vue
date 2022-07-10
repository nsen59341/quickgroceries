<template>
    <div class="form-group">
        <label class="control-label col-sm-3">{{label}}</label>
        <div class="col-sm-9"><input :type="type" :placeholder="placeholder" v-model="inputValue" /></div>
    </div>
</template>
<style>
    input {
        margin: 10px;
        display: block;
    }
</style>
<script lang="ts">
     export default {
        props: ['label','type','placeholder','modelValue'],
        computed: {
            inputValue: {
                get(){
                    return this.modelValue;
                },
                set(val){
                    this.$emit("update:modelValue", val);
                }
            }
        }
     }
</script>