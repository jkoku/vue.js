//boardInfo.js

import CommentListComponent from "../components/commentList.js";

let template=`
<div class="container">
<div class="row">
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col" class="text-center table-primary">번호</th>
                <td scope="col" class="text-center">{{ boardInfo.no  }}</td>
                <th scope="col" class="text-center table-primary">작성일</th>
                <td scope="col" class="text-center">{{ getDateFormat(boardInfo.createdDate) }}</td>
                <th scope="col" class="text-center table-primary">이름</th>
                <td scope="col" class="text-center">{{ boardInfo.writer }}</td>
            </tr>

            <tr>
                <th colspan="2" class="text-center table-primary">제목</th>
                <td colspan="4">{{ boardInfo.title }}</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="6" class="text-left" valign="top" height="200">
                    <pre
                        style="white-space: pre-wrap;border:none;background-color: white;">{{ boardInfo.content }}</pre>
                </td>
            </tr>
            <tr>
                <td colspan="6" class="text-center">
                    <button class="btn btn-xs btn-info" @click="goToUpdate(boardInfo.no)">수정</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    <div class="row">
        <CommentListComponent v-if="boardInfo.comment > 0"
                              v-bind:bno="boardInfo.no" />
        <div v-else class="card test-center">
         댓글 없음
         </div>
    </div>
</div>
`;

export default{
    name : 'boardInfo',
    template,
    data(){
        return{
            boardInfo : {}
        }
    },
    created(){
        let no = this.$route.query.no;
        this.getBoardInfo(no);
    },
    methods : {
        async getBoardInfo(no){
            //http://localhost:8099/boards/100
            this.boardInfo =  await fetch('http://localhost:8099/boards/' + no)
                                    .then(res => res.json())
                                    .catch(err => console.log(err));
        },
        goToUpdate(boardNo){
            this.$router.push({ name : 'boardForm',
                                query : { no : boardNo } });
        },
        getDateFormat(dateValue) { // dateValue아래 괄호안. 
            let date = new Date(dateValue); // date클래스에 넣어준다.
            // yyyy-MM-dd // 값을 불러와서 정해진포맷으로 맞춰줘야한다. 
            let year = date.getFullYear();
            let month = ( '0' + (date.getMonth() + 1)).slice(-2); // substring  은 음수를 대응하지않는다. 
            let day = ('0' + date.getDay()).slice(-2);  //.slice(-2) 언제나 두자리가 되도록 유지하는 역할.  

            return `${year}-${month}-${day}`
        }
    },
    components : {
        CommentListComponent
    }
}