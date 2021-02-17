<template>
    <div class="normal-section">
        <div class="headline-block p5" v-show="section.isShowHeadline">
            <!-- <h2 :class="section.headlineAdditionalClass" v-text="section.headline"></h2> -->
            <!-- <p contenteditable="true" @keydown.enter.prevent>{{ section.headline }}</p> -->

            <div>
                <h2>
                    <span v-click-outside="hide" ref="section_title" v-on:keyup.13="hide" 
                    @input="onInput"
                    @keydown.enter.prevent :contenteditable="content" @click="toggle">{{ dummy }}</span>
                </h2>
                <!-- <div v-show="opened">Popup item</div> -->
            </div>

            <!-- <p :class="section.subHeadlineAdditionalClass" v-text="section.subHeadline"></p> -->
        </div>

        <draggable
                :class="draggableClasses"
                ghost-class="ghost"
                :handle="dragControlHandle"
                :list="section.controls"
                :group="dragGroup">

            <ControlView v-for="controlId in section.controls"
                         :key="controlId"
                         :control.sync="controls[controlId]"
                         :parent-id="section.uniqueId"
                         :editable="editable" />

            <p v-if="!hasControl">
                Droppable Zone / Controls will be showed here...
            </p>
        </draggable>

        <!-- Add Control -->
        <AddControlControl :section="section" v-if="editable" />
    </div>
</template>

<script>
    import ClickOutside from 'vue-click-outside'

    import {SECTION_VIEW_MIXINS} from "@/mixins/section-view-mixins";

    /**
     * @property {Object} section
     * @property {Object} rows RowId - RowData
     * @property {Object} controls ControlId - ControlData
     * @property {Array} section.rows
     * @property {Array} section.controls
     */
    export default {
        name: "NormalSectionView",
        props: {
            editable: Boolean,
        },
        mixins: [SECTION_VIEW_MIXINS],
        data: () => ({
            content: true,
            dummy: null
        }),
        methods: {
            onInput(e) {
                this.$set(this.section, 'headline', this.$refs.section_title.innerHTML)
            },
            toggle () {
                // alert('toggle')
                this.content = true
            },
            hide () {
                // alert()
                this.$set(this.section, 'headline', this.$refs.section_title.innerHTML)
                this.content = false
                setTimeout(() => { this.content = true }, 500);
                
                // this.section.headline = this.$refs.section_title.innerHTML
                // this.opened = false
            }
        },

        mounted() {
            this.dummy = this.section.headline
        },

        directives: {
            ClickOutside
        }

    }
</script>
