class ContactPage {
	visit() {
		cy.visit('/#/contact');
	}
	commentField() {
		return cy.get('#comment');
	}
	ratingSlider() {
		return cy.get('#rating');
	}
	captcha() {
		return cy.get('#captcha');
	}
	captchaContext() {
		return this.captcha()
			.invoke('text')
			.then((captchaText) => {
				return captchaText;
			});
	}
	captchaAnswerField() {
		return cy.get('#captchaControl');
	}
}
export default new ContactPage();
