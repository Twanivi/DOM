// Задание 3
// 1. Реализовать следующее мини-приложение
// https://gist.github.com/zhekix

const imgUrl = 'https://bit.ly/2tcDito'; 

class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {
        this.html = `<img src="${this.imgUrl}" alt="">`;
        this.render()
        document.body.style.backgroundColor = 'black';
    }
    
    render() {
      document.body.innerHTML = this.html;
      const img = document.querySelector('img');
      img.style.position = 'fixed';
      img.style.top = `${this.top}px`;
      img.style.left = `${this.left}px`;
      img.style.width = `${this.width}px`;
    }
  
    moveUp() {
      return this.top -= 20;
      this.render();
    }
    moveDown() {
      return this.top += 20;
      this.render();
    }
    moveLeft() {
      return this.left -= 20;
      this.render();
    }
    moveRight() {
      return this.left += 20;
      this.render();
    }
  }
  
 
  const mfLogotip = new Logo(imgUrl);
  console.log(mfLogotip);
  
  mfLogotip.init();
    
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveLeft();
  mfLogotip.moveUp();
  mfLogotip.moveDown();
  mfLogotip.moveRight();
  mfLogotip.render();





  // 2. Добавить к приложению желтый круг (пример ЗДЕСЬ)
// Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры), color (цвет фигуры). При вызове метода render() из экземпляра класса Circle должен отрисоваться круг с заданными стилями.

class Circle extends Logo{
  constructor(url, width, height, color){
    super(url);
    this.color = color;
    this.height = height;
    this.width = width;
  }

  render(){
    const div = document.createElement('div');
    div.style.fontSize = `${this.size}px`;
    div.style.background = this.color;
    div.style.borderRadius = `50%`;
    div.style.width = `${this.width}px`
    div.style.height = `${this.height}px`
    document.body.append(div)
  }
}

const circleLogo = new Circle(imgUrl, 100, 100, 'yellow')
console.log(circleLogo);

circleLogo.render()
