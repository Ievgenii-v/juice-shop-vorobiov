import homePage from '../support/Pages/HomePage';
import basketPage from '../support/Pages/BasketPage';
import user from '../fixtures/user.json';
import { backgroundLogin, addProductByName } from '../support/helper';

it('Find and add Item to shopping cart - happy pass', () => {
	homePage.visitWithoutWelcomeBanner();
	backgroundLogin(user);
	cy.visit('/#/search');

	addProductByName(' Apple Juice (1000ml) ');
	addProductByName(' Quince Juice (1000ml) ');
	basketPage.visit();
	basketPage.checkoutBtn().click();
});
