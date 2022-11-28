<template>
  <div class="lined-textarea">
    <div class="lined-textarea__lines" style="padding-right: 50px">
      <div class="lined-textarea__lines__inner" ref="lines">
        <p
          v-for="(line, index) in lines"
          :key="index"
          class="lined-textarea__lines__line"
          v-html="line"
        ></p>
      </div>
    </div>
    <textarea
      disabled="disabled"
      class="lined-textarea__content 'lined-textarea__content--disabled' lined-textarea__content--nowrap"
      v-model="value"
      style="
        height: 375px;
        display: block;
        width: 100%;
        resize: both;
        font-size: 20px;
        line-height: 175%;
      "
      ref="textarea"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "Textarea",
  data() {
    return {};
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    lines() {
      let nums = [];
      let start = this.$store.state.startLine;
      for (let index = start; index <= start + 9; index++) {
        nums.push(index);
      }
      return nums;
    },
  },
};
</script>

<style scoped>
.lined-textarea {
  display: flex;
  font-size: 13px;
  line-height: 150%;
  font-family: Helvetica, monospace;
}

.lined-textarea__lines {
  background-color: #f0f0f0;
  border: 1px solid #d7e2ed;
  border-radius: 10px 0 0 10px;
  border-right-width: 0;
  padding: 15px 10px 15px 15px;
  overflow: hidden;
  position: relative;
}

.lined-textarea__lines__inner {
  position: absolute;
}

.lined-textarea__lines__line {
  text-align: right;
}

.lined-textarea__lines__line--invalid {
  font-weight: bold;
  color: red;
}
.lined-textarea__content {
  border: 1px solid #d7e2ed;
  border-radius: 0 10px 10px 0;
  border-left-width: 0;
  margin: 0;
  line-height: inherit;
  font-family: monospace;
  padding: 10px;
  width: 100%;
  overflow: auto;
}

.lined-textarea__content--wrap {
  white-space: pre-wrap;
}

.lined-textarea__content--nowrap {
  white-space: pre;
}

@supports (-ms-ime-align: auto) {
  .lined-textarea__content--nowrap {
    white-space: nowrap;
  }
}

.lined-textarea__content--disabled {
  border-radius: 10px;
  border-left-width: 1px;
}

.lined-textarea__content:focus {
  outline: none;
}
</style>
