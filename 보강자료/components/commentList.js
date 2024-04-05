// commentList.js

let template= `
<div class="card">
<div class="card-header">댓글 목록</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item" :key="i" v-for="(comment, i) in commentList">
            <div class="container">
                <div class="row text-start">
                    {{ comment.content}}
                </div>
                <div class="row">
                    <div class="col-9 text-end">
                        {{ comment.writer}}
                    </div>
                    <div class="col-3 text-center">
                    {{ getDateFormat(comment.createdDate) }}
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>
</div>
`;

export default{
    name : 'commentList',
    template,
    props : ['bno'],
    data(){
        return{
            commentList : []
        }
    },
    mounted() { // created도 가능은하다. 
        this.getCommentList(); 
    },
    methods : {
        async getCommentList(){
            this.commentList = await fetch('http://localhost:8099/comments/'+ this.bno)
                                        .then(res => res.json())
                                        .catch(err => console.log(err));
                                },
    getDateFormat(dateValue) { // dateValue아래 괄호안. 
        let date = new Date(dateValue); // date클래스에 넣어준다.
        let year = date.getFullYear();
        let month = ( '0' + (date.getMonth() + 1)).slice(-2); // substring  은 음수를 대응하지않는다. 
        let day = ('0' + date.getDay()).slice(-2);  //.slice(-2) 언제나 두자리가 되도록 유지하는 역할.  
        return `${year}-${month}-${day}`
        }       
    }
}
