<template>
<main>
    <Header />
    <h2>{{ $route.params.kmom }}</h2>

    <!--div class="question" v-for="post in resultat[0].data.msg.paragraphs" v-bind:key="post.key"-->
    <div class="question" v-for="post in resultat" v-bind:key="post.key">
        <p v-html="post.stycke"></p>
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
              //that.resultat.push(result);
              that.resultat = result.data.msg.paragraphs.map((stycke) => {
                  return {
                      stycke,
                  }
              });
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
