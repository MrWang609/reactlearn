// module.exports=(config)=>{
//     //这里配置
//     return config
// }

const {override,addDecoratorsLegacy}=require('customize-cra')

module.exports=override(
    addDecoratorsLegacy()
)