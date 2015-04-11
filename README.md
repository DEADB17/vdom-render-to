# vdom-render-to

Convenience functions for creating and updating
[virtual-dom](https://www.npmjs.com/package/virtual-dom) trees.


## Motivation

Streamlining the steps to create a DOM tree from a virtual-dom representation
and updating it.


## Installation

`npm install --save vdom-render-to`


## Use

1. ```javascript
var h = require('virtual-dom/h');
var vdomRenderTo = require('vdom-render-to');
```

2. Select the DOM element that will be updated when rendering.  
   *The element itself will be updated*, not just its children.  
   ```javascript
   var update = vdomRenderTo(element);
   var vtree;
   ```

3. Do any processing necessary to generate the first virtual-dom tree (vtree).  
   `vtree = h('h1', 'hello world');`

4. Update the element with the vtree:  
   `update = update(vtree);`  
   Note that `update`, the function returned by `vdomRenderTo` is different than
   the one returned by subsequent calls to `update`. Instead of using different
   names, like `create` and `update` is more convenient to just update the same
   function reference after every call.

5. Repeat steps *3* and *4* whenever you need to re-render. e.g.: on user
   interaction.


--------------------------------------------------------------------------------

*vdom-render-to* Copyright 2015 © DEADB17 <DEADB17@gmail.com>  
Distributed under the [MIT license](LICENSE).
