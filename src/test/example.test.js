const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});
describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        // Arrange
        await browser.url('https://tiki.vn');
        // Act
        const INPUT_SEARCH = await browser.$('input[type="text"]');
        const BTN_SEARCH = await browser.$('//button[contains(text(), "Tìm kiếm")]');
        await INPUT_SEARCH.setValue("bỉm em bé");
        await BTN_SEARCH.click();
        await browser.pause(3000);
        // Assert
        let pageTitle = await browser.getTitle()
        console.log(`Page title is: ${pageTitle}`);
        if (pageTitle.toLowerCase().includes('bỉm em bé')) {
            console.log("Test Passed!!!");
        } else {
            console.log("Test Failed!!!");
        }
    })
})

