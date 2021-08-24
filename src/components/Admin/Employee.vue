<template>
  <div id="employee">
    <CustomTable />
  </div>
</template>

<script>
import CustomTable from "../EmployeeTable.vue";

export default {
  name: "Employee",
  components: {
    CustomTable
  }
};
</script>

<style>
#employee {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
