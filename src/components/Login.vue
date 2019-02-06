<template>
<main>
    <Header :key="wind" />
    <h1>Log In</h1>

<div v-if='wind === "uninlogged"'>

<p>
<input v-model="email" placeholder="edit email">
</p>

<p>
<input v-model="password" placeholder="password" type="password">
</p>

<div id="login">
  <button v-on:click="login(email, password)">Log in</button>
</div>
<br><br>
<br><br>
Or if you are a new user:
<div id="signup">
  <button v-on:click="signup(email, password)">Sign up</button>
</div>
</div>

<div v-if='wind != "uninlogged"'>
<h2>Du är inloggad</h2>

</div>



</main>
</template>


<script>
//import Vue from 'vue'

import Header from './Header.vue'

export default {
    name: 'Login',
    components: {
        Header,
    },

    data() {
        return {
            password: "",
            email: "",
            resultat: "",
            //wind: this.wind
            wind: window.document.JWT_TOKEN
        }
    },
    methods: {
        login(email, password) {
            let that = this;
            that.text = "";
            fetch("https://me-app.kwramverk.me/login", {
                method: 'POST',
                headers: new Headers({
                    //'x-access-token': that.JWT_TOKEN,
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                //console.log(data);
                that.resultat = data;
                window.document.JWT_TOKEN = data;
                that.wind = data; //måste vara med för att kommunicera med header
            });
        },
        signup(email, password) {
            let that = this;
            that.text = "";
            fetch("https://me-app.kwramverk.me/register", {
                method: 'POST',
                headers: new Headers({
                    //'x-access-token': 'JWT_TOKEN',
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                //console.log(data);
                that.resultat = data;
                that.login(email, password);
            });
        },
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: red;
}
.paragraph {
    margin:auto;
    width: 50%;
    text-align: left;
}

</style>
