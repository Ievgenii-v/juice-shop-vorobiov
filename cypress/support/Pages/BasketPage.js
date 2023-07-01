class BasketPage {
	visit() {
		cy.visit('/#/basket');
	}
	checkoutBtn() {
		return cy.get('#checkoutButton');
	}
}
export default new BasketPage();
