import React from 'react';
import { render } from '../src';
// import { getByText } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

declare global {
    interface Window {
        ReactDOM: any;
    }
}

fixture`React`
    .page('about:blank')



test('Can render react element', async t => {

    let el = React.createElement("div", null, "Hello friends");

    await render(el);

    await t.expect(Selector("div").withText("Hello friends").exists).ok();

})
