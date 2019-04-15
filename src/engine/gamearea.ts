// const gameArea = () => {
// 	return {
// 		eventInfo: {},
// 		pageInfo: {},
// 		canvas: document.createElement("canvas"),
// 		getDOMCanvasById: (canvasId: string) => {
// 			this.canvas = document.getElementById(canvasId);
// 			this.context = this.canvas.getContext("2d");
// 			this.pageInfo.width = this.canvas.width;
// 			this.pageInfo.height = this.canvas.height;
// 		},
// 		createCanvas: (width: number, height: number) => {
// 			this.canvas = document.createElement("canvas")
// 			this.canvas.width = width;
// 			this.canvas.height = height;
// 			this.pageInfo.width = width;
// 			this.pageInfo.height = height;
// 			this.context = this.canvas.getContext("2d");
// 			document.body.insertBefore(this.canvas, document.body.childNodes[0]);
// 		},
// 		start: (canvasId?: string) => {
// 			if (!!canvasId) {
// 				this.getDOMCanvasById(canvasId);
// 			} else {
// 				this.createCanvas(480, 270);
// 			}
// 			this.interval = setInterval(this.update(), 20);
// 			window.addEventListener("mousedown", (e) => {
// 				this.eventInfo.x = e.pageX;
// 				this.eventInfo.y = e.pageY;
// 			}.bind(this));
// 			window.addEventListener("mouseup", (e) => {
// 				this.eventInfo.x = false;
// 				this.eventInfo.y = false;
// 			}.bind(this));
// 			window.addEventListener("touchstart", (e) => {
// 				this.eventInfo.x = e.pageX;
// 				this.eventInfo.y = e.pageY;
// 			}.bind(this));
// 			window.addEventListener("touchend", (e) => {
// 				this.eventInfo.x = false;
// 				this.eventInfo.y = false;
// 			}.bind(this));
// 		},
// 		update: (game) => {
// 			this.clear();
// 			game.update(this.context, this.pageInfo, this.eventInfo);
// 		},
// 		clear: () => this.context.clearRect(0, 0, this.canvas.width, this.canvas.height),
// 		stop: () => clearInterval(this.interval),
// 		getContext: () => this.context,
// 		getCanvas: () => this.canvas,
// 		type: () => {
// 			return "gamearea";
// 		}
// 	}
// }