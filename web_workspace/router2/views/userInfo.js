// userlnfo.js

let template = `
    <div>
        <table>
            <tr>
                <th>Id</th>
                <td> {{userInfo.id}}</td>
            </tr>
            <tr>
                <th>name</th>
                <td> {{userInfo.name}}</td>
            </tr>
            <tr>
                <th>userName</th>
                <td> {{userInfo.username}} </td>
            </tr>
             <tr>
                <th>email</th>
                <td> {{userInfo.email}} </td>
            </tr>
            <tr>
                <button type="button" @click="goToUpdateForm()">수정</button>
                <button type="button" @click="delUserinfo()">삭제</button>
        </tr>
        </table>
    </div>
`;


export default {
    template,
    data(){
        return {
            userInfo : {}
        }
    },
    created(){
        let id = this.$route.query.id; // 내가 가진 라우'트' 정보.쿼리 /라우터를 통해 만들어진 컴포넌트는 내부에 라우트를 가지고있고 속성에 라우트한테 푸시한정보가 같이 있다. 
        this.getUserInfo(id);
    },
    methods : {
       async getUserInfo(id){
            this.userInfo = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
            .then(res => res.json())
            .catch(err => console.log(err));
        },
        goToUpdateForm(){
            this.$router.push({ name : 'userUpdate',
                                query : { id : this.userInfo.id }
             })
        },
        delUserinfo(){
            fetch('https://jsonplaceholder.typicode.com/users/'+this.userInfo.id, {
                method : 'delete'
            })
            .then(res=> res.json())
            .then(data=> {
                let result = Object.keys(data).length;
                if(result == 0 ) { 
                    alert('정상적으로 삭제되었습니다.')
                } else {
                    alert('삭제되지않았습니다.')
                }
            })
            .catch(err=> console.log(err));
        }
    }
}