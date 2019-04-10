// https://www.vuetable.com/guide/api-vs-data-mode.html#data-mode
<template>
  <div id="app">
    <vuetable ref="vuetable"
    api-url="https://vuetable.ratiw.net/api/users"
    :fields="['담보구분','담보내역','담보요청','담보제공','담보유지비율','이자율','화폐','환율','차입액','차입일','만기일','작성일','작성자']"
    data-path=""
    pagination-path=""></vuetable>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2'

export default {
  name: 'app',
  components: {
    Vuetable
  }
}
</script>

<style>

</style>
