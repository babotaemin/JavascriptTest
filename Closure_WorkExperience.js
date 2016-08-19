var arr = [];

for (var i = 0; i < 5; i++){
    arr[i] = (function(id){
        var obj = {
            getValue : function (){
                return id;
            },
            setValue : function (idx){
                id = idx;
            }
        };

        return obj;
    })(i);
}

for (var index in arr){
    console.log ( arr[index].getValue() );
}