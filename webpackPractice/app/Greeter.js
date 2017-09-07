// Greeter.js

//es5语法
/*var config = require('./config.json');
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  return greet;
};*/

//es6语法
import React, {Component} from 'react'
import config from './config.json'
import styles from './Greeter.css';//导入css

class Greeter extends Component{
	render(){
		return (
			<div className = {styles.root}>//添加类名
        {config.greetText}
      </div>
		);
	}
}

export default Greeter