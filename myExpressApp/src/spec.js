import { expect } from 'chai';

describe('test suite', () => {
    describe('true or false', () => {
        it('true is true', () => {
            expect(true).to.eql(true);
        });

        it('false is false', () => {
            expect(false).to.eql(false);
        });
    })
};