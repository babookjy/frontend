<template>
    <div>
      <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">tables</span>
      </h4>
      <hr class="border-light container-m--x mt-0 mb-5">
        <v-client-table :data="tableData" :columns="columns" :options="options">
            <template slot="edit" slot-scope="props">
                <div>
                    <b-btn variant="outline-sucess bolderless icon-btn" class="btn-xs" @click.prevent="edit(props.row)"><i class="ion ion-md-create"></i></b-btn>
                    <b-btn variant="outline-dander bolderless icon-btn" class="btn-xs" @click.prevent="remove(props.row)"><i class="ion ion-md-close"></i></b-btn>
                </div>
            </template>
        </v-client-table>
    </div>
</template>

<style lang="scss" src="../../vendor/libs/vue-data-tables/vue-data-tables.scss" ></style>

<script>
import Vue from 'vue'
import {ClientTable} from 'vue-tables-2'

Vue.use(ClientTable)

export default {
  name: 'tables-vue-tables-2',
  components: {
  },
  mataInfo: {
    title: 'GMS Tables - 1'
  },
  data: () => ({
    columns: ['No', 'Date', 'Writer', 'Edit'],
    tableData: [
      { No: 1, Date: '2018-04-10', Writer: 'John' },
      { No: 2, Date: '2018-03-10', Writer: 'Ketty' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 4, Date: '2018-01-10', Writer: 'Soo' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' },
      { No: 3, Date: '2018-02-10', Writer: 'Kim' }
    ],
    options: {
      pagination: { chunk: 5 },
      sortIcons: {
        is: 'fa-sort',
        base: 'fas',
        up: 'fa-sort-up',
        down: 'fa-sort-down'
      }
    }
  })

}
</script>

<style>

</style>
