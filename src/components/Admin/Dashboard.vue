<template>
  
      <div class="row" id="dashboard">
        <div class="col-md-6">
            <h2>AreaChart</h2>
            <AreaChart/>
        </div>      
        <div class="col-md-6">
            <h2>PieChart</h2>
            <PieChart/>
        </div>      
        <div class="col-md-6">
            <h2>BarChart</h2>
            <BarChart/>
        </div>      
        <div class="col-md-6">
            <h2>RadarChart</h2>
            <RadarChart/>
        </div>      
        <div class="col-md-6">
            <h2>LineChart</h2>
            <LineChart/>
        </div>      
      </div>
    
  
</template>

<script>
import AreaChart from "../Chart/AreaChart.vue";
import PieChart from "../Chart/PieChart.vue";
import BarChart from "../Chart/BarChart.vue";
import RadarChart from "../Chart/RadarChart.vue";
import LineChart from "../Chart/LineChart.vue"

export default {
  name: "Dashbaord",
  components: {
    AreaChart,
    PieChart,
    BarChart,
    RadarChart,
    LineChart
  },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10
      }
    };
  }
};
</script>

<style>
#dashboard {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.inner-block{
    width: 90%;
}
</style>
