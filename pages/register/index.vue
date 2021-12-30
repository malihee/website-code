<template>
<v-container>
  <section class="section">
    <v-form v-model="valid">
    <v-row>
        <v-col
          cols="6"
        >
          <v-text-field
            v-model="first_name"
            :rules= "[rules.required]"
            label="first name"
            required
          ></v-text-field>
        </v-col>
    </v-row>
    
      <v-row>
        <v-col
          cols="6"
        >
          <v-text-field
            v-model="last_name"
            :rules="[rules.required]"
            label="last name"
            required
          ></v-text-field>
        </v-col>
    </v-row>
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
            :disabled= !valid
            @click="registerUser"
          >Register</v-btn>
        
    </v-form>
  </section>
</v-container>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  data: () => ({
      valid: false,
      first_name:'',
      last_name:'',
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
    // ...mapActions(['saveUser']),
    async registerUser() {
      // this.isSaving = true
      const data = {
        firstname: this.first_name,
        lastname :this.last_name, 
        email: this.email,
        password: this.password
      }
      try{
        await fetch('http://localhost:5000/signup', {
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        
        })
      }
      catch(err){
        console.error(err)
      }
      // await this.saveUser({
      //   username: this.username,
      //   email: this.email,
      //   password: this.password
      // })
      // this.$auth.login({
      //   data: {
      //     email: this.email,
      //     password: this.password
      //   }
      // })
      this.$router.push('/')
    }
  }
}
</script>