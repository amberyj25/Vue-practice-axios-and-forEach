<template>
  <div class="public">
    <h2>practice 串接API + 過濾重複區域</h2>
    <h3>串接台中公共自行車(iBike)租借站和即時車位資料API</h3>
    <ul class="name">
      <li v-for="item in names">{{item.Position}}</li>
    </ul>
    <h3>過濾重複區域,印出區域名稱</h3>
    <ul class="position">
      <li v-for="item in nodbstation1">{{item}}</li>
    </ul>
  </div>
</template>

<script>
const url1="https://datacenter.taichung.gov.tw/swagger/OpenData/91deb8b8-7547-4a60-8cae-7c95c0df2fda";
export default{
  data(){
    return{
      names:"",
      station:"",
      station1:[],
      nodbstation1:[],
    }
  },
  mounted(){
    this.axios.get(url1).then((result)=>{
      this.names=result.data;
    }
      ),
    this.axios.get(url1).then(result=>{
      // this.station1=result.data;
      this.station = result.data;
      this.station.forEach((item)=>{
        this.station1.push(item.CArea);
        if(this.nodbstation1.indexOf(item.CArea) == -1){
          this.nodbstation1.push(item.CArea);
        }
      })
    }
    )
  }
}
</script>
<style>
.name,.position{
  display:inline-flex;
  flex-wrap:wrap;
  padding:0;
  margin: 0;
}
.name li,.position li{
  list-style:none;
  width:150px;
  height: 25px;
  border: 2px solid blue;
  text-align: center;
  margin: 20px;
}
</style>