const obj = {
    js: 'JavaScripts',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in obj) {
    //console.log(key);
    console.log(`${key} short cut for ${obj[key]}`)
}

const programing = ['c++','Java','JS','rb','py']

for(const key in programing){
    console.log(programing[key]);
}