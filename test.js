'use strict';

var test = require('tape').test;
var h = require('virtual-dom/h');
var vdomRenderTo = require('./');

test('vdomRenderTo', function (t) {
    var el = document.createElement('span');
    var root = document.createElement('div');
    var create, update, expect;
    root.id = 'test-root';
    root.appendChild(el);
    document.body.appendChild(root);

    create = vdomRenderTo(el);
    t.is(typeof create, 'function', 'returns the create function');

    t.test('create first', function (t) {
        update = create(h('span#vnode'));
        t.is(typeof update, 'function', 'returns the update function');

        expect = document.createElement('span');
        expect.id = 'vnode';

        t.is(root.querySelector('#vnode').isEqualNode(expect),
             true,
             'updates the dom correctly');

        t.test('subsequent updates', function (t) {
            update = update(h('span#vnode-two'));
            t.is(typeof update, 'function', 'returns the update function');

            expect = document.createElement('span');
            expect.id = 'vnode-two';

            t.is(root.querySelector('#vnode-two').isEqualNode(expect),
                 true,
                 'updates the dom correctly');

            t.end();
        });
        t.end();
    });
    t.end();
});
