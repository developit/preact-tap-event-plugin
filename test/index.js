import { expect } from 'chai';
import injectTapEventPlugin from '../src';
/**@jsx h */

/*eslint-env mocha*/

describe('preact-tap-event-plugin', () => {
	it('should export a class', () => {
		expect(injectTapEventPlugin).to.be.a('function');
	});

	xit('should have proper tests', () => {});
});
