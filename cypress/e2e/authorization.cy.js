import loginPage from '../support/Pages/LoginPage';
import homePage from '../support/Pages/HomePage';
import user from '../fixtures/user.json';
import { backgroundLogin } from '../support/helper';

describe('Authorization tests', () => {
	beforeEach(() => {
		homePage.visitWithoutWelcomeBanner();
		loginPage.visit();
	});

	it('Authorization - happy pass', () => {
		loginPage.fillLoginForm(user.email, user.password);
		loginPage.submitLogin();
		loginPage.verifyLogin(user.email);
		cy.get('#navbarLogoutButton').click();
	});
	it('Authorization - API happy pass', () => {
		backgroundLogin(user);
		homePage.headerHomeButton().click();
		homePage.accountButton().click();
		cy.get('#navbarLogoutButton').click();
	});
	it('Authorization - invalid email (validation)', () => {
		loginPage.fillLoginForm('invalidEmail', user.password);
		loginPage.submitLogin();
		loginPage.checkErrorOnInvalidLogin();
	});
	it('Authorization - invalid password (validation)', () => {
		loginPage.fillLoginForm(user.email, 'invalidPassword');
		loginPage.submitLogin();
		loginPage.checkErrorOnInvalidLogin();
	});
	it('Authorization - empty fields (validation)', () => {
		loginPage.emailField().click();
		loginPage.passwordField().click();
		loginPage.loginForm().click();
		loginPage.submitLogin(false);
		loginPage.checkErrorUnderField();
	});
	it('Authorization - empty email field (validation)', () => {
		loginPage.emailField().click();
		loginPage.passwordField().type(user.password);
		loginPage.submitLogin(false);
		loginPage.checkErrorUnderField('email');
	});
	it('Authorization - empty password field (validation)', () => {
		loginPage.passwordField().click();
		loginPage.emailField().type(user.email);
		loginPage.submitLogin(false);
		loginPage.checkErrorUnderField('password');
	});
});
