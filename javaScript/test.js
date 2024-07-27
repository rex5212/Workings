const { log } = require("console")

// x = 0
// x = 20
// x = 40

const xx = {'teste1':10, 'teste2':12, 'teste3':13}
let texto = ""

for (let x in xx){
    log(x)
}

// 0,0,1
// 0,0,20