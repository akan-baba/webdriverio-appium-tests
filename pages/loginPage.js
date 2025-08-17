export class LoginPage {

    appSelectors = {
        menuGear:'//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView',
        loginLink:"//*[@class = 'android.widget.TextView' and (@text = 'Log In' or . = 'Log In')]",
        userName:'~Username input field',
        passWord:'~Password input field',
        loginButton:'~Login button',
        cancelPopUp:"//*[@class = 'android.widget.Button' and (@text = 'Cancel' or . = 'Cancel') and @resource-id = 'android:id/autofill_save_no']",
        logOutLink:"//*[@class = 'android.widget.TextView' and (@text = 'Log Out' or . = 'Log Out')]",
        errorMessage:'//android.widget.TextView[@text="Provided credentials do not match any user in this service."]'
    }


        async menuGear() {await $(this.appSelectors.menuGear)}
        async loginLink() {await $(this.appSelectors.loginLink)}
        async userName() {await $(this.appSelectors.userName)}
        async passWord() {await $(this.appSelectors.passWord)}
        async loginButton() {await $(this.appSelectors.loginButton)}
        async cancelPopUp() {await $(this.appSelectors.cancelPopUp)}
        async logOutLink() {await $(this.appSelectors.logOutLink)}
        async errorMessage() {await $(this.appSelectors.errorMessage)}

}