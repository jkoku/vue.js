// userList.js

let template = `
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>userName</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="user in userList" :key="user.id" /> 
                    <tr v-if = "user.id <= 10" @click="goToDetail(user.id)">
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.userName}}</td>
                        <td>{{user.Email}}</td>
                    </tr>
            </tbody>
        </table>
    </div>
`;

export default {
    template,
    data(){
        return{
            userList : []
        }
    },
    created(){
        this.getUserList(); // 비동기
    },
    methods : {
        async getUserList(){
            // 비동기 통신의 순서를 동기식으로 진행(내부에서는).. 랜더링 될때 이 값이 없을수도 있다. 값이 확실히 오고 랜더링하는게아니라 
            this.userList =  await fetch('https://jsonplaceholder.typicode.com/users')
                                   .then(res => res.json())
                                   .catch(err => console.log(err));
        },
        goToDetail(userId){
            this.$router.push({ name : 'userInfo', query : { id : userId } });
        }
    }
}