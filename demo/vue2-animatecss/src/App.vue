<template>
  <div id="app">
    <p>vue</p>
    <Elevator></Elevator>
    <Home></Home>
    <Footer></Footer>
  </div>
</template>

<script>
import Elevator from '@/components/layouts/Elevator'
import Footer from '@/components/layouts/Footer'
import Home from '@/pages/index'

export default {
  name: 'App',
  components: {
    Elevator, Footer,
    Home
  },
}
</script>
