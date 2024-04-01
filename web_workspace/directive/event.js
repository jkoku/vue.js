// event.js

let template = `
    <div>
        <button type ="button" v-on:click=" upCounter(), printMsg($event)"> Add 1 </button>
            <p> The counter is : {{ counter }} </p>
        <hr>
        <input type ="number" v-model="num">
        <button type ="button" v-on:click=" increaseCounter(num)"> Add {{ num }} </button>
            <p> The counter is : {{ sum }} </p>
        <hr>
        <form style="border: 1px solid black" v-on:click="showAlert('form')">
        <div style="border : 1px solid black" v-on:click.self="showAlert('div')">
            <p style="border : 1px solid black" v-on:click="showAlert('p')">
                <a v-on:prevent href="https://www.naver.com"> 네이버 </a>         
            </p>
            click div tag
        </div>
        </form>
        <hr>
        <input type="text" 
             v-model="keyword" 
             v-on:keyup.enter="showAlert(keyword)">
             
    </div>
`;
//  upCounter 는 프로퍼티가 아니라 upCounter 이름을 가진 함수
//  printMsg($event) 뷰 안에서 이벤트객체를 명시적으로 불러낼때?? 쓰는 하나의 이벤트에서 두가지 동작이 가능함.
//  두번째는 내가 추가하고자하는 값 입력받기
//  self는 본인만 빠지고 흐름은 흐르게한다.내가 동작할지말지만 결정하지 이벤트버블링을 제어하지는 않는다.  stop은 아예 흐름을 막음. 
//  once 누구로부터 시작했는지는 상관없이 내 동작은 한번 내 자식에서 시작해서 버블링통해서 넘어오더라도ㅓ 자식이 선택되든 내가선택되든 동작을 진행하지않는다. 
//  나를 선택하는 한번만 동작하려면 self랑 once 버블링을 제어하는건 stop 뿐이다. 나머지는 본인.. 수식어를 통해서 제어한다ㅏㅏ
//  

export default {
    template,
    data(){
        return {
            counter :  0,
            num : 0,
            sum : 0,
            keyword : ''
        }
    },
    methods :{
        upCounter(event) {
            console.log(event); //v 프로퍼티가 1씩 증가하는지. 매개변수로 넘어오는 정보가 있는지 확인. 있다면 어떤정보인지도
            this.counter += 1; // 뷰 안에서는 내가가진 함수,프로퍼티에 접근할때 this가쓰여야한다.객체내부니까 원래는 this.data.counter 지만 걍 저렇게해도 뷰가 알아먹음 
        },
        printMsg(event){
            console.log(event); //하나의 이벤트에서 두가지 동작이 가능함.
        },
        increaseCounter(data){
            this.sum += data; // 
        },
        showAlert(tag){
            alert('click ' + tag);
        }
    }
}
