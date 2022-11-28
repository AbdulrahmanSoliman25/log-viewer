<template>
  <div>
    <b-container>
      <b-card class="text-center" title="please login to view the logs">
        <b-form @submit.prevent>
          <b-row align-v="center">
            <b-col cols="12">
              <b-form-group
                label="User Name"
                label-for="hi-user-name"
                label-cols-md="4"
              >
                <b-input-group class="input-group-merge">
                  <b-input-group-prepend is-text>
                    <vue-feather type="user"></vue-feather>
                  </b-input-group-prepend>
                  <b-form-input
                    id="hi-user-name"
                    v-model="username"
                    placeholder="user name"
                    required
                  />
                </b-input-group>
                <b-form-invalid-feedback :state="validateUsername">
                  Your username is admin.
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validateUsername">
                  Looks Good.
                </b-form-valid-feedback>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group
                label="Password"
                label-for="hi-password"
                label-cols-md="4"
              >
                <b-input-group class="input-group-merge">
                  <b-input-group-prepend is-text>
                    <vue-feather type="lock"></vue-feather>
                  </b-input-group-prepend>
                  <b-form-input
                    id="hi-password"
                    v-model="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <b-form-invalid-feedback :state="validatePassword">
                    Your password is admin.
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validatePassword">
                    Looks Good.
                  </b-form-valid-feedback>
                </b-input-group>
              </b-form-group>
            </b-col>
            <!-- submit and reset -->
            <b-col offset-md="4">
              <b-button
                type="submit"
                variant="primary"
                class="mr-1"
                @click="Login"
              >
                login
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import {
  BFormGroup,
  BFormInput,
  BForm,
  BButton,
  BInputGroup,
  BInputGroupPrepend,
  BRow,
  BCol,
} from "bootstrap-vue";
export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BForm,
    BButton,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    validateUsername() {
      return this.username == "admin";
    },
    validatePassword() {
      return this.password == "admin";
    },
  },
  methods: {
    Login() {
      //   Validations : Should be actual validations
      if (this.username == "admin" && this.password == "admin") {
        this.$store.dispatch("isLoggedAction", true);
        this.$router.push({ name: "Home" });
      } else {
        return false;
      }
    },
  },
};
</script>
