// postInsert.js 복사 postUpdate! 한 단계만 추가하면 되서 복사했음 
// 템플릿도 동일. 클릭이벤트에 거는 함수 변경.  updatePostInfo만 수정하면됨

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
        <button type="button" @click="updatePostInfo()">저장</button>
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
    created(){
        let id = this.$route.query.id; // 내가 가진 라우'트' 정보.쿼리. ; 라우터를 통해 만들어진 컴포넌트는 내부에 라우트를 가지고있고 속성에 라우트한테 푸시한정보가 같이 있다. 
        this.getPostInfo(id);
    },
    methods : {
        async getPostInfo(id){
            this.post = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(res => res.json())
            .catch(err => console.log(err));
        },
        updatePostInfo(){ // 프라이머리키는 널이 될수없으니까. 포스트를 그대로 보내는게 아니라 내가 보내고자하는 데이터 따로 선별해야함.
                             // 무조건 프로퍼티를 통째로 넘긴다보다는 내가 데이터 선별하는게 안정적.     
        let data = {
            id : this.post.id,
            title : this.post.title,
            body : this.post.body,
            userId : this.post.userId
        } // 기존 변경하는거니까 아이디 추가. 수정은 post프로퍼티 전체 넘겨도 상관없다. 같으니까. 포스트랑 인포같아서.가능하면 그냥 선별해서 쓰도록.
        fetch('https://jsonplaceholder.typicode.com/posts/'+id, {  // 수정할때는 /+data.id 추가된다.
                method : 'put', // 수정할때 메소드는  put!
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(data) // stringify 정적메소드. 제이슨내부에 있는거라서 제이슨은 대문자.
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data != null) {
                alert('정상적으로 수정되었습니다.')
            } else {
                alert('수정되지않았습니다.\n 데이터확인해주세요')
            }
        })
        .catch(err=> console.log(err))
       }     
    }    
}


// 등록은 빈페이지라도 ㅇㅋ 수정은 원래데이터 있어야한다.
// 단건조희의 created 가 필요하다. 수정할때. 메소즈위에 복붙.
/* async getPostInfo(id){
    this.postInfo = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    .then(res => res.json())
    .catch(err => console.log(err));
} */ 
// 얘네도 가져옴 단건조회 메소즈에있던거. 
// id값 받아서 그걸로 단건조회 선행해야하니까. 
// 단건조회할 때 프로퍼티이름이 다르다. postInfo아니고 post에 담을수있도록 수정..
// 오류가 가장 많이 나는 데이터 타입은 날짜. 
