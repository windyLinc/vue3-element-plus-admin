import { localItem } from '@/utils/index'
interface CanvasOptions {
	width: string
	height: string
	textAlign: string
	textBaseline: string
	fontSize: number
	color: string
	alpha: number
	rotate: number
	fillTextOriginX: number
	fillTextOriginY: number
}
const DefaultCanvasOptions = {
	textAlign: 'top',
	textBaseline: 'left',
	width: '350',
	height: '200',
	fillTextOriginX: 0,
	fillTextOriginY: 30,
	rotate: -20,
	fontSize: 18,
	alpha: 0.09, //透明度
	color: '#',
}
function drawCanvas(config: CanvasOptions = DefaultCanvasOptions): string {
	var canvas = document.createElement('canvas')
	canvas.setAttribute('width', config.width)
	canvas.setAttribute('height', config.height)
	var ctx: any = canvas.getContext('2d')
	ctx.textAlign = config.textAlign //在绘制文本时使用的当前文本基线
	ctx.textBaseline = config.textBaseline //设置或返回文本内容的当前对齐方式
	ctx.font = `${config.fontSize}px Arial` //ctx.font = '24px Arial';
	ctx.fillStyle = config.color
	ctx.globalAlpha = config.alpha //设置或返回绘图的当前 alpha 或透明值
	ctx.rotate((Math.PI / 180) * config.rotate) //将画布旋转30度
	ctx.fillText(localItem.getItem('account'), config.fillTextOriginX, config.fillTextOriginY)
	return canvas.toDataURL()
}
interface AppendCanvasOptions {
	bodyContainer: Node
	id: string
	styleId: string
}
const DefaultAppendCanvasOptions = {
	bodyContainer: document.body,
	id: 'waterMark',
	styleId: 'watermarkstyle',
}
function appendCanvas(options: AppendCanvasOptions = DefaultAppendCanvasOptions) {
	var bodyContainer = options.bodyContainer
	let base64Url = drawCanvas()

	var wm = document.getElementById(options.id)
	var watermarkDiv = wm || document.createElement('div')
	var styleStr = `
       position:fixed;
       top:0;
       left:0;
       bottom:0;
       right:0;
       z-index:${9999};
       pointer-events:none;
       background-repeat:repeat;
       background-image:url('${base64Url}')`

	watermarkDiv.setAttribute('style', styleStr)
	watermarkDiv.id = options.id

	var styleEl = document.createElement('style')
	if (!document.getElementById(options.styleId)) {
		styleEl.id = options.styleId
		styleEl.setAttribute('type', 'text/css')
		styleEl.innerText = '@media  print{ #waterMark{ display:none } }'
		document.head.appendChild(styleEl)
	}

	if (!wm) {
		options.bodyContainer.appendChild(watermarkDiv)
	}
	return {
		bodyContainer,
		styleStr,
	}
}
export function createWaterMaskCanvas() {
	let { styleStr, bodyContainer } = appendCanvas()

	const MutationObserver: any =
		window.MutationObserver ||
		(window as any).WebKitMutationObserver ||
		(window as any).MozMutationObserver //检测浏览器是否支持该特性
	if (MutationObserver) {
		var observer: any = new MutationObserver(function () {
			var wm = document.getElementById('waterMark')
			// 只在wm元素样式被修改或者元素被移除时
			if ((wm && wm.getAttribute('style') !== styleStr) || !wm) {
				// 避免一直触发
				observer.disconnect()
				observer = null
				// createCanvas()
			}
		})

		observer.observe(bodyContainer, {
			//监听body元素子元素的变化
			attributes: true,
			subtree: true,
			childList: true,
		})
		// eslint-disable-next-line no-unexpected-multiline
		// (window as any).globalWaterMaskObserver = observer
	}

	// gwm.creation({
	//     txt:'13987654321',
	//     width: 198,
	//     height: 140,
	//     x: 20,
	//     y: 70,
	//     fontSize: 13,
	//     color: '#ff0000',
	//     watch: true,
	//     css: {'z-index': 9999}
	//     })
}

export function clearWaterMaskCanvas(options: AppendCanvasOptions = DefaultAppendCanvasOptions) {
	const { id, bodyContainer } = options
	if (document.getElementById(id)) {
		console.log(document.getElementById(id))
		document.body.removeChild(document.getElementById(id) as any)
		// observer.disconnect();
	}
}
