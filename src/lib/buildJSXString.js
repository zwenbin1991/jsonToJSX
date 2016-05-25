/**
 * @descriptions: 将json tree结构的对象转成字符串表示
 * @author: 法克
 * @email: 法克@126.cn
 * @date: 2016-5-25
 */

'use strict';

import { parseJSXTree } from './parseJSXTree.js';

const buildProps = (props = {}) => {

};

/**
 * 生成当前组件的缩进符
 *
 * @param {Number} count 缩进符个数
 * @return {String}
 */
const buildIndent = (count = 1) =>
    Array(count).join('  ');

const buildChildrens = childrens => {

};

export const parse = (json) => {
    json = parseJSXTree(json);
};