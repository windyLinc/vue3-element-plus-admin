export function makeCanvas() {
	var width = screen.width,
		height = screen.height
	var vbuf
	var pstart
	var nump: any
	var canvasElement: any = document.getElementById('display')
	var gl: any
	var tuni: any, startTime: any
	function render() {
		gl.clear(gl.COLOR_BUFFER_BIT)
		gl.uniform1f(tuni, (Date.now() - startTime) / 30000)
		gl.drawArrays(gl.POINTS, 0, nump)
		window.requestAnimationFrame(render)
	}
	canvasElement.width = width
	canvasElement.height = height
	gl = canvasElement.getContext('webgl')
	if (!gl) {
		gl = canvasElement.getContext('experimental-webgl')
		if (!gl) {
			alert('WebGL not supported!')
		}
	}
	nump = 48000
	pstart = new Float32Array(nump * 2)
	var b = pstart.length
	while (b--) {
		pstart[b] = 0
		while (pstart[b] * pstart[b] < 0.3) {
			pstart[b] = Math.random() * 2 - 1
		}
	}
	vbuf = gl.createBuffer()
	gl.bindBuffer(gl.ARRAY_BUFFER, vbuf)
	gl.bufferData(gl.ARRAY_BUFFER, pstart, gl.STATIC_DRAW)
	var e = gl.createShader(gl.VERTEX_SHADER)
	gl.shaderSource(
		e,
		'\nprecision mediump float;attribute vec2 Vertex; varying vec2 V; uniform float T;void main(void) {gl_PointSize = 2.; V = Vertex;vec2 v = Vertex*(mod(T+length(Vertex),1.));float ct = (cos(v.x*30.+T*20.)+cos(v.y*30.+T*20.));v = mat2(sin(v.x*(10.+ct)),cos(v.x*(10.+ct)),cos(v.y*(10.+ct)),sin(v.y*(10.+ct)))*v;gl_Position=vec4(v,0.,1.);}',
	)
	gl.compileShader(e)
	var a = gl.createShader(gl.FRAGMENT_SHADER)
	gl.shaderSource(
		a,
		'\nprecision mediump float; varying vec2 V; uniform float T;void main(void) {gl_FragColor = vec4(.7,.7,1.,.1);}',
	)
	gl.compileShader(a)
	var c = gl.createProgram()
	gl.attachShader(c, e)
	gl.attachShader(c, a)
	gl.linkProgram(c)
	gl.useProgram(c)
	var d = gl.getAttribLocation(c, 'Vertex')
	gl.enableVertexAttribArray(d)
	gl.vertexAttribPointer(vbuf, 2, gl.FLOAT, false, 4, 0)
	tuni = gl.getUniformLocation(c, 'T')
	gl.enable(gl.BLEND)
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
	gl.disable(gl.DEPTH_TEST)
	gl.clearColor(0, 0, 0, 1)
	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = setTimeout
	}
	startTime = Date.now()
	render()
}
