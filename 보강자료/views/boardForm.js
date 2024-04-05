//boardForm.js

let template=`
<div class="container">
    <form @submit.prevent >

        <label for="no">No.</label>
        <input type="text" id="no" v-model="boardInfo.no" readonly>
        <br>
        <label for="title">제목</label>
        <input type="text" id="title"  v-model="boardInfo.title">
        <br>
        <label for="writer">작성자</label>
        <input type="text" id="writer" v-model="boardInfo.writer">    
        <br>
        <label for="content">내용</label>
        <textarea id="content" style="height:200px" v-model="boardInfo.content"></textarea>
        <br>
        <label for="regdate">작성일자</label>
        <input type="text" id="regdate" v-model="boardInfo.createdDate" :readonly="!isUpdate">
        <br>
        <button type="button" class="btn btn-xs btn-info" @click="isUpdate ? updateBoard() : createBoard() ">저장</button>

    </form>
</div>
`;

export default{
    name : 'boardForm',
    template,
    data(){
        return {
            boardInfo : {
                no : '',
                title : '',
                writer : '',
                content : '',
                createdDate : '2024-04-04'
            },
            isUpdated : false
        }
    },
    created(){
      let no = this.$route.query.no;
      if(no > 0){
        this.getBoardInfo(no);
        this.isUpdate = true;
      } else { 
        this.boardInfo.createdDate = this.getDateFormat(); // 태그에 직접적으로 값을 넣는형태가 아니라 걔랑 바인딩된 프로퍼티 제어. 뷰방식
      }
    },
    methods : {
        createBoard(){
            // 1) 서버에 보낼 데이터 확인
            
            let data = {
                title : this.boardInfo.title,
                writer : this.boardInfo.writer,
                content : this.boardInfo.content,
                createdDate : this.boardInfo.createdDate
            };
            
            // 2) AJAX
            fetch('http://localhost:8099/boards',{
                method: 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result =>{
                // 3) 결과처리
                this.boardInfo.no = result.no;
            })
            .catch(err=>console.log(err));
            
        },
        getDateFormat(dateValue) { // dateValue아래 괄호안. 
            let date = dateValue === undefined ? new Date() : new Date(dateValue); // date클래스에 넣어준다.
            // yyyy-MM-dd // 값을 불러와서 정해진포맷으로 맞춰줘야한다. 
            let year = date.getFullYear();
            let month = ( '0' + (date.getMonth() + 1)).slice(-2); // substring  은 음수를 대응하지않는다. 
            let day = ('0' + date.getDay()).slice(-2);  //.slice(-2) 언제나 두자리가 되도록 유지하는 역할.  

            return `${year}-${month}-${day}`
        },
        async getBoardInfo(no){
            //http://localhost:8099/boards/100
            this.boardInfo =  await fetch('http://localhost:8099/boards/' + no)
                                    .then(res => res.json())
                                    .catch(err => console.log(err));

           this.boardInfo.createdDate = this.getDateFormat(this.boardInfo.createdDate);

        },
        updateBoard(){
            // 1) 서버에 보낼 데이터 확인
            let data = {
                no : this.boardInfo.no,
                title : this.boardInfo.title,
                writer : this.boardInfo.writer,
                content : this.boardInfo.content,
                createdDate : this.boardInfo.createdDate
            };

            // 2) AJAX
            fetch('http://localhost:8099/boards/'+ this.boardInfo.no,{
                method: 'PUT',
                headers : {
                    'Content-type' : 'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result =>{
                // 3) 결과처리
                console.log(result);
            })
            .catch(err=>console.log(err));
        }

    }
}