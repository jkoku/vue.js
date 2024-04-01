// userInsert.js 복사 userUpdate! 한 단계만 추가하면 되서 복사했음 
// 템플릿도 동일. 클릭이벤트에 거는 함수 변경.  updateUserInfo만 수정하면됨

let template=`
    <div>
        <table>
            <tr>
                <th>id</th>
                <td><input type="text" v-model="user.id" readonly></td>
            </tr>
            <tr>
                <th>name</th>
                <td><input type="text" v-model="user.name"></td>
            </tr>
            <tr>
                <th>username</th>
                <td><input type="text" v-model="user.username"></td>
            </tr>
            <tr>
                <th>email</th>
                <td><input type="text" v-model="user.email"></td>
            </tr>
            <tr>
            <button type="button" @click="updateUserInfo()">저장</button>
        </tr>
        </table>
    </div>
`;
export default {
    template,
    data(){
        return{
            user : {
                id : '',
                name : '',
                username : '',
                email : ''
            }
        }
    },
    created(){
        let id = this.$route.query.id;
        this.getUserInfo(id);
    },
    methods : {
        async getUserInfo(id) {
            this.user = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
            .then(res => res.json())
            .catch(err => console.log(err));
        },
        updateUserInfo(){
            let data = {
                id : this.user.id,
                name : this.user.name,
                username : this.user.username,
                email : this.user.email
            }
            fetch('https://jsonplaceholder.typicode.com/users/'+data.id, {
                method : 'put', // 수정 put
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data);
                if(data != null) {
                    alert('정상적으로 수정되었습니다.')
                }else {
                    alert('수정되지않았습니다. ')
                }
            })
            .catch(err=> console.log(err))
        }
    }
}
