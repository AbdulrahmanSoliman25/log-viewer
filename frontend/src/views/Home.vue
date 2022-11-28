<template>
  <div class="home" style="width: 100%">
    <div class="mb-3">
      <b-form inline>
        <b-form-input
          id="inline-form-input-path"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="path/to/file/ex:(log-sample)"
          v-model="path"
        ></b-form-input>
        <b-button variant="warning" @click="view">view</b-button>
      </b-form>
    </div>
    <TextArea v-model="content" />
    <Navigation class="mt-3" />
  </div>
</template>

<script>
import TextArea from "@/components/TextArea.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Home",

  components: {
    TextArea,
    Navigation,
  },

  computed: {
    content() {
      return this.$store.getters.getContent;
    },
  },
  data() {
    return {
      path: "",
      height: 300,
      resize: "both",
      width: 450,
    };
  },
  methods: {
    view() {
      this.$store.commit("setPath", this.path);
      this.$store.dispatch("viewRequest");
    },
  },
};
</script>
<style scoped>
.form-inline {
  justify-content: space-between;
}
</style>
