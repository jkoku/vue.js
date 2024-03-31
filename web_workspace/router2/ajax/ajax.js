// https://jsonplaceholder.typicode.com/users


// 전체조회
fetch('https://jsonplaceholder.typicode.com/users')
.then (response=> {
    console.log(response)
    return response.json(); // json, text,body 많이씀
})
.then(data => {
    console.log(data); //  우리가 실제로 다룰 데이터가 넘어옴
}) 
.catch(err => console.log(err)); 


// 단건 조회
fetch('https://jsonplaceholder.typicode.com/users/'+1) // 지정된 대상에 대한정보. 경로에 추가.
.then (res => res.json())
.then(data => {
    console.log(data); //  데이터가 넘어옴
}) 
.catch(err => console.log(err)); 