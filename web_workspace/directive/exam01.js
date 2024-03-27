//exam01.js => ModelComponent

let template = `
<div>
    <p> {{ title }} </p>
    <label> 이름: <input type="text" v-model.lazy="myName"></label><br> 
    
    <label> 좋아하는 색은: <br>
    <input type="radio" v-model="myColor" value="red"> 빨강 <br>
    <input type="radio" v-model="myColor" value="green"> 녹색 <br>
    <input type="radio" v-model="myColor" value="blue"> 파란색 <br>
    <input type="radio" v-model="myColor" value="yellow"> 노란색 <br>
    <input type="radio" v-model="myColor" value="gray"> 회색<br>
    </label>

    <p> 내 이름은 {{ myName }}이고, <br>좋아하는 색은 {{ myColor }} 입니다.<p>

    <!--<select v-model="mySelectColor" v-bind:disabled="!myName">-->
    <select v-model="mySelectColor" v-bind:disabled="myName.length == 0">
        <option value="red"> 빨강 </option>
        <option value="green"> 녹색 </option>
        <option value="blue"> 파란색 </option>
        <option value="yellow"> 노란색 </option>
        <option value="gray"> 회색 </option>
    </select>
    <p> 내 이름은 {{ myName }}이고, <br>좋아하는 색은 {{ mySelectColor }} 입니다.<p>
</div>
`;
// 처음에는 길이 0, 입력한 마이네임 길이가 변경됨. diabled 는 false가 되고 사용할수 있는 상태로 변경된다. 

export default {
    template,
    data(){
        return{
            title :'자기소개',
            myName:'',
            myColor: [],
            mySelectColor:[]
        }
    }
}
