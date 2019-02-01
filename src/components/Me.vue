<template>
<main>
    <Header />
    <h1>Me</h1>
    <div class="paragraph" v-for="paragraph in resultat" v-bind:key="paragraph.key">
      <!--p><strong>{{ question.question }}Kalle</strong></p-->
      <!--p>{{ resultat[0].data.msg[0][1] }}</p-->
      <p>{{ paragraph.stycke }}</p>

    </div>
</main>
</template>

<script>

import Header from './Header.vue'

export default {
  name: 'Me',
  props: {  },
  components: {
      Header
  },
  data() {
    return {
      resultat: [],
    }
  },
  mounted() {
    this.getText();
  },
  methods: {
    getText() {
      let that = this;
      that.text = "";
      fetch("https://me-app.kwramverk.me/")
      .then(function(response) {
          return response.json();
      })
      .then(function(result) {
          // eslint-disable-next-line
          console.log(result);
          that.resultat = result.data.msg.map((stycke) => {
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
h3 {
  margin: 40px 0 0;
}
/*ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}*/
a {
  color: red;
}
.paragraph {
    margin:auto;
    width: 50%;
    text-align: left;
}

</style>
