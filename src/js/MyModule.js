
export default class MyModule {

	constructor() {
		console.log("My module loaded.");
	}

	theMeaningOfLife() {
		return 42;
	}

	lookOutOfTheWindow() {
		return window.location.href
	}

}
