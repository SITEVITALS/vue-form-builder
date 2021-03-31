<template>
    <SidebarToggleableContainer headline="Basic Detail">
        <!-- <div :class="styles.FORM.FORM_GROUP">
            <label>Unique ID</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" :value="control.uniqueId" readonly>
        </div> -->

        <!-- <div :class="styles.FORM.FORM_GROUP">
            <label>Name (Must be unique)</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.name">
        </div> -->

        <div :class="styles.FORM.FORM_GROUP + ' input-configuration'">
            <div>Label</div>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.label" placeholder="Input Title">
        </div>

        <!-- <div :class="styles.FORM.FORM_GROUP">
            <label>Sub-label</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.subLabel">
        </div> -->

        <div :class="styles.FORM.FORM_GROUP + ' input-configuration'">
            <div>Placeholder</div>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.placeholderText" placeholder="Placeholder">
        </div>

        <div :class="styles.FORM.FORM_GROUP + ' input-configuration'">
            <div>Default</div>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.defaultValue" placeholder="Default Value">
        </div>

        <div :class="styles.FORM.FORM_GROUP + ' input-configuration'">
            <div>Field Required <input type="checkbox" value="true" v-model="required"> </div>
            <!-- <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.defaultValue" placeholder="Default Value"> -->
        </div>


        
        
        <!-- <div :class="styles.FORM.FORM_GROUP">
            <label>
                Show Title?
                <input type="checkbox" v-model="control.isShowLabel">
            </label>
        </div> -->


    </SidebarToggleableContainer>
</template>

<script>
    import SidebarToggleableContainer from "@/views/container-views/SidebarToggleableContainer";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

    export default {
        name: "ControlBasicInformation",
        mixins: [STYLE_INJECTION_MIXIN],
        components: {SidebarToggleableContainer},
        props: {
            control: Object
        },
        data: () => ({
            required: false,
        }),
        watch: {
            required(value) {
                if (value) {
                    let validations = [
                        {
                            additionalValue: "",
                            errorMessage: "This field is required",
                            ruleType: "required"
                        }
                    ];
                    this.control.validations = validations

                } else {
                    this.control.validations = []
                }
            }
        },
        mounted() {
            this.required = this.control.validations.length ? true : false;
        }
    };
</script>

<style scoped>

</style>