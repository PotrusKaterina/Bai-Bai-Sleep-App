import { compareCardItem } from '../../../../app/components/listSoundSleeperScrollView/listSounsSleeperApi';

describe('compareListItem', () => {
    test.each([
        ['0', '1', -1],
        ['a', 'b', -1]
    ])('Testing test, %s', (a, b, expected) => {
        expect(compareCardItem(a, b)).toEqual(expected);
    })
});