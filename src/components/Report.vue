<template>
<main>
    <Header />
    <h2>{{ $route.params.kmom }}</h2>
    <div class="question" v-for="post in resultat" v-bind:key="post.key">

      <!--p>{{ post.data.msg[0][1] }}</p-->
    <p v-html="post.data.msg[0][1]"></p>
    </div>
</main>

</template>

<script>
import Header from './Header.vue'
export default {
  name: 'Report',
  components: {
    Header,
  },

  data() {
      return {
          resultat: [],
      }
  },
  beforeRouteUpdate(to, from, next) {
    this.resultat = [];
    this.getText(to.params.kmom);
    next();
},
   created() {
       this.getText(this.$route.params.kmom);
  },

//   beforeRouteUpdate(to, from, next) {
//     this.getText(this.$route.params.kmom);
//     //this.name = to.params.name
//     next()
// },

  // beforeUpdate() {
  //     this.getText(this.$route.params.kmom);
  // },

  methods: {
      getText: function (kmom) {
          let that = this;
          that.text = "";
          fetch("https://me-app.kwramverk.me/reports/" + kmom)
          .then(function(response) {
              return response.json();
          })
          .then(function(result) {
              // eslint-disable-next-line
              console.log(result);
              that.resultat.push(result);
          });
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-transform: uppercase;
}
.question {
  margin-bottom: 2em;
  margin:auto;
  width: 50%;
  text-align: left;
}

</style>
