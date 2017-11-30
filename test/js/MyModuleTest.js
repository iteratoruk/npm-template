import MyModule from "MyModule";

describe('my module', () => {
	const mod = new MyModule();
	it('should know the meaning of life', () => {
		expect(mod.theMeaningOfLife()).to.equal(42);
	});

	it('should know about the window object', () => {
		expect(mod.lookOutOfTheWindow()).to.equal(window.location.href);
	})
})
