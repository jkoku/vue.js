// postList.js

let template = `
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>userId</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="post in postList" :key="post.id"> 
                    <tr v-if = "post.id <= 10"
                    @click="goToDetail(post.id)">
                        <td>{{post.id}}</td>
                        <td>{{post.title}}</td>
                        <td>{{post.userId}}</td>
                    </tr>
            </tbody>
        </table>
    </div>
`;

export default {
    template,
    data(){
        return{
             postList : []
        }
    },
    created(){
        this.getPostList(); // 비동기
    },
    methods : {
        async getPostList(){
            // 비동기 통신의 순서를 동기식으로 진행(내부에서는).. 랜더링 될때 이 값이 없을수도 있다. 값이 확실히 오고 랜더링하는게아니라 
            this.postList =  await fetch('https://jsonplaceholder.typicode.com/posts')
                                   .then(res => res.json())
                                   .catch(err => console.log(err));
        },
        goToDetail(postId){
            this.$router.push({ name : 'postInfo', query : { id : postId } });
        }
    }
}

// 쿼리는 어떤방식으로 전달할건지 정함.
// pathbarrier 형태로는 params를 사용하는데 도큐먼트 여는데 문제생길수있어서 
//일단 사용ㄴㄴ 쿼리형태로 쓰십디오.. path에도 /:id 이런거 더붙혀서해야댐 귀찬쓰

/* async getPostList(){
        this.postList =  await fetch('')
                         .then(res => res.json())
                         .catch(err => console.log(err));
} 단발성으로 쓰는 아작스가 아닌 경우 async...프로미스...기반....
await선언하는 순간 비동기가 아니라 동기식으로 순서를보장
// then : 비동기돌리고 확실히 결과가 오면 행동을 하겠다. 

getPostList(){
    fetch('')
    .then(res => res.json())
    .then(data => {
        this.postList = data;
    })
    .catch(err => console.log(err));
}
*/
