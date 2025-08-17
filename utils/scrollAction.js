module.exports = () => {
    browser.addCommand("scrollDown", async function () {
      const scrollable = await $("android=new UiSelector().scrollable(true)");
      await driver.execute("mobile: scrollGesture", {
        elementId: scrollable.elementId,
        direction: "down",
        percent: 1.0,
      });
    });

}