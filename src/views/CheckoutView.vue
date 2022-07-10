<template>
    <main class="wrapper">
        <form class="form-horizontal" @submit.prevent="handleSubmit()" v-if="!order_done">
            <h2>{{title}}</h2>
            <customInput 
            v-for="input in inputs"
            :type="input.type"
            :placeholder="input.placeholder"
            :label="input.label"
            v-model="input.value"
            />
            <div class="form-group">        
                <div class="col-sm-offset-2 col-sm-10">
                    <button class="btn btn-info">Checkout</button>
                </div>
            </div>
        </form>
        <div v-if="order_done" class="justify-content-center">Thank you for your order :)</div>
    </main>
</template>

<script lang="ts">
import customInput from '@/components/customInput.vue'
export default {
    name: 'CheckoutView',
    components: {
        customInput
    },
    data() {
        return {
            title: "Customer Info",
            inputs: [
                {
                    label: 'Email',
                    type: 'email',
                    value: '',
                    placeholder: 'Enter Your Email'
                },
                {
                    label: 'Phone',
                    type: 'text',
                    value: '',
                    placeholder: 'Enter Your Phone No.'
                },
                {
                    label: 'Name',
                    type: 'text',
                    value: '',
                    placeholder: 'Enter Your Name'
                },
                {
                    label: 'Address',
                    type: 'text',
                    value: '',
                    placeholder: 'Enter Your Address'
                }
            ],
            order_done: false
        }
    },
    methods: {
        handleSubmit() {
            console.log("Submit");
            console.log(this.inputs);
            this.order_done = true;
        }
    }
}
</script>