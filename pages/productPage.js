
export class ProductPage {

    appSelectors = {
        gearIcon: '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView',
        products:'~store item',
        plusButton:'//android.view.ViewGroup[@content-desc="counter plus button"]/android.widget.ImageView',
        addToCartButton:'android=new UiSelector().text("Add To Cart")',
        shoppingCart:'//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView',
        checkOutButton:'//android.widget.TextView[@text="Proceed To Checkout"]',
        firstNameField:'~Full Name* input field',
        addressField:'~Address Line 1* input field',
        cityField:'~City* input field',
        zipCodeField:'~Zip Code* input field',
        countryField:'~Country* input field',
        paymentButton:'~To Payment button',
        CardNumberField:'~Card Number* input field',
        dateField:'~Expiration Date* input field',
        codeField:'~Security Code* input field',
        reviewOrderButton:'~Review Order button',
        placeOrderButton:'~Place Order button',
        orderCompleteMessage:'//android.widget.TextView[@text="Checkout Complete"]',
        plusIcon:'//android.view.ViewGroup[@content-desc="counter plus button"]/android.widget.ImageView',
        minusIcon:'//android.view.ViewGroup[@content-desc="counter minus button"]/android.widget.ImageView'

    }

            async gearIcon() {await $(this.appSelectors.gearIcon)}
            async products() {await $(this.appSelectors.products)}
            async plusButton() {await $(this.appSelectors.plusButton)}
            async addToCartButton() {await $(this.appSelectors.addToCartButton)}
            async shoppingCart() {await $(this.appSelectors.shoppingCart)}
            async checkOutButton() {await $(this.appSelectors.checkOutButton)}
            async firstNameField() {await $(this.appSelectors.firstNameField)}
            async addressField() {await $(this.appSelectors.addressField)}
            async cityField() {await $(this.appSelectors.cityField)}
            async zipCodeField() {await $(this.appSelectors.zipCodeField)}
            async countryField() {await $(this.appSelectors.countryField)}
            async paymentButton() {await $(this.appSelectors.paymentButton)}
            async CardNumberField()  {await $(this.appSelectors.CardNumberField)}
            async dateField()  {await $(this.appSelectors.dateField)}
            async codeField()  {await $(this.appSelectors.codeField)}
            async reviewOrderButton()  {await $(this.appSelectors.reviewOrderButton)}
            async placeOrderButton() {await $(this.appSelectors.placeOrderButton)}
            async orderCompleteMessage() {await $(this.appSelectors.orderCompleteMessage)}
            async plusIcon() {await $(this.appSelectors.plusIcon)}
            async minusIcon() {await $(this.appSelectors.minusIcon)}

}