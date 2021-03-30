<template>
    <div class="add-section-container" :class="styles.COLUMNS.COL12">

<!--         <button :class="styles.BUTTON.PRIMARY + ' config-button'"
                    title="Add Section"
                     @click="showOption"
                    v-html="$form.getIcon('addOutline', '32px', '32px', '#000')"></button> -->

        <!-- <p>
            <span v-html="$form.getIcon('addOutline', '32px', '32px', '#000')"></span>
            <span>Add Section</span>
        </p> -->

        <div :class="[styles.LIST_GROUP.CONTAINER, 'add-container-list'] + ' section-types'" v-show="show">

            <button :title="sectionInfo.description" class="section-type" v-for="(sectionInfo, sectionKey) in sectionTypes" @click="addNew(sectionKey)">
                {{ sectionInfo.name }}
            </button>

            <!-- <a href="javascript:void(0)"
               :class="styles.LIST_GROUP.SINGLE_ITEM"
               v-for="(sectionInfo, sectionKey) in sectionTypes"
               @click="addNew(sectionKey)">

                <p class="type-headline" v-text="sectionInfo.name"></p>
                <p class="type-desc" v-text="sectionInfo.description"></p>
            </a> -->

        </div>
    </div>
</template>

<script>
    import {STYLES} from "@/configs/styles";
    import {SECTION_TYPES} from "@/configs/section";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

    export default {
        name: "AddSectionControl",
        mixins: [STYLE_INJECTION_MIXIN],
        data: () => ({
            show: true,
            sectionTypes: SECTION_TYPES
        }),
        methods:{
            showOption() {
                this.show = !this.show;
            },
            addNew(type) {
                this.$emit('addSectionNotify', type)
            }
        }
    }
</script>
