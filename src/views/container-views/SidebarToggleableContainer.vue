<template>
    <div :class="'toggleable-section ' + addClass">
        <!-- <div class="headline-block">
            <h5>
                <span class="toggle-item"
                      v-html="isVisible ? iconClose : iconOpen"
                      @click="isVisible = !isVisible">
                </span>

                <span v-text="headline"></span>

                <small class="toggleable-sub-headline" v-text="subHeadline"></small>
            </h5>
        </div> -->

        <transition name="slide">
            <div v-show="isVisible">
                <slot />
            </div>
        </transition>
    </div>
</template>

<script>
    import {TOGGLEABLE_MIXIN} from "@/mixins/toggleable-mixin";

    /**
     * Normal ToggleableContainer to use anywhere
     * Not used for Toggleable Renderer...
     */
    export default {
        name: "SidebarToggleableContainer",
        mixins: [TOGGLEABLE_MIXIN],
        props: {
            headline: {
                type: String,
            },
            subHeadline: {
                type: String,
            },
            initialOpen: {
                type: Boolean,
                default: true
            },
            addClass: {
                type: String,
                default: 'custom-toggle'
            }
        },

        created() {
            if (!this.initialOpen) {
                this.isVisible = false
            }
        }
    }
</script>