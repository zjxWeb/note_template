function colorUi(rootDom) {

    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.id = "colorPicker";

    // 创建id为inputColor的input框
    const inputText = document.createElement("label");
    inputText.innerHTML = "输入你的颜色"
    const inputColor = document.createElement("input");
    // 将其属性type设置为text
    inputColor.type = "text";
    inputColor.id = "inputColor";

    const label = document.createElement("label");
    // <label for="hexColor">Hex Color:</label>
    // 设置属性for
    label.setAttribute("for","hexColor")
    label.innerHTML = "Hex Color"
    const hexColor = document.createElement("input");
    hexColor.type = "text";
    hexColor.readOnly = true;
    hexColor.id = "hexColor"

    const label1 = document.createElement("label");
    label1.setAttribute("for","rgbColor")
    label1.innerHTML = "RGB Color:"
    const rgbColor = document.createElement("input");
    rgbColor.type = "text";
    rgbColor.readOnly = true;
    rgbColor.id = "rgbColor"

    
    rootDom.appendChild(colorPicker);
    rootDom.appendChild(inputText);
    rootDom.appendChild(inputColor);
    rootDom.appendChild(label);
    rootDom.appendChild(hexColor);
    rootDom.appendChild(label1);
    rootDom.appendChild(rgbColor);
    //---------------------------------------------------------------
    inputColor.addEventListener('input', updateColorPicker);
    colorPicker.addEventListener('change', updateColor);

    function updateColorPicker() {
        const inputColorValue = inputColor.value;
        if (isValidHex(inputColorValue)) {
            colorPicker.value = inputColorValue;
        } else if (isValidRgb(inputColorValue)) {
            const rgbArray = inputColorValue.match(/\d+/g);
            colorPicker.value = rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2]);
        }
        updateColor();
    }

    function updateColor() {
        const selectedColor = colorPicker.value;
        hexColor.value = selectedColor;
        
        const rgb = hexToRgb(selectedColor);
        rgbColor.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    }

    function hexToRgb(hex) {
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        return { r, g, b };
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function isValidHex(hex) {
        return /^#[0-9A-F]{6}$/i.test(hex);
    }

    function isValidRgb(rgb) {
        return /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/.test(rgb);
    }
}
