let template = `
    <div>
        <!--text 속성-->
        <p v-text="'Hello, '+ title"/> 
        <p> Hello, {{ title }} </p>
 
        <!-- bind 디렉티브 -->
        <p v-bind:id="postId" 
           name= "temp" 
           text="Testing" />
        <img v-bind:src="fileName">
        <a v-bind:href="url">링크</a>
        
        <!--bind 디렉티브 -style -->
        <p style = " color : blue;">문자색 직접 지정 </p>
        <p v-bind:style="{ color : myColor}">vue 방식</p>
        <p style = "color : blue ; font-size : 200%;"> 두 가지 속성을 직접 지정</p>
        <p v-bind:style="{ color : myColor, fontSize : myFont }"> vue 방식 </p>
        <p v-bind:style="myStyle"> vue방식</p>
        
        <!--bind 디렉티브 - class-->
        <p class="emphasis"> 직접 강조</p>
        <p v-bind:class = "myClass"> Vue 활용 </p>
        <p class="bg emphasis"> 직접 복수 클래스 적용 </p>
        <p v-bind:class= "[bgClass, myClass]"> Vue 활용 복수적용 </p>
        <p v-bind:class= "{'text': isSelected}"> class 적용여부 제어 </p>
        </div>
`;
// 닫는태그 생략 텍스트 디렉티브 .v-text를 사용할 경우 닫는태그 사용x  /> 요로케
// 템플릿을 주로쓴다 텍스트 디렉티브로 쓰면 불편함이 존재하니까..?먼불편함인지모르겟움ㅜㅎ  <p v-text="'Hello, '+ title + ((new Date()).getFullYear())"/>
// 텍스트디렉티브 사용할때 템플릿을 다룰때의 차이...를 기억... 

// bind 디렉티브  속성의 제한이 없음. v-bind: 이렇게 쓰면 뷰가 관리하는 속성, 변경해야하는 소지가 있는 프로퍼티연결..?
// 바인드영역은 자바스크립트? 필요한 영역만 필요한 속성해 대해서만 사용. 
// myColor 는 내가 사용할 프로퍼티
// myStyle객체타입으로 들어가야한다.. 데이터타입이 반드시 객체..타입..근디 왜?

// 

export default {
    template, // 화면
    data : function(){ // 데이터라는 등록된 함수니까 원래는  data : function() 이렇게 표현. 데이터옵션은 반드시 return이 필요. 리턴한 객체안에 원하는 프로퍼티 등록하면된다.
        return{
            title : 'Vue.js', // 타이틀이라는 이름으로 프로퍼티 하나 설정.  뷰가 가진 템플릿문법.
            postId : 'raw',
            fileName :'polo.jpg', 
            url : 'http://www.naver.com',
            myColor : 'blue',
            myFont : '100px', // 단위지정해주어야함 px,퍼센트
            myStyle : {
                color : 'green',
                fontSize : '200%'
            },
            myClass : 'emphasis',
            bgClass: 'bg',
            isSelected : false
            }
        }
    };


// 컴포넌트는 객체. 독립된 형태. 자스 파일 하나를 컴포넌트. 
// 뷰가 자신들이 다루는 ---을 프로퍼티라고 부른다. 데이터 옵션과 컴퓨티드 옵션의 값들을  프로퍼티라고 한다. 뷰에서는 용어가 조금씩 다름. 