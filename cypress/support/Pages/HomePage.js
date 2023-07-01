class HomePage {
	visit() {
		cy.log('Open website home page');
		cy.visit('/');
	}
	visitAndCloseWelcomePopUp() {
		this.visit();
		cy.get('#mat-dialog-0').contains('Welcome to OWASP Juice Shop!');
		cy.get('button[aria-label="Close Welcome Banner"]').click();
	}
	visitWithoutWelcomeBanner() {
		this.visit();
		cy.setCookie('welcomebanner_status', 'dismiss');
		cy.setCookie('cookieconsent_status', 'dismiss');
		cy.get('.cc-btn.cc-dismiss').click();
	}
	headerHomeButton() {
		return cy.get('[aria-label="Back to homepage"]');
	}
	accountButton() {
		return cy.get('#navbarAccount');
	}
}
export default new HomePage();
