import { step, TestSettings, By } from '@flood/element'

export const settings: TestSettings = {
	loopCount: -1,
	screenshotOnFailure: true,
	disableCache: true,
	clearCache: true,
	clearCookies: true,
	actionDelay: 1,
	stepDelay: 1,
}

export default () => {
	step('Browser Check', async browser => {
		await browser.visit('http://whatsmyuseragent.org/')
		const el = await browser.findElement(By.css('.intro-text'))
		console.log('UA', await el.text())
		await browser.takeScreenshot()
	})
}
