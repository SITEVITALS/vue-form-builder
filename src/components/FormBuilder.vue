<template>
    <div :class="[styles.CONTAINER.FLUID, 'form-padding', 'vue-form-builder']">
        <!-- top configuration -->
        <FormConfiguration v-model="formData.formConfig" />

        <!-- form headline -->
        <div class="form-headline-container" v-show="formData.formConfig.isShowHeadline">
            <h1 v-text="formData.formConfig.headline"></h1>
            <p v-text="formData.formConfig.subHeadline"></p>
        </div>

        <!-- sections of the form -->
        <SectionContainer v-for="(sectionData) in sortedSections"
                          :section.sync="sectionData"
                          :rows="formData.rows"
                          :controls.sync="formData.controls"
                          :key="sectionData.uniqueId"
                          :editable="editable"
        />

        <!-- below all -->
        <AddSectionControl @addSectionNotify="addSection" v-if="editable" />

        <!-- global stuff -->
        <GlobalSidebar :formData="formData" v-if="editable" />

        <!-- <hr> -->
        <!-- <p class="copyright-text" v-text="copyrightText"></p> -->
        
    </div>
</template>

<script>
    import AddSectionControl from "@/views/builder/add-controls/AddSectionControl";
    import {MAIN_CONSTANTS} from "@/configs";
    import SectionContainer from "@/views/builder/SectionContainer";
    import FormBuilderBusiness from "@/mixins/form-builder-mixins";
    import FormConfiguration from "@/views/builder/FormConfiguration";
    import GlobalSidebar from "@/views/builder/GlobalSidebar";

    export default {
        name: "FormBuilder",
        components: {
            GlobalSidebar,
            FormConfiguration,
            SectionContainer,
            AddSectionControl
        },
        props: {
            editable: {
                type: Boolean,
                default: true
            }
        },
        mixins: FormBuilderBusiness,
        data: () => ({
            formData: {
                formConfig: {},
                sections: {},
                rows: {},
                controls: {},
            },
        }),

        created() {
            if (this.value && typeof this.value === 'object') {
                this.mapping(this.value)
            } else {
                this.createDefaultData()
            }
        },

        computed: {
            /**
             * Copyright Text
             * @returns {string}
             */
            copyrightText() {
                return MAIN_CONSTANTS.COPYRIGHT
            }
        },
        mounted() {
            // console.log('form-builder')
        }
    };
</script>
