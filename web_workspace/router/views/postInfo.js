// postlnfo.js
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
        let id = this.$route.query.id; // 내가 가진 라우'트' 정보.쿼리. ; 라우터를 통해 만들어진 컴포넌트는 내부에 라우트를 가지고있고 속성에 라우트한테 푸시한정보가 같이 있다. 
        this.getPostInfo(id);
    },
    methods : {
       async getPostInfo(id){
            this.postInfo = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(res => res.json())
            .catch(err => console.log(err));
        }
    }
}
//    <textarea readonly> {{postInfo.body}} </textarea> 
// =   <textarea readonly v-text {{postInfo.body}} </textarea>