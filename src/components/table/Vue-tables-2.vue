<template>
    <div>
        <v-client-table :data="tableData" :columns="columns" :options="options">
            <template slot="edit">
                <div>
                </div>
            </template>
            <template>
            </template>
        </v-client-table>
    </div>
</template>

<script>
import Vue from 'vue'
import {ClientTable} from "vue-tables-2"

Vue.use(ClientTable)

export default {
    name: 'tables-vue-tables-2',
    components:{

    },
    mataInfo: {
        title: 'GMS Tables - 1'
    },
    data: () => ({
        columns: ['No','Date','Writer','Edit'],
        tableData: [
            { No: 1, Date: "2018-04-10", Writer: "John" },
            { No: 2, Date: "2018-03-10", Writer: "Ketty" },
            { No: 3, Date: "2018-02-10", Writer: "Kim" },
            { No: 4, Date: "2018-01-10", Writer: "Soo" }
        ],
        options: {
            pagination: { chunk:5 },
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
