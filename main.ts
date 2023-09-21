import { Plugin,ItemView, WorkspaceLeaf } from 'obsidian';

export default class JamesPulgIn extends Plugin{
	async onload() {
		this.registerView(VIEW_DARTPAD, (leaf) => new DartView(leaf));
		this.addRibbonIcon("play-circle", "show DartPad", (_: MouseEvent) => {
			this.activateView();
		});
	}
	async activateView() {
		this.app.workspace.detachLeavesOfType(VIEW_DARTPAD);
	
		await this.app.workspace.getRightLeaf(false).setViewState({
		  type: VIEW_DARTPAD,
		  active: true,
		});
	
		this.app.workspace.revealLeaf(
		  this.app.workspace.getLeavesOfType(VIEW_DARTPAD)[0]
		);
	  }
}
const VIEW_DARTPAD = "VIEW_TYPE_DARTPAD";
class DartView extends ItemView{
	constructor(leaf:WorkspaceLeaf){
		super(leaf);
	}
	getViewType() {
		return VIEW_DARTPAD;
	  }
	
	  getDisplayText() {
		return VIEW_DARTPAD;
	  }
	async onOpen(){
		let container = this.containerEl.children[1];
		container.empty();
		container.createEl("iframe", {"attr":{"src":"https://dartpad.dev/embed-inline.html?id=5d70bc1889d055c7a18d35d77874af88"}});
	}

}