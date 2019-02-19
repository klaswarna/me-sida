<template>
<main>
    <Header :key="token" />
    <h1>Log In</h1>

<div v-if='!token'>

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

<div v-if='msg && !token'>

<h2 class="red">{{msg}}</h2>

</div>


<div v-if='token'>
<h2 class="green">{{msg}}</h2>

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
            token: window.token,
            msg: this.msg
        }
    },
    methods: {
        login(email, password) {
            let that = this;
            that.text = "";
            fetch("https://me-app.kwramverk.me/login", {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                that.token = data.token,
                window.token = data.token,
                that.msg = data.msg,
                window.user = data.user
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

.red {
    color: red;
}

.green {
    color: green;
}
</style>
