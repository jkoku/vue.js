<template>
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
</template>
<script>
export default {
    props : ['bno'],
    data() {
        return {
            commentList : []
        };
    },
    mounted(){
       this.getCommentList();         
    },
    methods: {
        async getCommentList() {
            this.commentList = await this.$get('/api/comments', this.bno);
        },
        getDateFormat(val){
            let date = val == '' ? new Date() : new Date(val);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);
            let day = ('0' + date.getDate()).slice(-2);
            console.log(val, date);
            return `${year}-${month}-${day}`;
        }
    }
}
</script>