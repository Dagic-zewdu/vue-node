<template>
  <div class="flex w-full items-center justify-center min-h-screen bg-[#F7F8FA]">
    <div class="px-12 w-96 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
      <div class="flex flex-col justify-center gap-6">
        <h1 class="font-bold">LOGIN</h1>
        <form @submit="checkForm" class="flex flex-col gap-6 pb-4 mb-4">
          <div class="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              v-model="data.email"
              :class="[
                error?.email && !data.email
                  ? 'border border-red-300 p-2 rounded-md'
                  : 'border border-slate-300 p-2 rounded-md',
              ]"
              class=""
              name="email"
            />
            <p v-if="error?.email && !data.email" class="text-red-700">{{ error?.email }}</p>
          </div>
          <div class="flex flex-col gap-2">
            <label>Password</label>
            <input
              type="password"
              v-model="data.password"
              :class="[
                error?.password && !data.password
                  ? 'border border-red-300 p-2 rounded-md'
                  : 'border border-slate-300 p-2 rounded-md',
              ]"
              name="password"
            />
            <p v-if="error?.password && !data.password" class="text-red-700">{{
              error?.password
            }}</p>
            <div class="flex gap-2">
              <input type="checkbox" class="accent-[#E13D72]" name="remeber_me" />
              <p>Remember me?</p>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <button class="bg-[#E13D72] p-2 text-white rounded-md">LOGIN</button>
            <a href="#" class="text-right text-[#919191]">Forgot password?</a>
          </div>
          <div class="relative flex py-5 items-center">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink text-gray-400 border-2 p-2 rounded-lg">OR</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
        </form>

        <div class="flex gap-5 text-xl m-auto">
          <font-awesome-icon icon="fa-brands fa-google" />
          <font-awesome-icon icon="fa-brands fa-facebook" />
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </div>
        <div class="flex w-full items-center justify-center text-[#696969] gap-1">
          <p>Need an account?</p>
          <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: { email: '', password: '' },
      error: {},
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      let submit = true;
      for (let x in this.data) {
        if (!this.data[x]) {
          this.error[x] = `${x} is required`;
          submit = false;
        }
      }
      if (!submit) {
        return;
      }
    },
  },
};
</script>
