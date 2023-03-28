'use strict';

const items = document.querySelectorAll('.item');
items[3].after(items[0]);

const propsLists = document.querySelectorAll('.props__list');
const content = document.querySelectorAll('.content');
const title = document.querySelectorAll('.item__title');
const propsItems = document.querySelectorAll('.props__item');

title[1].textContent = 'This и прототипы объектов';

content[2].append(propsLists[4]);
content[4].append(propsLists[2]);

propsLists[1].before(title[3]);
propsLists[2].before(title[4]);
propsLists[5].before(title[0]);

propsItems[26].before(propsItems[9]);
propsItems[14].after(propsItems[43], propsItems[44]);
