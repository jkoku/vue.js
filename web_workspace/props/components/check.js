//check.js

let ChildComponent = {
    template: `
        <div>
            <p> 숫자   : {{ num }} </p>
            <p> 문자열 : {{ str }} </p>
            <p> 짝수?  : {{ even }} </p>
            <p> 객체   : {{ obj }} </p>
         </div>
    `,
    props : {
        num : {
            type : [Number, String],  // 데이터타입설정할때는 type :
            required : true // 필수값이라면 required true
        },
        str : {
            type : String,
            default : 'Hello!' // defualt 옵션
        } ,
        even : {
            validator(value) {  // 유효성검사하는 함수 , 넘어온값에대해서 내가 원하는 값인지 아닌지 확인하는 함수. 리턴은 불린
                return(value%2 ==0);
            }
        },
        //obj : Object
        obj :{
            type: Object,
            default : ()=>{
                return {
                    name: 'Hong',
                    age : 20
                }
            }

        }
    }
};

export default {
    template : `
    <div>
        <ChildComponent
            v-bind:num ="myNumber"
            v-bind:str ="sendMSg"
            :even ="myNUmber"
            :obj ="newObj"
        />
    </div>`,
    data () {
        return{
            myNumber : 2,
            sendMSg : 'Hello,World!',
            newObj : null
        }  
    },
    components : {
        ChildComponent
    }
}
// 기본적으로 타입은 하나만선언하는데 복수로 할꺼면 배열로
// default null, undefined 는 넘겨주는대로 받는다. 유효성 검사 통과됨. 
