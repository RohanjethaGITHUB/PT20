<template>
<div>
    <div class="content-heading">
      <h3>Employee List</h3>
      
    <br>
    <br>
    </div>
    <div class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-default">
            <vue-good-table :columns="columns" :rows="rows" :pagination-options="{
                                                    enabled: true,
                                                    mode: 'records',
                                                    perPage: 10,
                                                    setCurrentPage: 1,
                                                }" :sort-options="{
                                                    enabled: true,
                                                    //initialSortBy: {field: 'StartDate', type: 'asc'}
                                                }" styleClass="vgt-table condensed striped" :search-options="{
                                                    searchFn: filterFunction
                                                }" :rowStyleClass="rowStyleClassFn">
              <template slot="table-row" slot-scope="props">
                                <span v-if="props.column.field == 'AccountStatus'" :class="getAccountStatusCellClass(props.row)">
                                    {{props.formattedRow[props.column.field]}}
                                </span>
                                <span v-else-if="props.column.field == 'AccountName'">
                                    <a href="#">{{ props.formattedRow[props.column.field] }}</a>
                                </span>
                                <span v-else>
                                    {{props.formattedRow[props.column.field]}}
                                </span>
                            </template>
            </vue-good-table>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>

import flatPickr from "flatpickr";

import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/material_blue.css";
import axios from 'axios';
export default {
  name: "EmployeeTable",
  data() {
    return {
      loading: true,
      components: {
        flatPickr
      },
      columns: [
        {
          label: "Name",
          field: "employee_name",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: ""
          }
        },
        {
          label: "Age",
          field: "employee_age",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: ""
          }
        },
        {
          label: "Salary",
          field: "employee_salary",
          filterable: true,
          filterOptions: {
            enabled: true,
            placeholder: ""
          }
        }
        
      ],
      rows: [
       
      ]
    };
  },
  methods: {
    dateRangeFilter(data, filterString) {
      let dateRange = filterString.split("to");
      let startDate = Date.parse(dateRange[0]);
      let endDate = Date.parse(dateRange[1]);
      return (data =
        Date.parse(data) >= startDate && Date.parse(data) <= endDate);
    },
    getAccountStatusCellClass(row) {
      return row.AccountStatus === "Closed"
        ? "badge badge-secondary"
        : "badge badge-info";
    },
    rowStyleClassFn() {
      return "VGT-row";
    },
    // formatFn: function(value) {
    //     let formatValue = parseFloat(value.toFixed(4)).toLocaleString('en');
    //     return '$' + formatValue;
    // },
    percentageFormatFn: function(value) {
      value = Math.trunc(value * 100);
      if (value == 0) {
        return "< 1%";
      }
      return value + "%";
    },
    filterFunction() {
      let res = this.rows.filter(record => record.AccountStatus === "Closed");
      return (this.rows = res);
    }
  },
  created:function (){

  },
  beforeCreate : function (){


  },
beforeMount : function (){

  axios
      .get('http://consulting.palladiumhub.com/api/employee/list')
      .then(response => {
        let result = response.data;
        this.rows = result
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
},
beforeDestroy:function (){
  

},
  mounted() {
    
    let inputs = [
      'input[placeholder="Filter Received"]',
      'input[placeholder="Filter Start Date"]',
      'input[placeholder="Filter Need By Date"]'
    ];
    inputs.forEach(function(input) {
      flatPickr(input, {
        dateFormat: "m-d-Y",
        mode: "range",
        allowInput: true
      });
    });
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.vgt-table td {
  padding: 5px 25px 5px !important;
  vertical-align: middle !important;
  font-size: 14px !important;
}
.vgt-table th {
  text-align: center !important;
  font-size: 14px !important;
}
</style>
