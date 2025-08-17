module.exports = function () {
  // Your original working commands - unchanged
  browser.addCommand("userlogIn", async function () {
    await $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView').click()
    await $("//*[@class = 'android.widget.TextView' and (@text = 'Log In' or . = 'Log In')]").click()
    await $('~Username input field').setValue('bob@example.com');
    await $('~Password input field').setValue('10203040');
    await $('~Login button').click();
    await $("//*[@class = 'android.widget.Button' and (@text = 'Cancel' or . = 'Cancel') and @resource-id = 'android:id/autofill_save_no']").click()
  });

  browser.addCommand("userlogOut", async function () {
    await $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView').click()
    await $("//*[@class = 'android.widget.TextView' and (@text = 'Log Out' or . = 'Log Out')]").click()
    await $("//*[@class = 'android.widget.Button' and (@text = 'LOG OUT' or . = 'LOG OUT') and @resource-id = 'android:id/button1']").click()
    await $('//android.widget.Button[@resource-id="android:id/button1"]').click()
  });

  // NEW: BrowserStack-only cleanup command
  browser.addCommand("bsCleanup", async function () {
    if (process.env.BROWSERSTACK === 'true') {
      try {
        // Try normal logout first
        await this.userlogOut();
      } catch (e) {
        console.log('Normal logout failed, trying app reset');
        await driver.reset();
      }
      await browser.pause(3000); // Wait for cleanup
    }
  });
};