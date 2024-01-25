
var vm = new Vue({
    el:'#tds' , 
    data:{
        tasks:[],
        taskText:'', 
        tr:'cccccc' , 
    }, 
    methods:{
        add : function(){
            this.tasks.push({ words: this.taskText , done: false }) ; 
            this.taskText = "" ; 
        },
        deleteAll:function(){
            this.tasks = [] ; 
        }, 
        deleteTask:function(index){
            this.tasks.splice(index , 1 ) ; 

        }
    }
})