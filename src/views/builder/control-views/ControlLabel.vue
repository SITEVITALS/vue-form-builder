<template>
    <div class="control-label-container">

        <template v-if="editable">

            <div :for="control.uniqueId" :class="control.additionalLabelClass" v-click-outside="hide"  id="asd"
                ref="input_title" v-on:keyup.13="hide" @keydown.enter.prevent :contenteditable="content"
                @input="onInput"
                @click="toggle">{{ dummy }}</div>
                
        </template>
        <template v-else>
            
            <label v-text="control.label"
                   :for="control.uniqueId"
                   :class="control.additionalLabelClass">
            </label>
            
        </template>




        <br v-if="control.subLabel" />
        <small v-if="control.subLabel"
               v-text="control.subLabel">
        </small>
    </div>
</template>

<script>
    import ClickOutside from 'vue-click-outside'
    export default {
        name: "ControlLabel",
        props: {
            control: {
                type: Object,
                required: true
            },
            editable: Boolean
        },
        data: () => ({
            content: true,
            dummy: null
        }),
        methods: {
            onInput(e) {
                this.$set(this.control, 'label', this.$refs.input_title.innerHTML)
            },
            onRemove() {
                this.$set(this.control, 'label', this.$refs.input_title.innerHTML)
            },
            toggle () {
                // alert()
                this.content = true
            },
            hide () {
                this.$set(this.control, 'label', this.$refs.input_title.innerHTML)
                this.content = false
                setTimeout(() => { this.content = true }, 500);
            }
        },
        mounted() {
            this.dummy = this.control.label
        },
        directives: {
            ClickOutside
        }
    };
</script>

<style scoped>

</style>