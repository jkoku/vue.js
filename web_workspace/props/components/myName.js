// myName.js

let ChildComponent = { 
   template :`
    <div>
        <p> 내 이름은 {{ myname }} 입니다. </p>
        <p> 변경 될 이름 </p>
        <input type="text" v-model.lazy="updateName" @keyup.enter="updateMyName()">
    </div>
   ` ,
   props : ['myname'], 
   data(){
        return{
            updateName:''
        }
   },
   methods:{
        updateMyName(){
            this.$emit('update-name', this.updateName,
                        '업데이트 진행');
        }
   }

};
// 나는 마이네임이라는 프로퍼티를 이용ㅎㅐ서 값을 받겠다 하는 props가 유일한 통로.. 
// 배열. 원하는 만큼 선언할수있따
// readonly 프로퍼티. 부모가 일방적으로 넘겨주기때문에 수정이 불가하다. warning 띄움.

// 자스의 가장큰단점: 데이터타입에대한
// 들어오는 값을 막아서 동작을 막아주지는 않지만, 어떤 디폴트값을 정의할수 있는 방법이 따로 있따. ..



// Parent
export default {
    template :`
    <div>
        <ChildComponent 
            v-bind:myname= "first"
            v-on:update-name="getName"/>
        <ChildComponent v-bind:myname= "second"/>
    </div>
    `,
    data (){
        return{
            first : 'Hong',
            second : 'Kang'
        }
    },
    components : {
        ChildComponent
    },
    methods:{
        getName(data,msg){
            console.log(data,msg);
            this.first = data; // 자식이 보내준 데이터를 할당한다면 쭉 계속 돌게된다. 서로 주고받는 것처럼 보임. 
        }
    }

}

//getName(data) data는 emit 을 통해 넘어온 값을 그대로 전달되어 보여줌. 이게 기본 방식. 

// 부모가 자식한테 어떤 데이터를 넘길때 자식은 부모가 전달해준 값을 담은 변수를 선언 props['attr']
// 부모는 호출하는 시점에 해당 변수의 어떤값을 전달하고자한다는걸 vind directive롷 연결한다.v-bind:attr
// 경우에 따라서  값의 제한없이 함수, 객체도 넘길수있다.

// 자식이 부모한테 어떤 데이터를 전달하고 싶으면 이때 자식은 $emit('custom-event') 이라는 메소드를 이용해서('custom-event') 전달.  
// v-on:custom-event로 받은값을 정의해준다. 자식이 부모한테 보내는 기본 방식.




