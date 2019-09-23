<template>
    <div>
        <div class="card">
            <div class="card-header bg-primary text-white" @click="hidepanel=!hidepanel">
                <font-awesome-icon icon="plus" class="mr-3" /> Add Rating
            </div>
            <div class="card-body" :class="{'d-none': hidepanel}">
                <form id="ratingForm" @submit.prevent="requestAdd">
                    <div class="form-group form-row">
                        <label class="form-label col-md-2 col-form-label text-md-right">Store</label>
                        <div class="col-md-10">
                            <input 
                                type="text"
                                class="form-control"
                                name="storeName"
                                id="storeName"
                                placeholder="Store Name"
                                v-model="formData.storeName">
                        </div>
                    </div>
                    <div class="form-group form-row">
                        <label class="form-label col-md-2 col-form-label text-md-right">Location</label>
                        <div class="col-md-10">
                            <input 
                                type="text"
                                class="form-control"
                                name="storeLocation"
                                id="storeLocation"
                                placeholder="Store Location"
                                v-model="formData.storeLocation">
                        </div>
                    </div>
                    <div class="form-group form-row">
                        <label class="form-label col-md-2 col-form-label text-md-right">Name</label>
                        <div class="col-md-10">
                            <input 
                                type="text"
                                class="form-control"
                                name="author"
                                id="author"
                                placeholder="Name or Username"
                                v-model="formData.author">
                        </div>
                    </div>
                    <div class="form-group form-row">
                        <label class="form-label col-md-2 col-form-label text-md-right">Review</label>
                        <div class="col-md-10">
                            <textarea 
                                type="text"
                                class="form-control"
                                name="review"
                                id="review"
                                placeholder="Review of the Store"
                                v-model="formData.review">
                            </textarea>
                        </div>
                    </div>
                    <div class="form-group form-row">
                        <div class="offset-md-2 col-md-10">
                            <button type="submit" class="btn btn-primary d-block ml-auto">Add Rating</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
    name: "AddRating",
    data() {
        return {
            formData: [],
            hidepanel: true
        }
    },
    components: {
        FontAwesomeIcon
    },
    methods: {
        requestAdd: function() {
            this.formData = {
                storeName: this.formData.storeName,
                storeLocation: this.formData.storeLocation,
                author: this.formData.author,
                review: this.formData.review
            }
            console.log("this", this.formData)
            this.$emit("add", this.formData);
            this.formData=[];
            this.hidepanel = true;
        }
    }
}
</script>