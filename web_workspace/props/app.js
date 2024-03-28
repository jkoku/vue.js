
const{ createApp } = Vue // 얘를 이용해서 루트 컴포넌트 생성

import MyNameComponent from './components/myName.js';
import CheckComponent from './components/check.js';
import refComponent from './components/ref_parent.js';
let template =`
<div>
     <!--<MyNameComponent/>, -->
     <!--<CheckComponent/>, -->
     <refComponent/>
</div>

`;

createApp({
    template,
    components :{
        MyNameComponent,
        CheckComponent,
        refComponent
    }
})
.mount('#app');