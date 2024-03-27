//typicode_vue.js

const { createApp } = Vue 
// 컴포넌트는 보여야할 화면부분을 템플릿이라는 곳에 자신이 가지고 있따. 

let template =`
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
            <tr v-for="(post, idx) in postList" :key="idx" 
                v-on:click="getPostInfo(post.id)">
                <td>{{post.id}}</td>
                <td>{{post.title}}</td>
                <td>{{post.userId}}</td>
            </tr>
        </tbody>
    </table>
</div>
`;

//view

createApp({
  template, // 객체내부에 집어넣음. 정보를 넘겼다. 작성된 기본골격을 알려줌 // 'template ' : template
  data() {
    return {
      postList : []
    }
  },
  created(){
    this.getPostList();
  },
  methods : {
    async getPostList(){
        this.postList = await fetch('https://jsonplaceholder.typicode.com/posts')
                              .then(res => res.json());
    },
    getPostInfo(id){
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        });
    }
  }
}).mount('#list') //div list에 연결됨
//{}안이 컴포넌트이자 뷰객체 컴포넌트가 가지는 실질적인 내용. 템플릿,데이터,기능이 다 들어감. 