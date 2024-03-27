// exam02.js => ForComponent


let template =`
<div>
    <div>
    <p v-for= "line in 5" :key="line"> 
        <span v-for ="num in line" :key="num">
        *
        </span>
        </p>

        <p v-for ="star in stars">
        {{stars}}
        </p>

    </div>
    <div v-for="dan in 9" :key="dan">
        <p v-for ="num in 9" :key="num">
        {{dan}} x {{num}} = {{ dan * num }}
        </p>
        </div>
</div>
`;

// p태그 

export default {
    template,
    data() {
        return {
         //stars : '*','**','***','****','*****'
            
        }
    }
}