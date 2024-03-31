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
                <td> {{userInfo.userName}} </td>
            </tr>
             <tr>
                <th>email</th>
                <td> {{userInfo.email}} </td>
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
        let id = this.$route.query.id; // 내가 가진 라우'트' 정보.쿼리. ; 라우터를 통해 만들어진 컴포넌트는 내부에 라우트를 가지고있고 속성에 라우트한테 푸시한정보가 같이 있다. 
        this.getUserInfo(id);
    },
    methods : {
       async getUserInfo(id){
            this.userInfo = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
            .then(res => res.json())
            .catch(err => console.log(err));
        }
    }
}