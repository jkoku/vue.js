// postInsert.js 
// id 빼고 넘겨주면 id 반환된다.


let template=`
<div>
<table>
    <tr>
        <th>Id</th>
        <td><input type ="text" v-model="post.id" readonly></td>
    </tr>
    <tr>
        <th>title</th>
        <td><input type ="text" v-model="post.title"></td>
    </tr>
    <tr>
        <th>userId</th>
        <td><input type ="text" v-model="post.userId"></td>
    </tr>
     <tr>
        <th>body</th>
        <td>
            <textarea v-model="post.body"></textarea>
        </td>
    </tr>
    <tr>
        <button type="button" @click="createPostInfo()">저장</button>
    </tr>
</table>
</div>   
`;


export default {
    template,
    data(){
        return{
            post : { // post로 한번더 감싸줌 좀더 명확하게 무엇에 대한 제목, 컨텐츠, 작성자인지 처리해주는거임
                id : '',
                title : '',
                body : '',
                userId : ''
            }
        }
    },
    methods : {
       createPostInfo(){ // 프라이머리키는 널이 될수없으니까. 포스트를 그대로 보내는게 아니라 내가 보내고자하는 데이터 따로 선별해야함.
                             // 무조건 프로퍼티를 통째로 넘긴다보다는 내가 데이터 선별하는게 안정적.     
        let data = {
            title : this.post.title,
            body : this.post.body,
            userId : this.post.userId
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{  //// 넘어가는 데이터 결정되었으면 아작스로 fetch
                method : 'post',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(data) // 스트링파이 정적메소드. 제이슨내부에 있는거라서 제이슨은 대문자.
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data != null) {
                alert('정상적으로 저장되었습니다.')
                this.post.id = data.id;
            } else {
                alert('저장되지않았습니다.\n 데이터확인해주세요')
            }
        })
        .catch(err=> console.log(err))
       }     
    }    
}


//그냥 아래처럼해도되지만 post로 한번더 감싸줌. foreign키는 입력창인데도 불구하고 다른정보 셀렉되어서 입력되어야하니까. 
// id는 받지않는 데이터라서 insert되면안됨. 오라클은 공백을 기본적으로 null로 인식 db에 
// 클릭이벤트에서 동작할것이  methods 의 createPostInfo!
// 버튼을 이용해서 클릭이벤트랑 연동. 

// created는 필요업지만 아작스 때문에 메소즈필요함 이 createPostInfo 안에서 데이터 보내야허ㅏ마.
/*        return{
    title : '',
    body : '',
    userId : ''
}
*/