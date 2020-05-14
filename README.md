# testcafe-react-testing

After seeing [Cypress react unit test](https://github.com/bahmutov/cypress-react-unit-test) I decided to attempt to recreate the same 
idea in my favorite e2e testing tool: Testcafe.  This is very early and experimental at this point, but the basic concept is working.
Currently, there are some [limitations with testcafe not supporting JSX](https://github.com/DevExpress/testcafe/issues/4817) so for the time
being you have to use React.createElement, but here's an example of how this works.

```js

import React from 'react';
import { render } from 'testcafe-react-testing';
import { Selector } from 'testcafe';

fixture`React`
  .clientScripts([ //these scripts can go in .testcaferc.json if you like
    { "module": "react/umd/react.development.js" },
    { "module": "react-dom/umd/react-dom.development.js" },
    { "module": "testcafe-react-testing/dist/testcafe-react-testing.umd.min.js" },
  ]);

test('Can render react element', async t => {

    // would be nice if testcafe would allow JSX here:
    let el = React.createElement("div", null, "Hello friends");

    await render(el);

    await t.expect(Selector("div").withText("Hello friends").exists).ok();

})

```

# Installation

clone this repo and play with it, it's not published yet.  still just an experiment.  contributors welcome
