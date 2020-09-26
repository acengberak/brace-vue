<template>
  <div>
    <div class="container">
      <div class="row d-flex justify-content-center mx-auto">
        <div class="col-md-6 col-xs-12 div-style">
          <div class="card">
            <div class="card-body">
                <div class="alert alert-danger" role="alert" v-if="has_error && !success">
                  <h4 class="alert-heading"  v-if="error == 'registration_validation_error'">Validation Errors.</h4>
                  <p v-else>Error, can not register at the moment. If the problem persists, please contact an administrator.</p>
                </div>
              <form autocomplete="off" @submit.prevent="register" v-if="!success" method="post">
                <div class="d-flex justify-content-center mx-auto main-label">
                  <h2>Sign Up</h2>
                </div>
                <!-- Name -->
                <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.name }">
                  <input
                    type="text"
                    class="form-control text-box"
                    id="name"
                    aria-describedby="name"
                    placeholder="Enter name"
                    v-model="name"
                    
                  />
                   <span class="help-block" v-if="has_error && errors.name">{{ errors.name[0] }}</span>
                </div>
                <!-- Enmail -->
                <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.email }">
                  <input
                    type="email"
                    class="form-control text-box"
                    id="email"
                    placeholder="Email"
                    v-model="email"
                    
                  />
                   <span class="help-block" v-if="has_error && errors.email">{{ errors.email[0] }}</span>
                </div>
                <!-- Password -->
                <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">
                  <input
                    type="password"
                    class="form-control text-box"
                    id="password"
                    placeholder="Password"
                    v-model="password"
                    
                  />
                   <span class="help-block" v-if="has_error && errors.password">{{ errors.password[0] }}</span>
                </div>
                <!-- Confirm password -->
                <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password_confirmation }">
                  <input
                    type="password"
                    class="form-control text-box"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    v-model="password_confirmation"
                    
                  />
                  <span class="help-block" v-if="has_error && errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
                </div>
                <div class="form-group justify-content-center d-flex">
                  <button type="submit" class="btn btn-danger button-submit">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
          has_error: false,
          error: '',
          errors: {},
          success: false,
      }
  },
  methods: {
      register() {
          this.$auth.register({
              data: {
                  name: this.name,
                  email: this.email,
                  password: this.password,
                  password_confirmation: this.password_confirmation
              }
          }).then(() => {
              this.success = true
              this.$router.push({name: 'login', params: {successRegistrationRedirect: true}})
          },(res) => {
              console.log(res.response.data.error)
              this.has_error = true
              this.error = res.response.data.error
              this.errors = res.response.data.errors || {} 
          });
      }
  },
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped>
//
</style>