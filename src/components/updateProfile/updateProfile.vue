<template>
  <Navbar />
  <div class="wrapper">
    <div class="container ml-10">
      <div class="flex align-items-center">
        <router-link to="/">
          <h1 class="text-white">Home / </h1>
        </router-link>
        <router-link to="/about">
          <h1 class="text-white">About</h1>
        </router-link>
      </div>
    </div>
  </div>
  <div class="flex sm:px-2 md:px-5 lg:px-20 justify-center w-full cardContainer">
    <div class="w-full p-5 overflow-hidden shadow-lg bg-white card">
      <form @submit="checkForm" class="flex flex-col w-full justify-evenly h-full">
        <div class="flex justify-start">
          <h1 class="font-semibold">Your Details</h1>
        </div>
        <div class="flex items-start justify-between mt-10">
          <div class="w-96 mr-10">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              v-model="data.firstName"
              :class="[
                error?.firstName && !data.firstName
                  ? 'p-2 w-full   border border-red-700 rounded'
                  : 'p-2 w-full border rounded',
              ]"
            />
            <p v-if="error?.firstName && !data.firstName" class="text-red-700"
              >First Name is required</p
            >
          </div>
          <div class="w-96 mr-10">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              v-model="data.lastName"
              :class="[
                error?.lastName && !data.lastName
                  ? 'p-2 w-full   border border-red-700 rounded'
                  : 'p-2 w-full border rounded',
              ]"
            />
            <p v-if="error?.lastName && !data.lastName" class="text-red-700"
              >Last Name is required</p
            >
          </div>
          <div class="w-96 mr-10">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              v-model="data.email"
              :class="[
                error?.email && !data.email
                  ? 'p-2 w-full   border border-red-700 rounded'
                  : 'p-2 w-full border rounded',
              ]"
            />
            <p v-if="error?.email && !data.email" class="text-red-700">{{ error?.email }}</p>
          </div>
        </div>
        <div class="flex items-start mt-10 justify-between">
          <div class="w-96 mr-10">
            <select
              name="country"
              v-model="data.country"
              :class="[
                error?.country && !data.country
                  ? 'p-2 w-full   border border-red-700 rounded'
                  : 'p-2 w-full border rounded',
              ]"
            >
              <option value="" selected>Country</option>
              <option v-for="country in countries" :key="country.code" :value="country.code">
                {{ country.name }}
              </option>
            </select>
            <p v-if="error?.country && !data.country" class="text-red-700">Country is required</p>
          </div>
          <div class="w-96 mr-10">
            <input
              type="text"
              placeholder="State"
              name="state"
              v-model="data.state"
              :class="[
                error?.state && !data.state
                  ? 'p-2 w-full   border border-red-700 rounded'
                  : 'p-2 w-full border rounded',
              ]"
            />
            <p v-if="error?.state && !data.state" class="text-red-700">{{ error?.state }}</p>
          </div>
          <div class="w-96 mr-10">
            <input
              type="text"
              placeholder="City"
              name="city"
              v-model="data.city"
              :class="[
                error?.city && !data.city
                  ? 'p-2 w-full   border border-red-700 rounded'
                  : 'p-2 w-full border rounded',
              ]"
            />
            <p v-if="error?.city && !data.city" class="text-red-700">{{ error?.city }}</p>
          </div>
        </div>
        <div class="flex items-start justify-between w-full">
          <div class="">
            <div v-for="phone in phones" :key="phone.id" class="flex items-start mt-10 mb-10">
              <Country
                :value="phone.country.code"
                :countries="countries"
                :handleChange="handleCountryChange"
                :id="phone.id"
              />
              <Phone
                :handleChange="handlePhoneNumber"
                :error="error?.phone && !phones[0].phone ? error?.phone : false"
                :countryCode="phone.country"
                :id="phone.id"
              />
              <button
                v-if="phone.id !== phones[0].id"
                @click="deletePhone(phone.id)"
                type="button"
                class="btn p-2 w-30 mr-5 text-white"
                >Remove Number</button
              >
            </div>
          </div>
          <button type="button" @click="addPhone" class="btn-submit mt-10 mb-10 p-2 w-30 text-white"
            >+ Add Phone</button
          >
        </div>
        <div class="flex items-center">
          <button type="reset" class="btn p-2 w-30 mr-5 text-white">Cancel</button>
          <button type="submit" class="btn-submit p-2 w-30 text-white">Submit</button>
        </div>
        <ShowPhones :show="show" :phones="phones" />
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from '../navbar.vue';
import Country from './country.vue';
import countryCode from '../../assets/CountryCodes.json';
import Phone from './phone.vue';
import validator from 'validator';
import { generate } from 'randomized-string';
import ShowPhones from './table.vue';
export default {
  components: {
    Navbar,
    Country,
    Phone,
    ShowPhones,
  },
  data() {
    return {
      countries: countryCode,
      show: false,
      phones: [
        {
          id: generate(),
          phone: '',
          country: '',
        },
      ],
      data: {
        firstName: '',
        lastName: '',
        email: '',
        state: '',
        country: '',
        city: '',
      },
      error: {},
    };
  },
  methods: {
    handleCountryChange(e, id) {
      let value = e.target.value;
      this.phones.forEach((phone, index) => {
        if (id === phone?.id) {
          let country = this.countries.find((country) => country.code === value);
          this.phones[index].country = country;
        }
      });
    },
    handlePhoneNumber(e, id) {
      let value = e.target.value;
      this.phones.forEach((phone, index) => {
        if (id === phone?.id) {
          this.phones[index].phone = value;
        }
      });
    },
    addPhone() {
      let lastPhone = this.phones[this.phones.length - 1];
      this.phones.push({
        id: generate(),
        phone: '',
        country: lastPhone.country,
      });
    },
    checkForm(e) {
      e.preventDefault();
      let submit = true;
      for (let x in this.data) {
        if (!this.data[x]) {
          this.error[x] = `${x} is required`;
          submit = false;
        }
      }
      if (!this.error?.email) {
        let checkEmail = validator.isEmail(this.data.email);
        if (!checkEmail) {
          this.error['email'] = 'Please enter email proper format';
          submit = false;
        }
      }
      if (!this.phones[0].phone) {
        this.error.phone = 'At least one phone is required';
        submit = false;
      }
      if (!submit) {
        return;
      }
      this.show = true;
    },
    deletePhone(id) {
      this.phones = this.phones.filter((phone) => phone.id !== id);
    },
  },
};
</script>
<style scoped>
.wrapper {
  background-color: #6b021c;
  height: 30vh;
  z-index: 1;
  position: relative;
}
.cardContainer {
  position: absolute;
  margin-top: -100px;
  z-index: 2;
}
.card {
  min-height: 40vh;
}
.btn {
  background-color: #6b021c;
}
.btn-submit {
  background-color: #f6a6b3;
}
</style>
