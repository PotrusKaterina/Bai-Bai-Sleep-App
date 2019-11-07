import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ListBlock from '../../../../app/components/listBlock/listBlock';


describe('AuthInput', () => {
    test('create snapshot AuthInput', () => {
        const render = new ShallowRenderer();
        const snapshot = render.render(<ListBlock />);
        expect(snapshot).toMatchSnapshot();
    })
});