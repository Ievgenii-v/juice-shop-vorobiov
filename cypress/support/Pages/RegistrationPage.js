class RegistrationPage {
	visit() {
		cy.visit('/#/register');
	}
	emailField() {
		return cy.get('#emailControl');
	}
	passwordField() {
		return cy.get('#passwordControl');
	}
	passwordField2() {
		return cy.get('#repeatPasswordControl');
	}
	securityQuestionField() {
		return cy.get('[name="securityQuestion"]');
	}
	securityAnswerField() {
		return cy.get('#securityAnswerControl');
	}
	registerButton() {
		return cy.get('#registerButton');
	}
	successRegistrationPopup() {
		return cy.get('[class="mat-simple-snack-bar-content"]');
	}
	emailFieldValidation() {
		return cy.get('#mat-error-0');
	}
	passwordFieldValidation() {
		return cy.get('#mat-error-1');
	}
	passwordField2Validation() {
		return cy.get('#mat-error-2');
	}
	securityQuestionFieldValidation() {
		return cy.get('#mat-error-3');
	}
	securityAnswerFieldValidation() {
		return cy.get('#mat-error-4');
	}
}
export default new RegistrationPage();
