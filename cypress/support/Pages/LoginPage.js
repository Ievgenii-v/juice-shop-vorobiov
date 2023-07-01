import homePage from './HomePage';
class LoginPage {
	visit() {
		cy.visit('/#/login');
	}
	loginForm() {
		return cy.get('#login-form');
	}
	emailField() {
		return cy.get('#email');
	}
	emailFieldErrorMsg() {
		return cy.get('#mat-error-0');
	}
	passwordField() {
		return cy.get('#password');
	}
	passwordFieldErrorMsg() {
		return cy.get('#mat-error-1');
	}
	loginButton() {
		return cy.get('#loginButton');
	}
	loginValidationMsg() {
		return cy.get('[class="error ng-star-inserted"]');
	}

	accountDropMenu() {
		return cy.get('#mat-menu-panel-0');
	}
	accountLogoutButton() {
		cy.get('#navbarLogoutButton');
	}

	fillLoginForm(email, password) {
		cy.log(`Auth user with Email: ${email} and Pass: ${password}`);
		this.emailField().type(email);
		this.passwordField().type(password);
	}
	submitLogin(status) {
		if (status === false) {
			this.loginButton().should('have.attr', 'disabled');
		} else {
			this.loginButton().should('not.have.attr', 'disabled');
			this.loginButton().click();
		}
	}
	verifyLogin(email) {
		cy.log(`Open Account dropdown menu and check email: ${email}`);

		homePage.accountButton().click();
		this.accountDropMenu().contains(email);
	}
	checkErrorOnInvalidLogin() {
		this.loginValidationMsg().contains('Invalid email or password.');
	}
	checkErrorUnderField(fieldName) {
		switch (fieldName) {
			case 'email':
				this.emailFieldErrorMsg().contains('Please provide an email address.');
				break;
			case 'password':
				this.passwordFieldErrorMsg().contains('Please provide a password.');
				break;
			default:
				this.emailFieldErrorMsg().contains('Please provide an email address.');
				this.passwordFieldErrorMsg().contains('Please provide a password.');
		}
	}
	logout() {
		homePage.headerHomeButton().click();
		homePage.accountButton().click();
		this.accountLogoutButton().click();
	}
}
export default new LoginPage();
