let { newAdd, str }  = require("./api.js");
let { http } = require("./http.js");

export let add = (data) => {
  return http({
    url: `${newAdd}${str.add}`,
    method: 'post',
    hearder: { 'content-type': 'application/x-www-form-urlencoded' },
    data
  })
}

export let search = (data) => {
  return http({
    url: `${newAdd}${str.search}`,
    method: 'get',
    hearder: { 'content-type': 'application/x-www-form-urlencoded' },
    data
  })
}
// 修改查询
export let editSelect = (data, id) => {
  return http({
    url: `${newAdd}${str.editSelect}/${id}`,
    method: 'get',
    hearder: { 'content-type': 'application/x-www-form-urlencoded' },
    data
  })
}

export let editNow = (data) => {
  return http({
    url: `${newAdd}${str.editNow}`,
    method: 'post',
    hearder: { 'content-type': 'application/x-www-form-urlencoded' },
    data
  })
}
// 删除
export let deleteData = (data, id) => {
  return http({
    url: `${newAdd}${str.deleteData}/${id}`,
    method: 'get',
    hearder: { 'content-type': 'application/x-www-form-urlencoded' },
    data
  })
}