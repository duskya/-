Component({
  properties: {
    
  },
  data: {
    value:[],
   
  },
  methods: {
    getword:function(e){
      this.setData({
        value:e.detail.value
      })
    },
    searchword:function(e){
      this.triggerEvent("searchwords",this.data.value)
    }
  }
})