import CosCloud from 'cos-js-sdk-v5'
import Sign from '@/services/cosSign'
import config from '@/config.js'

// 初始化实例
var cos = new CosCloud({
  getAuthorization: function (options, callback) {
    // 异步获取签名
    let data = {
      method: (options.Method || 'get').toLowerCase(),
      pathname: '/' + (options.Key || '')
    }
    Sign.getAppSign(data).then(data => {
      callback(data.data)
    })
  }
});

export default {
  uploadFile(file) {
    let name = new Date().getTime()+file.name
    return new Promise((resolve, reject) => {
      cos.putObject({
        Bucket: config.Bucket, /* 必须 */
        Region: config.Region,
        Key: config.ImagePath + name, /* 必须 */
        Body: file,
        onProgress: function (progressData) {
        },
      }, function (err, data) {
        if(err){
          reject(err)
        }else{
          resolve({data,path:config.BucketDomain+config.ImagePath + name,name:file.name})
        }
      });
    });
  }
}