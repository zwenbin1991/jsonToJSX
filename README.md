## jsonToJSX
将JSON数据转换成JSX

## Installaction
	npm i jsonToJSX 或 npm i -g jsonToJSX

## Usage
> 第三方库使用
	
	var jsonToJSX = require('jsonToJSX');
	var data = require('./test.json');
	var jsx = jsonToJSX(json, 'MePage', [
    [
        {
            componentName: 'div',
            props: { id: 0, 'idx': 0, onClick: function () {} },
            childrens: {
                componentName: 'h1',
                innerText: '挖掘机挖掘机'
            }
        }
    ],
    [
        {
            componentName: 'span',
            props: { id: 0, idx: 0, onClick: 'this.xx' }
        }
    ]
		]);
	console.log(jsx);

output:

	[ 
		'<MePage id=0 nickname="aa" bg="url(../xx.jpg)"><div id=0 idx=0 onClick= function () {}> <h1>"挖掘机挖掘机"</h1></MePage>',
		'<MePage id=1 nickname="bb" bg="url(../oo.jpg)"></MePage>'
	]

> 命令行工具使用

	jsonToJSX MePage children.json
    
**PS：** MePage：根组件名、children.json：子组件配置文件
		

	 