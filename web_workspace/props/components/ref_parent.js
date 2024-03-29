//ref_parent.js
import ChildComponent from './ref_child.js';

let template = `
<div>
	<ChildComponent ref="child" />
	<button type="button"
			@click="changeChildData">
			Change Child Data
	</button>
	<button type="button"
			@click="clickChildEvent">
			Child Click Event
	</button>
	<button type="button"
			@click="executeChildFun">
			Child Method Excute
	</button>
    <p> {{ msg }} </p>
</div>
`;

export default{
    template,
    data(){
        return {
            isMounted : false
        }
    },
    mounted(){
        this.isMounted = true;
    },
    computed : {
        msg(){         
            return !this.isMounted ? '' : this.$refs.child.msg;
        }
    },
    methods :{
        changeChildData(){
            this.$refs.child.msg = 'Data Update';
        },
        clickChildEvent(){
            let childCom = this.$refs.child;
            let childBtn = childCom.$refs.btn;
            childBtn.click();

            this.$refs.child.$refs.btn.click();
        },
        executeChildFun(){
            this.$refs.child.childFunc();
        }
    },
    components : {
        ChildComponent
    }
}