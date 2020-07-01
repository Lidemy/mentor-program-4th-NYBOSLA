 function join(arr, concatStr) {



 }

 function repeat(str, times) {

     var answer = ''
     for (var i = 0; i < times; i++) {

         // console.log(str)s

         answer += str;

     }
     return answer;
 }


 // join(['a'], '!')
 // join([1, 2, 3], '')
 join(["a", "b", "c"], "!")
 join(["a", 1, "b", 2, "c", 3], ',')
 repeat('a', 5);
 repeat('yoyo', 2)