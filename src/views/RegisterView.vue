<script>
import axios from 'axios'
export default {
  data() {
    return {
      userForm: {
        password: '',
        profileName: '',
        username: ''
      }
    }
  },
  methods: {
    async doRegister() {
      try {
        const { data } = await axios.post(import.meta.env.VITE_BASE_URL + '/auth/register', this.userForm)
        if (data.status == 'OK') {
          this.$router.push('/login')
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<template>
  <div className="lg:flex">
    <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
      <div className="max-w-7xl transform duration-200 hover:scale-110 cursor-pointer mix-blend-multiply">
        <img
          src="https://img.freepik.com/free-vector/cyber-security-risk-analysts-team-reduce-risks-cyber-security-management-cyber-security-risk-management-strategy-concept_335657-1828.jpg?w=1060&t=st=1673159222~exp=1673159822~hmac=cf06e6825bb82b4fb3319504496412459cde4f4ace4e624257892d727949c88e"
          alt="dashboard" className="w-[100%] mx-auto" />
      </div>
    </div>
    <div className="lg:w-1/2 xl:max-w-screen-sm">
      <div className="py-3 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div></div>
          <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
            Dashboard Admin
          </div>
        </div>
      </div>
      <div className="px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl mt-40">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold mt-40">
          Sign Up
        </h2>
        <div className="mt-12">
          <form @submit.prevent="doRegister">
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                username
              </div>
              <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text" placeholder="joedoe27" name="username" v-model="userForm.username" />
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Profile Name
              </div>
              <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text" placeholder="joedoe" name="profileName" v-model="userForm.profileName" />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
              </div>
              <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password" name="password" placeholder="Enter your password" v-model="userForm.password" />
            </div>

            <div className="mt-10">
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
                type="submit">
                Register
              </button>
            </div>
          </form>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Already have an account ?
            <a @click.prevent="$router.push('/login')"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign
              In</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
