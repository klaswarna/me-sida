<template>
<main>
    <Header />
    <h1>New Report</h1>



<p>
<span>Kmom number:</span><br>
<input v-model="title" placeholder="kmomXX">
</p>

<br>
<span>Write content here:</span>
<br>
<textarea v-model="content" placeholder="content..."></textarea>

<div id="submit">
  <button v-on:click="submit(title, content)">Submit</button>
</div>


</main>
</template>


<script>
//import Vue from 'vue'

import Header from './Header.vue'

export default {
    name: 'Login',
    components: {
        Header
    },

    data() {
        return {
            title: "",
            content: "",
            resultat: "",
            token: window.token
        }
    },
    methods: {
        submit(title, content) {
            let that = this;
            that.text = "";
            content = content.split("\n")
            fetch("https://me-app.kwramverk.me/reports", {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    //'x-access-token': window.document.JWT_TOKEN,
                    'x-access-token': that.token,
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    kmom: title,
                    text: content
                })
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                //console.log(data);
                that.resultat = data;
                //return
                that.$router.push("/report/" + title);

            });
        }
    }
}

</script>


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
textarea {
    height:12em;
    width: 80em;
}

</style>
