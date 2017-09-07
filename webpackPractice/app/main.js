//main.js

//es5语法
/*const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());*/

/*{extry file}出填写入口文件的路径，本文中就是上述main.js的路径，
{destination for bundled file}处填写打包文件的存放路径填写路径的时候不用添加{}*/

//es6语法
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';//使用require导入css文件

render(<Greeter />,document.getElementById("root"));
