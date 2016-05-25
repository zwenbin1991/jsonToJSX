/**
 * @descriptions: 将json tree结构的对象转成字符串表示
 * @author: 法克
 * @email: 法克@126.cn
 * @date: 2016-5-25
 */

'use strict';

import { parseJSXTree } from './parseJSXTree.js';

const __SPACE__ = ' ';
const __LEFT_BOUND__ = '<';
const __RIGHT_BOUND__ = '>';
const __ENTER__ = '\n';
const __SPLITTER__ = '/';

/**
 * 支持值为函数类型的对象序列化
 *
 * @param {Type} value 值
 * @return {String}
 */
const stringify = value => {
    if (value === void 0 || typeof value === 'function') return '' + value;

    return JSON.stringify(value, (key, val) =>
        typeof value === 'function' ? '' + val : val
    );
};

/**
 * 生成当前组件的属性
 *
 * @param {Object} props 属性对象 [可选]
 * @return {String}
 */
const buildProps = (props = '') =>
    Object.keys(props).map(prop =>
        __SPACE__ + encodeURI(prop) + '=' + stringify(props[prop])
    ).join('');

/**
 * 生成当前组件的缩进符
 *
 * @param {Number} count 缩进符个数
 * @return {String}
 */
const buildIndent = (count = 2) =>
    Array(count + 1).join(__SPACE__);

/**
 * 根据jsx tree object生成jsx字符串
 *
 * @param {Array} jsxTrees jsxTree数组
 * @param {Number} indent 缩进字符
 * @return {Array}
 */
const getJsxByJsxTree = (jsxTrees, indent = 2) => {
    let componentName, props, childrens, jsx;

    if (Array.isArray(jsxTrees)) { // 如果jsxTree是数组
        return jsxTrees.map(jsxTree => getJsxByJsxTree(jsxTree, indent));
    } else { // 如果jsTree是对象
        componentName = jsxTrees.componentName;
        props = jsxTrees.props;
        childrens = jsxTrees.childrens;
        // 将缩进、左边界符、属性序列化、右边界符、回车拼接成  <Xxoo a='a' b=10 c='a.click'>
        jsx = buildIndent(indent) + __LEFT_BOUND__ + componentName + buildProps(props) + __RIGHT_BOUND__ + __ENTER__;

        if (childrens) jsx += getJsxByJsxTree(childrens, indent + 2);

        return buildIndent(indent) + __LEFT_BOUND__ + __SPLITTER__ + componentName + __RIGHT_BOUND__;
    }
};

/**
 * 生成组件及其子组件的JSX
 *
 * @param {Array|Object} json 数据
 * @param {String} componentName 组件名
 * @param {Array} childrens 子组件集合
 * @return {String}
 */
export default (json, componentName, childrens) =>
    getJsxByJsxTree(parseJSXTree(json, componentName, childrens));