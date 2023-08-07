const fs = require('fs')
const path = require('path')
const glob = require('glob')
const xlsx = require('xlsx')
const { exec } = require('child_process')

const _dist = process.env.distdir
const _langarg = process.env.langarg
const _source = process.env.dirs

function getLanglist() {
	console.log(process.env._source, 'llllllll')
	let _obj = {}
	_langarg.split(',').forEach(item => {
		_obj[item.trim()] = {}
	})
	return _obj
}
let _data = getLanglist()
console.log(_data, '------_data')
// let _dir = process.env.dirs == './docs/hom' ? './src/doc/hom/' : './src/doc/lang/'
function setJsonData(filename, filedata) {
	// let _content = JSON.parse(filedata)
	// console.log(_content, typeof _content)
	let _filename = path.basename(filename, '.ts')
	console.log(_filename, filename)
	// let _content = `export const ${_filename} = ${filedata}`
	let _content = `export const XLSX_LANGUAGE_I18N = ${filedata}`
	fs.writeFile(filename, _content, err => {
		if (err) throw err
		console.log(`${filename}文件已被保存`)
		// exec(`prettier ${filename}`, (error, stdout, stderr) => {
		// 	if (error) {
		// 		console.error(`exec error: ${error}`);
		// 		return;
		// 	}
		// 	console.log(`stdout: ${stdout}`);
		// 	console.log(`stderr: ${stderr}`);
		// })
	})
}
function setKeyData(_pwd, _data) {
	_data && setJsonData(_dist + _pwd, JSON.stringify(_data))
}
const _json = {
	cn: {
		lang: '中文',
		method: function (data) {
			return setKeyData('_cn.ts', data)
		},
	},
	en: {
		lang: '英文',
		method: function (data) {
			return setKeyData('_en.ts', data)
		},
	},
}

function getExcelItem(_data, item, lang) {
	if (_data[lang]) {
		_data[lang][item['英文']] = item[_json[lang].lang]
	}
}
function getExcelData() {
	return new Promise((resolve, reject) => {
		fs.readdir(_source, (err, files) => {
			let _data = getLanglist()
			console.log(_data)
			files.forEach(item => {
				if (path.extname(path.join(_source + '/', item)) == '.xlsx') {
					let workbook = xlsx.readFile(path.join(_source + '/', item))
					let sheetNames = workbook.SheetNames
					let worksheet = workbook.Sheets[sheetNames[0]]
					let _list = xlsx.utils.sheet_to_json(worksheet)
					// console.log(sheetNames)
					_list.forEach((item, index) => {
						for (let key in _data) {
							getExcelItem(_data, item, key)
					// 		// switch (key) {
					// 		// 	case "cn":
					// 		// 		if (_data["cn"]) {
					// 		// 			_data["cn"][item["英文"]] = item["中文"];
					// 		// 		}
					// 		// 		break;
					// 		// 	case "en":
					// 		// 		if (_data["en"]) {
					// 		// 			_data["en"][item["英文"]] = item["英文"];
					// 		// 		}
					// 		// 		break;
					// 		// 	case "indo":
					// 		// 		if (_data["indo"]) {
					// 		// 			_data["indo"][item["英文"]] = item["印尼语"];
					// 		// 		}
					// 		// 		break;
					// 		// 	case "es":
					// 		// 		if (_data["es"]) {
					// 		// 			_data["es"][item["英文"]] = item["西班牙语"];
					// 		// 		}
					// 		// 		break;
					// 		// 	case "vi":
					// 		// 		if (_data["vi"]) {
					// 		// 			_data["vi"][item["英文"]] = item["越南语"];
					// 		// 		}
					// 		// 		break;
					// 		// }
						}
					// 	// if(index <2) {
					// 	// let _obj = {};
					// 	//     for(let key in item) {
					// 	//         switch(key) {
					// 	//             case "中文":
					// 	//                 if(!_cn[item[key]]){
					// 	//                     _cn[item[key]] = item[key];
					// 	//                 }
					// 	//                 break;
					// 	//             case "英文":
					// 	//                 if(!_en[item[key]]){
					// 	//                     _en[item[key]] = item[key];
					// 	//                 }
					// 	//                 break;
					// 	//             case "印尼语":
					// 	//                 if(!_indo[item[key]]){
					// 	//                     _indo[item[key]] = item[key];
					// 	//                 }
					// 	//                 break;
					// 	//             case "西班牙语":
					// 	//                 if(!_es[item[key]]){
					// 	//                     _es[item[key]] = item[key];
					// 	//                 }
					// 	//                 break;
					// 	//         }
					// 	//     }
						// }
					})
				}
			})
			resolve(_data)
		})
	})
}
// getLanglist();
getExcelData().then((data) => {
	for (let key in _data) {
		_json[key].method(data[key])
	}
})
// getExcelData().then(data => {
// 	for (let key in _data) {
// 		_json[key].method(data[key])
// 		// switch (key) {
// 		//   case "cn":
// 		//     if (_data["cn"]) {
// 		//       setJsonData(_dir + "_cn.json", JSON.stringify(data["cn"]));
// 		//     }
// 		//     break;
// 		//   case "en":
// 		//     if (_data["en"]) {
// 		//       setJsonData(_dir + "_en.json", JSON.stringify(data["en"]));
// 		//     }
// 		//     break;
// 		//   case "indo":
// 		//     if (_data["indo"]) {
// 		//       setJsonData(_dir + "_indo.json", JSON.stringify(data["indo"]));
// 		//     }
// 		//     break;
// 		//   case "es":
// 		//     if (_data["es"]) {
// 		//       setJsonData(_dir + "_es.json", JSON.stringify(data["es"]));
// 		//     }
// 		//     break;
// 		//   case "vi":
// 		//     if (_data["vi"]) {
// 		//       setJsonData(_dir + "_vi.json", JSON.stringify(data["vi"]));
// 		//     }
// 		//     break;
// 		// }
// 	}
// })
