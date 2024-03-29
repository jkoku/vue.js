// ajax.js

/*  라우팅(Routing)
    : 특정 엔드 포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것. 
    엔드 포인트 : 메소드(Method) + 경로(Path)

    REST 
    = URI(자원) + METHOD(기능) / JSON
    => GET(조회), POST(등록), PUT(수정), DELETE(삭제)
    
    -기존-
    단건조회 : GET + empInfo?employee=100 
    전체조회 : GET + empList
    등록 : POST + empInesert
    수정 : POST + empUpdate
    삭제 : GET + empDelete?employeeId=100
   
    -REST 방식으로 수정-
    단건조회 : GET + emps/100
    전체조회 : GET + emps
    등록 : POST + emps
    수정 : PUT + emps/100
    삭제 : DELETE + emps/100    
*/

// https://jsonplaceholder.typicode.com/posts

// 전체조회
fetch('https://jsonplaceholder.typicode.com/posts')
.then (response=> {
    console.log(response)
    return response.json(); //json, text,body 많이씀
})
.then(data => {
    console.log(data); //  우리가 실제로 다룰 데이터가 넘어옴
}) 
.catch(err => console.log(err)); 


/* $.ajax('https://jsonplaceholder.typicode.com/posts')
 .done(data=>{
     console.log(data);
})
 .fail(err => console.log(err));
*/


// 단건 조회
fetch('https://jsonplaceholder.typicode.com/posts/'+1) // 지정된 대상에 대한정보. 경로에 추가.
.then (res => res.json())
.then(data => {
    console.log(data); //  데이터가 넘어옴
}) 
.catch(err => console.log(err)); 

// 등록
let post = {
    id : 100,
    title : 'Hello!',
    userId : 10,
    body : 'Today is Friday!!!'
} //  json은 정해져있다.  json은 객체아니면 배열. 한건만, 단건만 등록할거니까 객체를 이용해서 작성해야한다. 

fetch('https://jsonplaceholder.typicode.com/posts', {
    method : 'post', // json 은 기본적으로 post로 보냄. get으로 하면 오류 생길지도..? get으로는 json 포맷 거의 안씀
    headers : {
        'Content-type' : 'application/json' // body에 작성해서보내는 데이터가 제이슨이면 application/json 넣어야함.
    },
    body : JSON.stringify(post) // json으로  변환하는 코드. body가 있어야한다.?
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err))

// 수정  /누구를 수정할지 경로에올려주어야 한다.
fetch('https://jsonplaceholder.typicode.com/posts/'+1, {
    method : 'put', 
    headers : {
        'Content-type' : 'application/json' 
    },
    body : JSON.stringify({ //보내는 데이터는 통으로 넘긴다. 
        title : 'Welcome!',
        userId : 20,
        body : 'Test! Put!'
    })
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err))

// 삭제 / 
fetch('https://jsonplaceholder.typicode.com/posts/'+1, {
    method : 'delete', // delete 지정
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err))

