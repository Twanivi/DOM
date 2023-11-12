// 1

class Button {
    constructor(id, label, user){
        this.id = id;
        this.label = label;
        this.user = user;
    }

    onClick(){
        console.log(this.user);
    }

    render(){
        const btn = document.createElement('button');
        btn.textContent = this.user;
        document.body.append(btn);
        
        this.id = btn.id;
        this.label = btn.label;
        btn.addEventListener('click', () => {
            this.onClick();
        })
        return btn;
    }
}

//2
const container = document.getElementById("wrapper");

const data = [
    { id: 1, label: "Button 1", user: { name: "Pit" } },
    { id: 2, label: "Button 2", user: { name: "Jane" } },
    { id: 3, label: "Button 3", user: { name: "Kyle" } }
    ];

    data.forEach(item => {
               const users = new Button(item.id, item.label, item.user.name);
        container.append(users.render())
    })