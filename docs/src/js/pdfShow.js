// 创建一个名为IFrameComponent的组件
class IFrameComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        // 创建一个按钮元素
        const button = document.createElement('button');
        let  butTex = 'Show PDF'
        button.style.backgroundColor = 'blue';
        button.style.width = '100px';
        button.style.height = '50px';
        button.innerText = butTex;

        const dialog = document.createElement('dialog');
        dialog.style.width = "100vw";
        dialog.style.height = "100vh";
        dialog.style.backgroundColor = "rgba(0,0,0,0.5)"
        dialog.style.dialog = "none"
        dialog.style.zIndex = "9999"
        dialog.style.position = "fixed"
        dialog.style.top = "0"
        dialog.style.left = "0"


        // 获取传入的src属性值
        const btnsrc = this.getAttribute('src');
        button.setAttribute('src', btnsrc);

        // 创建iframe元素
        const iframe = document.createElement('iframe');
        // 点击上方按钮弹出框，并且带关闭按钮X
        button.addEventListener('click', () => {
            dialog.style.display = "block"
            dialog.appendChild(iframe);
            shadow.appendChild(dialog);
        });

      
        iframe.setAttribute('src', btnsrc);
        iframe.style.width = '98%';
        iframe.style.height = '95%';

        // 右下角关闭按钮
        // 创建一个按钮元素
        var btn = document.createElement("button");
        // 设置按钮的文本
        btn.innerText = "关闭";

        // 样式
        btn.style.display = "block";
        btn.style.position = "fixed";
        btn.style.right = "40px";
        btn.style.bottom = "110px";
        btn.style.width = "65px";
        btn.style.height = "35px";
        btn.style.background = "#29a9e0cf";
        btn.style.color = "#ffffff";
        btn.style.borderRadius = "15px";
        btn.style.fontSize = "16px";
        btn.style.color = "rebeccapurple";
        btn.style.fontWeight = "600";
        btn.style.lineHeight = "20px";
        btn.style.textAlign = "center";
        btn.style.cursor = "pointer";
        dialog.appendChild(btn)
        btn.addEventListener('click', () => {
            dialog.style.display = "none"
        })

        shadow.appendChild(button);
        // dialog.appendChild(iframe);
        }
    }
  
  // 定义组件标签名
  customElements.define('iframe-component', IFrameComponent);
//   <iframe-component src="https://www.example.com"></iframe-component>