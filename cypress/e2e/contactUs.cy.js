import homePage from '../support/Pages/HomePage';
import contactPage from '../support/Pages/ContactPage';
import user from '../fixtures/user.json';
import { backgroundLogin, resolveCaptcha } from '../support/helper';

it.only('Fill and submit Contact form', () => {
	homePage.visitWithoutWelcomeBanner();
	// backgroundLogin(user);
	contactPage.visit();
	// console.log(contactPage.captchaContext());
	// cy.get('#captcha')
	// 	.invoke('text')
	// 	.then((captchaText) => {
	// 		console.log(captchaText);
	// 	});
	contactPage
		.ratingSlider()
		.invoke('attr', 'aria-valuenow', '4')
		.trigger('change');
	// .get('input[type=range]').siblings('p')
	// .should('have.text', '25').

	cy.get('code#captcha')
		.invoke('text')
		.then((captchaText) => {
			const result = eval(captchaText);
			console.log(result);
		});
	// contactPage
	// 	.captchaContext()
	// 	.type(resolveCaptcha());
});
