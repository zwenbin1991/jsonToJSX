/**
 * @descriptions: 将json对象转换成具有json tree结构的对象
 * @author: 法克
 * @email: 法克@126.cn
 * @date: 2016-5-25
 */

'use strict';

/**
 * json=>jsx tree object
 *
 * @param {Object|Array} jsons 数据
 * @param {String} componentName 组件名
 * @param {Array} childrens 子组件集合 [可选]
 * @return {Array}
 *
 example：
    var jsx = parseJSXTree([{ id: 0, nickname: 'aa', bg: 'url(../xx.jpg)' }, { id: 1, nickname: 'bb', bg: 'url(../oo.jpg)' }],
       'Page',
       [
           [
               {
                   componentName: 'div',
                    props: { id: 0, idx: 0, onClick: function () {} }
               },
               {
                   componentName: 'span',
                    props: { id: 1, idx: 1, onClick: 'this.click' }
               }
        ]
     ]);

 print:
     [
          {
               componentName: 'Page',
               props: { id: 0, nickname: 'aa', bg: 'url(../xx.jpg)' },
               childrens: [{ componentName: 'div', props: { id: 0, idx: 0, onClick: function () {} }, { componentName: 'span', props: { id: 1, idx: 1, onClick: 'this.click' } } }]
          },
          {
               componentName: 'Page',
               props: { id: 1, nickname: 'bb', bg: 'url(../oo.jpg)' }
          }
     ]
 */
export const parseJSXTree = (jsons, componentName = 'div', childrens = []) => {
    jsons = Array.isArray(jsons) ? jsons : [jsons];

    return jsons.map((json, idx) => ({ componentName: componentName, props: json, childrens: childrens[idx] }));
};
