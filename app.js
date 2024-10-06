const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods:{
    add(){
        this.counter = this.counter + 1;
    },
    removethis(){
        this.counter = this.counter - 1;
    },
    setName(event){
        this.name = event.target.value;
    },
    submitForm(){
        alert('submitted');
    },
    setConfirmedName(){
        this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
