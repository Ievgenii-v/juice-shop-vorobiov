export function backgroundLogin(user) {
	cy.setCookie('welcomebanner_status', 'dismiss');
	cy.request({
		method: 'POST',
		url: '/rest/user/login',
		body: {
			email: user.email,
			password: user.password,
		},
	}).then((response) => {
		console.log('RESPONS ===> ' + JSON.stringify(response));
		expect(response.status).to.be.equal(200);
		cy.setCookie('token', response.body.authentication.token);
		window.localStorage.setItem('token', response.body.authentication.token);
		window.sessionStorage.setItem('bid', response.body.authentication.bid);
	});
}

export function addProductByName(productName) {
	cy.log(`Start searching and adding product: ${productName}`);
	cy.get('body').then((body) => {
		if (body.find(`div.item-name:contains("${productName}")`).length > 0) {
			cy.get(`div.item-name:contains("${productName}")`)
				.closest('mat-card')
				.find('button[aria-label="Add to Basket"]')
				.click();
		} else {
			cy.get('button[aria-label="Next page"]').click();
			addProductByName(productName);
		}
	});
}

export function resolveCaptcha(string) {
	let result = eval(string);
	return result;
}

export function findProductByName2(productName) {
	cy.get('body').then((body) => {
		let neededItem = cy.get('div.item-name').contains(productName);
		if (body.find(neededItem).length > 0) {
			neededItem.closest('button[aria-label="Add to Basket"]').click();
		} else {
			cy.get('button[aria-label="Next page"]').click();
			findProductByName2(productName);
		}
	});
}
