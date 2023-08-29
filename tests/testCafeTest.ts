import { Selector } from "testcafe";

fixture`Sample fixture`
	.page("../hostApp.html")
	.beforeEach(async t => {
		await t.switchToIframe("iframe");
	});

test("sample test", async t => {
	const div = Selector("div");
	await t.expect(div.textContent).contains("This was created by the iframe");
});
