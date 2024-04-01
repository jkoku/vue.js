// postForm.js 컴포넌트 활용성 기능합치기 insert템플릿가져옴.

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
        <button type="button" @click="isUpdated? updatePostInfo() : createPostInfo()">저장</button>
    </tr>
</table>
</div>   
`;

export default {
    template,
    data(){
        return{
            post : {
                id : '',
                title : '',
                userId : '',
                body : ''
            },
            isUpdated : false  // 보조적인 프로퍼티 
        }
    },
    created(){
        let id = this.$route.query.id; // 내가 가진 라우'트' 정보.쿼리/라우터를 통해 만들어진 컴포넌트는 내부에 라우트를 가지고있고 속성에 라우트한테 푸시한정보가 같이 있다. 
        if(id > 0) {
            this.getPostInfo(id); 
            this.isUpdated = true; // id가 0 이상이라면 isupdated도 true 이래야 기본은 등록으로 두고, 아이디가 넘어오면 수정으로 동작하겠다. 
        } 
    },
    methods : {
        async getPostInfo(id){
            this.post = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(res => res.json())
            .catch(err => console.log(err));
        }, 
        createPostInfo(){ // 프라이머리키는 널이 될수없으니까. 포스트를 그대로 보내는게 아니라 내가 보내고자하는 데이터 따로 선별해야함.  
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
                body : JSON.stringify(data) // stringify 정적메소드. 제이슨내부에 있는거라서 제이슨은 대문자.
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
        },
        updatePostInfo(){ 
           let data = {
                id : this.post.id,
                title : this.post.title,
                body : this.post.body,
                userId : this.post.userId
            } 
        fetch('https://jsonplaceholder.typicode.com/posts/'+data.id, {  // 수정할때는 /+data.id 추가된다.
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
                    alert('수정되지않았습니다.')
                }
        })
        .catch(err=> console.log(err))
        }  
        }
    }


//  @click="isUpdated? updatePostInfo() : createPostInfo() 
// 삼항연산자 이용해서 true면 업데이트하는 핸들러 연결. false 면 createPostInfo
// 각각의 컴포넌트에서 가져오기. 