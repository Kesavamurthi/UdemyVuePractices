const app = Vue.createApp({
    data() {
        return{
            courseGoalA: 'finish it',
            courseGoalB: 'Master it',
            Vuelink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoals(){
            const randomNumber = Math.random();
            if ( randomNumber < 0.5 ){
                return this.courseGoalA;
            }
            else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');


