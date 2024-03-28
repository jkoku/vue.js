// watch.js

let template=`
    <div>
        공급가액 : <input type="number" v-model="price"> 원
        <p> 최종소비자가  : {{ taxIncluded }}  </p>
        <p> 최종소비자가  : {{ getFinalPrice() }}  </p>
        <p> 공급가액 50% 할인  : {{ taxIncluded * 0.5 }} </p>
        <p> 공급가액 50% 할인  : {{ getFinalPrice() * 0.5 }} </p>

        구입갯수 : <input type="number" v-model="count"> 개
        <p> 결제금액 : {{ total }} 원 </p>
        <p> 부가세   : {{ tax }} 원 </p>
        <p> 매출액   : {{ revenue }} 원 </p>
        
        <hr>
        <p> 금지문자는 [{{ forbiddenText }}] </p>
        <textarea v-model ="inputText"></textarea>

    </div>
`;
// 하나는 함수호출, 하나는 computed 


export default{
    template,
    data(){
        return{
            price : 0,
            count : 0,
            forbiddenText : '오늘', 
            inputText : ''  
        }
    },
    computed : { // 프로퍼티 => 매개변수X, return필수 (computed 는 또다른 프로퍼티. 함수의 형태를 띄고있지만 프로퍼티. 무조건 매개변수는 없고 return 이 필요하다. 
                 //         => 내부에 프로퍼티가 반드시 포함. 
        taxIncluded() {
            return this.price * 1.1;
        },
        total() {
            return this.taxIncluded * this.count;
        },
        tax(){
            return Math.round(this.total * 0.1);
        },
        revenue(){
            return this.total - this.tax;
        }
    }, 
    methods : {
        getFinalPrice(){
            return this.price * 1.1 ;
        }
    },
    watch : { // 프로퍼티가 변경될 경우 무슨 작업을 하겠다. 정의 리턴하는거업음. 카운트바뀌면 뭔가 작업해야하는것들을 묶어서 연동. 
        count() {
            alert('구입 갯수를 입력했습니다.');
        },
        inputText(){
            let pos = this.inputText.indexOf(this.forbiddenText)
           // console.log(pos)
            if(pos > -1){  //반드시 if 문이 있어야한다. 무한루프방지
                alert(this.forbiddenText + '는 입력할 수 없습니다.');
                this.inputText = this.inputText.substr(0, pos);
            }
        }
    }

}
// computed 매개변수를 사용할수없다. 반드시 내부에 property 중에 하나를 사용해야한다. 
// computed 정해진 값을 가야한다면 한번만 실행 정해진값만 계속 . 함수내부코드가 재호출되지않는다. 
// 함수는 프라이스값이 변경되지않더라도 100번호출하면 100번 실행.
// 값을 연동해서 어떤 값을 가질때는 computed 가 더 나음...
// computed는 readonly 수정할 수 없다.  computed는 우선은 내가 쓰지않아도 한번은 실행을 보장한다. 값이니까

// watch 는감시자. 이미 존재하는 프로퍼티 중에 하나를 감시하겠다고 선언. 매개변수도 없고 리턴도 업음
// 사용자가 입력하고 전송누르면 아작스돌리는데, 아작스 돌리는거 클릭이벤트가 아니라 값이 바뀌면 실시간으로 바뀌는데 그걸 정의할때는 와치를 사용한다.  
// 예시로 아작스 비동기할때 많이 쓰인다. ... 그게모지요.  작업을 묶어줌.. 
// indexOf() 내가 지금 가진 단어가 있는지없는지 확인할때 씀
