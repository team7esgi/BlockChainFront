<template>
  <v-app>
    <NavBar/>
    <v-main class="pa-7">
      <router-view></router-view>
    </v-main>

  </v-app>

</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components : {
    NavBar
  },
  data: () => ({
    //
  }),
};
</script>
