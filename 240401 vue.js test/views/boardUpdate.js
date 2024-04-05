let template=`
<div>
<table>
    <tr>
        <th>No.</th>
        <td><input type ="text" v-model="board.no" readonly></td>
    </tr>
    <tr>
        <th>제목</th>
        <td><input type ="text" v-model="board.title"></td>
    </tr>
    <tr>
        <th>작성자</th>
        <td><input type ="text" v-model="board.writer"></td>
    </tr>
     <tr>
        <th>내용</th>
        <td>
            <textarea v-model="board.content"></textarea>
        </td>
    </tr>
        <th>작성일자</th>
        <td><input type ="text" v-model="board.updatedDate"></td>
    </tr>
    <tr>
        <button type="button" @click="updateBoardInfo()"> 저장 </button>
    </tr>
</table>
</div>   
`;

export default {
    template,
    data(){
        return{
            board : {
            no : '',
            title : '',
            writer : '',
            content : '',
            updatedDate : ''
            }
        }
    },
    created(){
        let id = this.$route.query.id; 
        this.getBoardInfo(id);
    },
    methods : {
        async getBoardInfo(id){
            this.board = await fetch('http://localhost:8099/boards/'+id)
            .then(res => res.json())
            .catch(err => console.log(err));
        },
        updateBoardInfo(){ 
        let data = {
            title : this.board.title,
            writer : this.board.writer,
            content : this.board.content,
            updatedDate : this.board.updatedDate
        }
        fetch('http://localhost:8099/boards/'+id, { 
                method : 'put',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(data) 
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
