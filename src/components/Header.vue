<template>
<nav>



    <ul>
        <li v-if='!token'>
            <router-link to="/login">Log In</router-link>
        </li>

        <li v-if='token'>

            <a href="/">Log out</a>
        </li>

        <li v-if='token'>
        <router-link to="/newreport">New Report</router-link>
        </li>

        <li><router-link to="/">Me</router-link></li>
        <li><router-link to="/report/kmom01">kmom01</router-link></li>
        <li><router-link to="/report/kmom02">kmom02</router-link></li>
        <li><router-link to="/report/kmom03">kmom03</router-link></li>
        <li><router-link to="/report/kmom04">kmom04</router-link></li>
        <li><router-link to="/report/kmom05">kmom05</router-link></li>
        <li><router-link to="/report/kmom06">kmom06</router-link></li>
        <li><router-link to="/chat">Chat</router-link></li>
        <li><router-link to="/oldposts">OldPosts</router-link></li>
    </ul>
    <router-view :key="$route.fullPath"></router-view>
</nav>



</template>

<script>
export default {
    name: 'Header',
    props: {

    },
    data() {
        return {
            //wind : window.document.JWT_TOKEN
            //user:"skall var relativ på nåt sätt"
            token: window.token,
            user: window.user
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
    list-style-type: none;
}
li {
    display: inline;
    margin-right: 1em;
}
li a {
    text-decoration: none;
    color: white;
    font-size: 1.4em;
}
li a:hover {
    text-decoration: underline;
}

h3 {
  margin: 40px 0 0;
}

* {
    /*display: inline;*/
    top: 0;
    left: 0;
    width: 100%;
    /*height: 50px;*/
    /*background-color: blue;*/


}

nav {
    background-image: linear-gradient(to right, red, grey)
}
</style>
