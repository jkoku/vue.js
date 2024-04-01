// postlnfo.js
// 단건조회 

let template = `
    <div>
        <table>
            <tr>
                <th>Id</th>
                <td> {{postInfo.id}}</td>
            </tr>
            <tr>
                <th>title</th>
                <td> {{postInfo.title}}</td>
            </tr>
            <tr>
                <th>userId</th>
                <td> {{postInfo.userId}} </td>
            </tr>
             <tr>
                <th>body</th>
                <td>
                    <textarea  readonly> {{postInfo.body}} </textarea>
                </td>
            </tr>
            <tr>
                <button type="button" @click="goToUpdateForm()">수정</button>
                <button type="button" @click="delPostinfo()">삭제</button>
            </tr>
        </table>
    </div>
`;


export default {
    template,
    data(){
        return {
            postInfo : {}
        }
    },
    created(){
        let id = this.$route.query.id; // 받는쪽에서 나는 쿼리를 이용해서 id로 받겠습니다.  내가 가진 라우'트' 정보.쿼리. ; 라우터를 통해 만들어진 컴포넌트는 내부에 라우트를 가지고있고 속성에 라우트한테 푸시한정보가 같이 있다. 
        this.getPostInfo(id);
    },
    methods : {
       async getPostInfo(id){
            this.postInfo = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(res => res.json())
            .catch(err => console.log(err));
        },
        goToUpdateForm(){ // 함수 methods에 넣어주기 라우트를 이용해서 컴포넌트 요청. 
            this.$router.push({ name : 'postForm', // 라우'터'한테 push요청 // update-> postForm으로 변경했음. 
                               query : { id : this.postInfo.id }  // 받는 쪽에서 id로 받으니까 보내는 쿼리에서도 id 로 
        }) 
        },
        delPostinfo(){
            fetch('https://jsonplaceholder.typicode.com/posts/' + this.postInfo.id, {
                method : 'delete'
            })
            .then(res=> res.json())
            .then(data=>{
                let result = Object.keys(data).length; // 속성에 대한 정보를 배열로 가지고옴. keys를 가지고 length
                if(result == 0 ) { 
                    alert('정상적으로 삭제되었습니다.')
                } else {
                    alert('삭제되지않았습니다.')
                }
            })
            .catch(err=> console.log(err));
        }
    }
}
// 
//    <textarea readonly> {{postInfo.body}} </textarea> 
// =   <textarea readonly v-text {{postInfo.body}} </textarea>