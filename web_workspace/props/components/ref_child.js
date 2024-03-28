//ref_child.js

let template =`
<div>
    <button id= 'cBtn' type="button" @click="childClick()" ref="btn"> click </button>
    <p> {{ msg }} </p>
</div>
`;

export default {
    template,
    data(){
        return{
            msg :''
        }
    },
    mounted(){
        this.$refs.btn.click();
    },
    methods:{
        childClick(){
            console.log('click 이벤트가 발생');
        },
        childFunc(){
            console.log('child method가 실행');
        }
    }

}


// ref는 created에서 생성불가. mounted에서 가능하다. 