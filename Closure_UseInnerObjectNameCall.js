var arr = [];

for (var i = 0; i < 5; i++){
    arr[i] = (function(id){
        return {
            getValue : function (){
                return id;
            },
            setValue : function (idx){
                id = idx;
            }
        };
    })(i);
}

for (var index in arr){
    console.log ( arr[index].getValue() );
}