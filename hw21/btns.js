const container = document.getElementById('wrapper');

const data = [
    { id: 1, label: "Button 1", user: { name: "Pit" } },
    { id: 2, label: "Button 2", user: { name: "Jane" } },
    { id: 3, label: "Button 3", user: { name: "Kyle" } }
    ];

export default class BtnsRendered {
    constructor(id, label, user){
            this.id = id;
            this.label = label;
            this.user = user;
    }
    
    onClick(){
            this.user = data.user.name;
            console.log(this.user);
    }
    
    render(){
            const btn = document.createElement('button');
            btn.innerHTML = data.user.namer;
            this.id = data.id;
            this.label = data.label;
            btn.onclick = this.onClick();
            return btn;
    }
}
    