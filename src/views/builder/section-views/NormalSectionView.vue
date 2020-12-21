<template>
    <div class="normal-section">
        <div class="headline-block p5" v-show="section.isShowHeadline">
            <!-- <h2 :class="section.headlineAdditionalClass" v-text="section.headline"></h2> -->
            <p contenteditable="true" @keydown.enter.prevent>{{ section.headline }}</p>

            <div>
                <div v-click-outside="hide" @click="toggle">Toggle</div>
                <div v-show="opened">Popup item</div>
            </div>

            <!-- <p :class="section.subHeadlineAdditionalClass" v-text="section.subHeadline"></p> -->
        </div>

        <!--- SHOW CONTROLS WITH SORTABLE --->
        <draggable
                :class="draggableClasses"
                ghost-class="ghost"
                :handle="dragControlHandle"
                :list="section.controls"
                :group="dragGroup">

            <ControlView v-for="controlId in section.controls"
                         :key="controlId"
                         :control="controls[controlId]"
                         :parent-id="section.uniqueId" />

            <p v-if="!hasControl">
                Droppable Zone / Controls will be showed here...
            </p>
        </draggable>

        <!-- Add Control -->
        <AddControlControl :section="section" />
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
        mixins: [SECTION_VIEW_MIXINS],
        data: () => ({
            opened: false
        }),
        methods: {
            toggle () {
                this.opened = true
            },
            hide () {
                this.opened = false
            }
        },

        mounted () {
            this.popupItem = this.$el
        },

        directives: {
            ClickOutside
        }

    }
</script>
