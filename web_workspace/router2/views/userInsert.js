// userInsert.js 
// id 빼고 넘겨주면 id 반환된다.


let template=`
<div>
<table>
    <tr>
        <th>id</th>
        <td><input type ="text" v-model="user.id" readonly></td>
    </tr>
    <tr>
        <th>name</th>
        <td><input type ="text" v-model="user.name"></td>
    </tr>
    <tr>
        <th>username</th>
        <td><input type ="text" v-model="user.username"></td>
    </tr>
     <tr>
        <th>eamil</th>
        <td><input type ="text" v-model="user.email"></td>
    </tr>
    <tr>
        <button type="button" @click="createUserInfo()">저장</button>
    </tr>
</table>
</div>   
`;


export default {
    template,
    data(){
        return{
            user : { // 한번더 감싸줌 좀더 명확하게 무엇에 대한 제목, 컨텐츠, 작성자인지 처리해주는거임
                id : '',
                name : '',
                username : '',
                email : ''
            }
        }
    },
    methods : {
       createUserInfo(){ // 프라이머리키는 널이 될수없으니까. 포스트를 그대로 보내는게 아니라 내가 보내고자하는 데이터 따로 선별해야함.
                             // 무조건 프로퍼티를 통째로 넘긴다보다는 내가 데이터 선별하는게 안정적.     
        let data = {
            name : this.user.name,
            username : this.user.username,
            email : this.user.email
        }
        fetch('https://jsonplaceholder.typicode.com/users',{  //// 넘어가는 데이터 결정되었으면 아작스로 fetch
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
                this.user.id = data.id;
            } else {
                alert('저장되지않았습니다.\n 데이터확인해주세요')
            }
        })
        .catch(err=> console.log(err))
       }     
    }    
}