<template>
  <div class="content">
    <h1>hi sarah this is where you html</h1>
    <p>everything has to go into one big div with class="content" in the template every 
    time but after that you can do div section etc however ya want</p>
    <p>this is a <router-link to="/test">test component</router-link> within the homepage to fiddle around with</p>
    <p>components are things that you put within a page basically, 
    so you could have a whole bunch of different things on a page like a
    search form and like a thing of response stuff and like a grocery list
    section idk that's just my thoughts maybe we want more components or 
    maybe that's enough? idk it's a way to separate things that you can 
    then all import into one thing</p>
    <p>they're good for organization or like style stuff because you can style 
    components and main view pages differently; see the style section for
    where to put css</p>
    <p>I added links to all the different components that you can see in router -> index.js;
    you can go to one of those if you Just want to see that particular component instead of
    how they all come together on the homepage. (those links would probably get deleted but 
    I like doing that because then I can fool around on just one section of a page until I like it) </p>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
