//boardList.js

let template=`
<div class="container">
    <table class="table table-hover">
        <thead>
            <tr>
                <th>No.</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일자</th>
                <th>댓글 수</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="board in boardList" :key="board.no" 
                    @click="goToDetail(board.no)">
                <td>{{ board.no }}</td>
                <td>{{ board.title }}</td>
                <td>{{ board.writer }}</td>
                <td>{{ getDateFormat(board.createdDate) }}</td>
                <td>{{ board.comment }}</td>
            </tr>
        </tbody>
    </table>
</div>
`;

export default{
    name : 'boardList',
    template,
    data() {
        return {
            boardList : []
        }
    },
    created(){
        this.getBoardList();
    },
    methods : { 
        async getBoardList(){
            this.boardList = await fetch('http://localhost:8099/boards')
                             .then(res => res.json())
                             .catch(err => console.log(err));
        },
        goToDetail(boardNo){
            this.$router.push({ name : 'boardInfo',
                                query : { no : boardNo } });
                                // QueryString : key=value&key=value...
        },        
        getDateFormat(dateValue) { // dateValue아래 괄호안. 
            let date = new Date(dateValue); // date클래스에 넣어준다.
            // yyyy-MM-dd // 값을 불러와서 정해진포맷으로 맞춰줘야한다. 
            let year = date.getFullYear();
            let month = ( '0' + (date.getMonth() + 1)).slice(-2); // substring  은 음수를 대응하지않는다. 
            let day = ('0' + date.getDay()).slice(-2);  //.slice(-2) 언제나 두자리가 되도록 유지하는 역할.  

            return `${year}-${month}-${day}`
        }
    }
}