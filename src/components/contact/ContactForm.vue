<template>
  <div class=" p-7 lg:p-8  bg-white lg:shadow-md lg:w-[500px] lg:drop-shadow-xl">
    <h1 class="text-[#213430] font-semibold text-lg lg:text-2xl lg:pb-3">
      Fill the Form Below
    </h1>

    <form
      action=""
      ref="form"
      @change="validateInputs"
      @submit="handleSubmit"
      class="text-[#213430] space-y-4"
    >
      <div class="flex flex-col lg:flex-row gap-4">
        <div class="flex flex-col  space-y-2">
          <label for="name" class=" text-sm lg:text-base font-medium"> Name </label>

          <input
            type="text"
            class="border border-[#DDDDDD] rounded-md w-full"
            id="name"
            name="from_name"
            v-model.trim="name"
            @input="validateName"
            placeholder="Your Name"
          />
          <p class="text-sm text-red-500" v-if="nameValidity === 'invalid'">
            Please Fill Your Name
          </p>
        </div>
        <div class="flex flex-col space-y-2">
          <label for="email" class=" text-sm lg:text-base font-medium"> Email </label>

          <input
            type="email"
            name="email_id"
            class="border border-[#DDDDDD] rounded-md w-full"
            v-model.trim="email"
            id="email"
            placeholder="Your Email"
            @input="validateEmail"
          />
          <p class="text-sm text-red-500" v-if="emailValidity === 'invalid'">
            Please Fill Your Email
          </p>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-4">
        <div class="flex flex-col space-y-2">
          <label for="phone" class=" text-sm lg:text-base font-medium"> Phone </label>

          <input
            type="number"
            name="phone_no"
            class="border border-[#DDDDDD] rounded-md w-full"
            v-model.trim="phone"
            id="phone"
            placeholder="Your Phone"
          />
        </div>
        <div class="flex flex-col space-y-2">
          <label for="subject" class=" text-sm lg:text-base font-medium"> Subject </label>

          <input
            type="text"
            name="subject"
            class="border border-[#DDDDDD] rounded-md w-full"
            v-model.trim="subject"
            id="subject"
            placeholder="Your Subject"
            @input="validateSubject"
          />
          <p class="text-sm text-red-500" v-if="subjectValidity === 'invalid'">
            Please Fill Subject
          </p>
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <label for="message " class=" text-sm lg:text-base font-medium">Message</label>
        <!---------- textarea For Desktop View  ----------------->
        <textarea
          name="message"
          id="message"
          v-model.trim="message"
          placeholder="Enter Your Message"
          key=""
          class="border hidden lg:block border-[#DDDDDD] rounded-md w-full"
          cols="30"
          rows="10"
          @input="validateMessage"
        ></textarea>
        <!----------- textarea For Mobile View  ------------>
        <textarea
          name="message"
          id="message"
          v-model.trim="message"
          placeholder="Enter Your Message"
          key=""
          class="border lg:hidden  border-[#DDDDDD] rounded-md w-full"
          cols="10"
          rows="2"
          @input="validateMessage"
        ></textarea>
        <p class="text-sm text-red-500" v-if="messageValidity === 'invalid'">
          Please Fill Message
        </p>
      </div>
      <button
        class="w-full bg-[#009368] text-center text-white font-medium py-2.5 rounded-md"
      >
        send message
      </button>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { ref } from "vue";
export default {
  data() {
    return {
      error: [],
      inputData: [],
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      nameValidity: "pending",
      emailValidity: "pending",
      subjectValidity: "pending",
      messageValidity: "pending",
    isSubmitTrue:false
    };
  },
  methods: {
    validateInputs (){
      if(this.nameValidity==='valid'&&this.emailValidity==='valid'&&this.subjectValidity==='valid'&&this.messageValidity==='valid'){
        this.isSubmitTrue=true
      }else{
        this.isSubmitTrue=false
      }
    },
    validateName() {
      if (this.name === "") {
        this.nameValidity = "invalid";
      } else {
        this.nameValidity = "valid";
      }
      console.log('text changing')
    },
    validateEmail() {
      let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (this.email === "" || res.test(this.email) == false) {
        this.emailValidity = "invalid";
      } else {
        this.emailValidity = "valid";
      }
    },
    validateSubject() {
      if (this.subject === "") {
        this.subjectValidity = "invalid";
      } else {
        this.subjectValidity = "valid";
      }
    },
    validateMessage() {
      if (this.message === "") {
        this.messageValidity = "invalid";
      } else {
        this.messageValidity = "valid";
      }
    },

    handleSubmit(e) {
      e.preventDefault();

      if (this.name == "") {
        this.nameValidity = "invalid";
      }
      if (this.email == "") {
        this.emailValidity = "invalid";
      }
      if (this.subject == "") {
        this.subjectValidity = "invalid";
      }
      if (this.message == "") {
        this.messageValidity = "invalid";
      }
     
     this.isSubmitTrue&& emailjs
        .sendForm(
          "service_0rdz9h8",
          "template_mh8ybpj",
          this.$refs.form,
          "TM5uEyD2B1KxFzbHv",

        )
        .then(function (res) {
          alert("success" + res.status);
        })
        .catch((err) => console.log(err));

    },
  },
};
</script>
