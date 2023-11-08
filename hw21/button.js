export default class Button {
    constructor(id, label, user){
        this.id = id;
        this.label = label;
        this.user = user;
    }

    onClick(){
        this.user = user.name;
        console.log(this.user);
    }

    render(){
        const btn = document.createElement('button');
        btn.innerHTML = user.name;
        this.id = btn.id;
        this.label = btn.label;
        btn.addEventListener('submit', (event) => {
            event.preventDefault();
            this.onClick();
        }) 
        return btn;
    }
}