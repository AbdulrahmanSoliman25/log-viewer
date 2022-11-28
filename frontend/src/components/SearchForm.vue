<template>
  <div>
    <b-form inline>
      <b-form-input
        id="inline-form-input-path"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="path/to/file/in/logs/dir"
        v-model="val"
      ></b-form-input>
      <b-button variant="warning">view</b-button>
    </b-form>
  </div>
</template>

<script>
import { BFormInput, BForm, BButton } from "bootstrap-vue";
export default {
  name: "search-form",
  props: {
    value: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  computed: {
    val: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  components: {
    BFormInput,
    BForm,
    BButton,
  },
};
</script>

<style></style>
