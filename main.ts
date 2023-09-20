import { Plugin, Modal, App } from 'obsidian';

export default class JamesPulgIn extends Plugin{

	test(){
		// add - 무언가 추가 할 수 있는 것
		// addRibbonIcon 를 간단히 사용해보았기 때문에 
		// addEvents 와 같은 구조로 진행 될 것을 알 수 있음
		this.addRibbonIcon;
		this.addCommand;
		this.addSettingTab;
		this.addStatusBarItem;
		this.addChild;
	}

	async onload() {
		this.addRibbonIcon("dice", "show Modal", _ => new ExampleModal(this.app).open());
	}
}

export class ExampleModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		let { contentEl } = this;
		contentEl.setText("James Moodal");
	}

	onClose() {
		let { contentEl } = this;
		contentEl.empty();
	}
}