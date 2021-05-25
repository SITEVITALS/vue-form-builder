<template>
    <div class="section-container" :class="{'active': isDoingConfiguration}" ref="asd" :id="section.healine">
        <SectionNavigationBar :section="section" @active="setActive" v-if="editable" :sidebar="sidebar" />

        <component :is="sectionViewComponent"
                   :section.sync="section"
                   :rows="rows"
                   :controls.sync="controls"
                   :key="section.uniqueId"
                   :editable="editable"
                  />

    </div>
</template>

<script>
    import {SECTION_TYPES} from "@/configs/section";
    import SectionNavigationBar from "@/views/builder/SectionNavigationBar";

    export default {
        name: "SectionContainer",
        components: {SectionNavigationBar},
        props: {
            section: Object,
            rows: Object,
            controls: Object,
            editable: Boolean,
            sidebar: Boolean
        },
        data: () => ({
            isDoingConfiguration: false
        }),
        methods: {
            /**
             * Set Active in order to show the holder of current editing section
             * @param val
             */
            setActive(val = true) {
                this.isDoingConfiguration = val
            }
        },

        computed: {
            sectionViewComponent() {
                return SECTION_TYPES[this.section.type].builderView
            }
        },
    }
</script>

<style scoped>
</style>