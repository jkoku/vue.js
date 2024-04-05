<template>
    <div class="container">
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" class="text-center table-primary">번호</th>
                        <td scope="col" class="text-center">{{ boardInfo.no }}</td>
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
                            <button class="btn btn-xs btn-info" @click="goToUpdateForm(boardInfo.no)">수정</button>
                            <!-- <router-link to="/list" class="btn btn-xs btn-success">목록</router-link>
                            <button class="btn btn-xs btn-warning" @click="deleteBoard(boardInfo.no)">삭제</button> -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row">
            <CommentList v-if="boardInfo.comment > 0" :bno="boardInfo.no" />
            <div v-else class="card text-center">
                댓글 없음
            </div>
        </div>
    </div>
</template>
<script>
import CommentList from './CommentList.vue';

export default {
    data() {
        return {
            searchNo: '',
            boardInfo: {}
        };
    },
    created() {
        this.searchNo = this.$route.query.boardNo;
        this.getBoardInfo();
    },
    methods: {
        async getBoardInfo() {
            this.boardInfo = await this.$get('/api/boards', this.searchNo);
        },
        getDateFormat(val){
            let date = val == '' ? new Date() : new Date(val);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);
            let day = ('0' + date.getDate()).slice(-2);
            console.log(val, date);
            return `${year}-${month}-${day}`;
        },
        goToUpdateForm(no) {
            this.$router.push({ path: '/form', query: { boardNo: no } });
        }
    },
    components: {
        CommentList
    }
}
</script>
