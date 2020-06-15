var app = new Vue({
    el: '#app',
    data: {
      // Show blog
    show:false,
    defualt:true
      

    },
    methods:{
        showblog(){
            this.show = true
            this.defualt = false
        },
        closeblog(){
            this.show = false
            this.defualt = true
        }
    }


});
    
        

        


  