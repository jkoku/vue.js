//list.js

let template =`
    <!-- 프로퍼티 없이 v-for -->
    <ul>
        <li v-for="num in 5" v-bind:key="num">{{num}} </li>
    </ul>
    <!-- 단일값 배열 활용 -->
    <ul>
        <li v-for="data in myArray"> {{data}} </li>
    </ul>
    <ul>
    <li v-for= "(data, i) in myArray" :key="i"> {{i}} : {{data}}  </li>
    </ul> 

    <!-- 객체 배열을 활용-->
    <!-- 1) -->
    <div>
        <ul v-for="user in users" :key="user.id"> 
            <li>{{user.id}}</li>
            <li>{{user.name}}</li>
            <li>{{user.age}}</li>
        </ul> 
    <hr>
    <!-- 2) -->
    <div>
        <ul v-for="user in users" :key="user.id">
            <li v-for ="(value, name) in user" :key="value">
            {{ name }} : {{ value }},{{ idx }} </li>
         </ul>
     </div>
    </div> 
    `;

// num은 for directive 를 위한 임시변수. 자기공간을 태그로 표시. 들어간 태그가 사용하는 범위. 
// :만 붙혀도 인식한다. 여러개속성에 계속 bind directive가 붙는다면 복잡해지니까 생략을 허용. 컬럼만있으면 바인드 디렉티브가 연결되었다고 생각하면됨. 
// id 는 db에서 프라이머리키. 가진 데이터중에 변경되지 않을값을 키속성으로 주면된다. 
// 1) 하나씩 값을 꺼내와서 어디에 값을 지정할건지 정해주는게 가장 기본. 
// for of 와 for in 두가지 . for in 기억해두기... // ~땐 두번째로 넘어오는 객체가 필드 , 배열일때는 인덱스
export default {
    template,
    data(){
        return{
            myArray : ['김밥', '샌드위치', '햄버거', '라면'],
            users : [
                {
                    id : 1,
                    name : 'Hong',
                    age : 20
                },
                {
                    id : 2,
                    name : 'kang',
                    age : 30
                },
                {
                    id : 3,
                    name : 'Lee',
                    age : 25
                },

            ]
        }
    }
}