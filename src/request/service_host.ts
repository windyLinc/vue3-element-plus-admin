// console.log(import.meta.env, 'import.meta.env')
export const SERVICE_HOST = (url: string) =>
	import.meta.env.MODE === 'development' ? '/api' + url : import.meta.env.VITE_SERVICE_URL + url
