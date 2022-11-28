<template>
  <div>
    <b-button-toolbar key-nav>
      <b-button-group>
        <b-button
          class="btn-icon"
          variant="outline-warning"
          :disabled="start < 10"
          @click="first"
        >
          <vue-feather type="chevrons-left"></vue-feather>
        </b-button>
        <b-button
          class="btn-icon"
          variant="outline-warning"
          :disabled="start < 10"
          @click="pre"
        >
          <vue-feather type="chevron-left"></vue-feather>
        </b-button>
      </b-button-group>
      <b-button-group>
        <b-button class="btn-icon" variant="outline-warning" @click="next">
          <vue-feather type="chevron-right"></vue-feather>
        </b-button>
        <b-button class="btn-icon" variant="outline-warning" @click="last">
          <vue-feather type="chevrons-right"></vue-feather>
        </b-button>
      </b-button-group>
    </b-button-toolbar>
  </div>
</template>

<script>
import { BButton, BButtonToolbar, BButtonGroup } from "bootstrap-vue";
export default {
  components: {
    BButton,
    BButtonToolbar,
    BButtonGroup,
  },
  computed: {
    start() {
      return this.$store.state.startLine;
    },
  },
  methods: {
    first() {
      this.$store.commit("setStartLine", 1);
      this.$store.dispatch("viewRequest");
    },
    pre() {
      this.$store.commit("setStartLine", this.start - 10);
      this.$store.dispatch("viewRequest");
    },
    next() {
      this.$store.commit("setStartLine", this.start + 10);
      this.$store.dispatch("viewRequest");
    },
    last() {
      this.$store.commit("setStartLine", undefined);
      this.$store.dispatch("viewRequest");
    },
  },
};
</script>

<style scoped>
.btn-toolbar {
  justify-content: space-between;
}
</style>
