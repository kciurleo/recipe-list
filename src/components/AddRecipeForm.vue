<template>
  <div class="content">
    <!-- idk i came up with some components that might be useful separations
    but if you wanna rearrange/add/delete any of them feel free -->
    <!-- my thought was that this could be a form used to add a recipe like 
    where you put in the ingredients and stuff (or the link which would be
    cool but i have no clue if that's possible) -->
  <form id="targform" @submit.prevent>
    <b-field label="Recipe Name">
      <b-input type="text" id="recipename" v-model="recipeinfo.recipename" required />
    </b-field>
    <b-field label="Submitter">
      <b-input type="text" id="submitter" v-model="recipeinfo.submitter" required />
    </b-field>
    <b-checkbox v-model="recipeinfo.vegetarian" native-value="Vegetarian">
      Vegetarian
    </b-checkbox>
    <b-checkbox v-model="recipeinfo.vegan" native-value="Vegan">
      Vegan
    </b-checkbox>
    <b-field label="Total Time (in minutes)">
      <b-numberinput v-model="recipeinfo.recipetime" :controls="false"></b-numberinput>
    </b-field>
    <b-field label="Link to Recipe">
      <b-input type="text" id="recipelink" v-model="recipeinfo.recipelink" />
    </b-field>
    <b-field label="Directions (optional)">
      <b-input type="textarea" v-model="recipeinfo.directions"></b-input>
    </b-field>
    <!-- button here that says add ingredient--> 
    <!-- when button pressed, three new fields: ingredient name (typable select) and quantity (number) and type (select) -->
    <!-- if we have ingredient already, the quantity and type selector appear -->
    <!-- if not person has to choose -->
    <b-field class="buttons">
      <b-button @click="submitForm" type="submit">Submit</b-button>
    </b-field>
  </form>
  <pre> {{ recipeinfo }} </pre>
  </div>
</template>

<script>
export default {
  name: 'AddRecipe',
  props: {
  },
  data() { 
    return {
      recipeinfo: {
        recipename: '',
        submitter: '',
        vegetarian: false,
        vegan: false,
        recipetime: '',
        recipelink: '',
        directions:'',
        ingredients: {},
      },
    };
  },
  methods: {
    submitForm(){
      console.log(this.recipeinfo)
    },
  },
};
</script>

<style scoped lang="scss">
</style>