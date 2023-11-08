const container = document.getElementById('wrapper');

const data = [
    { id: 1, label: "Button 1", user: { name: "Pit" } },
    { id: 2, label: "Button 2", user: { name: "Jane" } },
    { id: 3, label: "Button 3", user: { name: "Kyle" } }
    ];

export default class BtnsRendered {
    constructor(id, label, user, data){
            this.id = id;
            this.label = label;
            this.user = user;
            this.data = data;
    }
    
    onClick(){
        data.forEach(e => {
            this.user = data.e.user.name;
            console.log(this.user);
        })
            
    }
    
    render(){
            data.forEach(item => {
            this.id = data.item.id;
            this.label = data.item.label;
            item.addEventListener('submit', (event) => {
                event.preventDefault();
                this.onClick();
            }) 
            container.append(item);
            })
            
    }
}
    