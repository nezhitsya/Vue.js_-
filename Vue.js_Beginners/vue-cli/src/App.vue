<template>
  <div>
    <!-- <app-header v-bind:props 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header>
    {{ str }}
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  data: function() {
    return {
      str: 'hiello'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = 'hi'
    }
  }
}
</script>

<style>

</style>