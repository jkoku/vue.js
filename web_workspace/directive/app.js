//app.js
// => Root Component
const { createApp } = Vue

import RawComponent from './raw.js';  // 같은폴더라도 ./경로에추가.js파일하나가 모듈이 되도록하기 때문에 export했으니까 import를 어떤 이름으로 받겠습니다. 라는 개념. 
import InputComponent from './input.js';
import ModelComponent from './exam01.js';
import ListComponent from './list.js';
import ForComponent from './exam02.js';
import IfComponent from './if.js';
const template = ` 
<div>
    <!-- 자식 컴포넌트 추가-->
    <!-- <RawComponent/> -->
    <!-- <InputComponent/> -->
    <!-- <ModelComponent/> -->
    <!-- <ListComponent/>-->
    <!--  <ForComponent/>-->
    <IfComponent/>
</div>
`;
// 자식컴포넌트는 하나의 태그로 인식. 태그를 기반으로 이 위치에 컴포넌트를 쓰고싶다.를 알려줌. 

createApp({
    template,
    components : {
       //RawComponent, // 'raw-component' : RawComponent /정보등록. 실제사용하려면 화면에 연결해주어야한다. 
       //InputComponent,
       //ModelComponent,
       //ListComponent,
       //ForComponent,
       IfComponent
    }
})
.mount('#app');

// 아예 다른 파일로 독립된 자식을 만들고 컴포넌츠 안에 자식 등록. 