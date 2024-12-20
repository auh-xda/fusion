<template>
  <Head title="Login"/>
  <div class="login-page bg-body-secondary">
    <div class="login-box">
      <div class="login-logo"><a href="../index2.html"><b>Admin</b>LTE</a></div> <!-- /.login-logo -->

      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>
          <form method="post" @submit.prevent="login">
            <text-input v-model="form.email" :error="form.errors.email" class="mt-10" label="Email" type="email" autofocus autocapitalize="off" />
            <text-input v-model="form.password" :error="form.errors.password" class="mt-6" label="Password" type="password" />
            <label class="flex items-center mt-6 select-none" for="remember">
              <input id="remember" v-model="form.remember" class="mr-1" type="checkbox" />
              <span class="text-sm">Remember Me</span>
            </label>

            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </form>
          <div class="social-auth-links text-center mb-3 d-grid gap-2">
            <p><b>- OR -</b></p> <br>
            <a href="" class="btn btn-dark"> <i class="bi bi-google me-2"></i> Sign in using Google</a>
          </div> <!-- /.social-auth-links -->
        </div> <!-- /.login-card-body -->
      </div>
    </div> <!-- /.login-box --> <!--begin::Third Party Plugin(OverlayScrollbars)-->
  </div>
</template>

<script>
import {Head} from '@inertiajs/vue3'
import Logo from '@/Shared/Logo.vue'
import TextInput from '@/Shared/TextInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: {
    Head,
    LoadingButton,
    Logo,
    TextInput,
  },
  data() {
    return {
      form: this.$inertia.form({
        email: 'johndoe@example.com',
        password: 'secret',
        remember: false,
      }),
    }
  },
  methods: {
    login() {
      this.form.post('/api/auth/login')
    },
  },
}
</script>
