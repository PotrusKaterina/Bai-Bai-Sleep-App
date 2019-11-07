import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from "../../../../../app/components/buttons/button/button";


describe('AuthInput', () => {
    test('create snapshot AuthInput', () => {
        const render = new ShallowRenderer();
        const snapshot = render.render(<Button />);
        expect(snapshot).toMatchSnapshot();
    })
});