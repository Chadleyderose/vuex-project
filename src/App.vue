<template>
  <div id="app">
    <AppHeader/>
    <div class="container">

    <router-view></router-view>
    </div>
    <notification-list/>
  </div>
</template>

<script>
import NotificationList from './components/NotificationList.vue'
import AppHeader from "./components/AppHeader.vue"
export default {
  name: 'App',
  components: {
    AppHeader,
    NotificationList
  }
}
</script>


