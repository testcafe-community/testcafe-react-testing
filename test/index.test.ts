import React from 'react';
import { render } from '../src';
// import { getByText } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

fixture`React`

test('Can render react element', async t => {

    // would be nice if testcafe would allow JSX here:
    let el = React.createElement("div", null, "Hello friends");

    await render(el);

    await t.expect(Selector("div").withText("Hello friends").exists).ok();

})
