<template>
<v-container>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="6"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="6"
        >
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="enter your password"
            hint="At least 8 characters"
            counter
            required
            @click:append="show1 = !show1"
          ></v-text-field>
          </v-col>
          </v-row>
        <v-btn
        :disabled = !valid
        @click="onSubmit"
        >
        login
        </v-btn>
    </v-container>
  </v-form>
</v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () =>  ({
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
        show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >=8 || 'Min 8 characters',
          // emailMatch: () => (`The email and password you entered don't match`),
        },
    }),

  methods: {
    ...mapActions(['fetchcart']),
    async onSubmit() {
      console.log(this.email , this.password);
      try {
          // await this.$auth.loginWith('local', { data: 
          // {  email: this.email,
          //   password: this.password }
          //     }).then(() =>console.log('succes')) 
      //  alert('logged in'))
        
        await this.$auth.login({
          data: {
            email: this.email,
            password: this.password
          },
        }).then(()=> alert('logged in'))
        this.fetchcart(1)
        this.$router.push('/')
      } 
      catch (error) {
        console.log(error);
        alert('errr')
        this.showError = true
      }
    }
  }
}
</script>