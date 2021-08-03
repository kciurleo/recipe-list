<template>
  <div class="home">
    <TestComponent />
    <h2>this is also where you html </h2>
    <p>this is a view though which is suppoed to be like a static page like
    a home or an about or something, which you put the compononents (sections,
    whatever) onto in some sort of layout (it's actually probably bad practice
    that i'm writing so much here but whatever)</p>
    <p>(there's also the app page that's kinda where everything gets put into
    but that doesn't really matter unless we wanna change the navigation etc)</p>
    <p>every time you want to import a component you just do the three things
    this one has; you import it in the script, list it under components where
    this page gets exported, and then put it like in the actual html wherever
    you want it to go. pretty handy for organization</p>

    <b-button @click="showScriptInfo">Click Me For Script Info</b-button>

    <div v-if="showScript">
      <p>Javascript stuff goes in the script section; you put any variables you
      really wanna keep in the data return section, and define all your functions
      in the methods section</p>
      <p>then you can call functions at certain things the user does (like @click
      or @change) or at certain times, which is what the 'created' section is
      (there are other times you can call stuff too, like when the page is updated
      after a form is submited and stuff like that) </p>
      <p>anyway there's probably more stuff that's relevant to know but that's all
      i can think of for now, have fun goofing off</p>
    </div>
  </div>
</template>

<script>
import TestComponent from '@/components/TestComponent.vue'

export default {
  name: 'Home',
  components: {
    TestComponent
  },
  data() { 
    return {
      testvariable: 'hi sarah',
      showScript: false,
    };
  },
  created: function() {
    console.log(this.testvariable);
  },
  methods: {
    testFunction() {
      console.log(this.testvariable);
    },
    showScriptInfo() {
      this.showScript = true;
    },
  },
};
</script>
