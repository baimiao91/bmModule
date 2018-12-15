/*
 * @Author: i白描
 * @Date:   2018-11-29 10:25:52
 * @Last Modified by:   i白描
 * @Last Modified time: 2018-12-13 19:16:56
 */


import wepy from 'wepy';

const changeData = function(data) {
	return data.slice(5);
}

export const getIndexData = (url) => { //获取首页数据
	// console.log(url, 'url;');
	return new Promise((resolve, reject) => {
		wepy.request({
			url,
			success: res => {
				// console.log(res, 'res');
				if (res.statusCode === 200) {
					let data = changeData(res.data);
					// console.log('第一次的生成', JSON.parse(data));
					resolve(JSON.parse(data));
				}
			}
		})
	})
}

export const getSearchData = (url, keyWord) => { //实时搜索数据
	return new Promise((resolve, reject) => {
		wepy.request({
			url,
			method: "POST",
			header: {
				"content": "application/json"
			},
			dataType: "json",
			responseType: "text",
			data: {
				"channelId": "",
				"keyWord": keyWord,
				"searchDatakey": ""
			},
			success: res => {
				let data = changeData(res.data);
				console.log(JSON.parse(data), 'get实时搜索Info---res');
				if (res.statusCode === 200) {
					resolve(JSON.parse(data));
				}
			}
		})
	})
}

export const getRecommendTabData = (url) => { //获取推荐tab数据
	return new Promise((resolve, reject) => {
		wepy.request({
			url,
			success: res => {
				// console.log(res, 'res--推荐tab');
				if (res.statusCode === 200) {
					resolve(res.data.data);
				}
			}
		})
	})
}

export const getRecommendTabData_A = (url) => { //点击时切换推荐tab数据
	return new Promise((resolve, reject) => {
		wepy.request({
			url,
			success: res => {
				if (res.statusCode === 200) {
					resolve(res.data.data.itemList);
				}
			}
		})
	})
}

export const forShortVideoTabData = (url) => { //短视频的tab数据
	return new Promise((resolve, reject) => {
		wepy.request({
			url,
			success: res => {
				if (res.statusCode === 200) {
					let data = changeData(res.data);
					resolve(JSON.parse(data));
					// console.log('第一次的生成短视频tab数据', JSON.parse(data));
				}
			}
		})
	})
}

export const forShortVideoTabListData = (url) => { //短视频的tab对应返回的list数据
	return new Promise((resolve, reject) => {
		wepy.request({
			url,
			success: res => {
				if (res.statusCode === 200) {
					let data = changeData(res.data);
					// console.log('第一次的生成短视频list数据', JSON.parse(data));
					resolve(JSON.parse(data))
				}
			}
		})
	})
}

export const forChannelData = (url) => { //频道数据---未完善
	return new Promise((resolve, reject) => {
		wepy.request({
			url,
			success: res => {
				let data = changeData(res.data);
				// console.log('频道的数据--', JSON.parse(data));
				resolve(JSON.parse(data))
			}
		})
	})
}

export const forMQSimulationRecommend = (url) => { //m站QQ音乐推荐
	return new Promise((resolve, reject) => {
		wepy.request({
			url,
			success: res => {
				resolve(res.data.data);
			}
		})
	})
}

export const forMQSimulationRanklist = (url) => { //m站QQ音乐排行榜
	return new Promise((resolve, reject) => {
		wepy.request({
			url,
			success: res => {
				resolve(res.data.data);
			}
		})
	})
}

export const forMQSimulationRanklistTodet = (url) => { //m站QQ音乐排行榜点击进入详情
	return new Promise((resolve, reject) => {
		wepy.request({
			url,
			success: res => {
				resolve(res.data);
			}
		})
	})
}

export const forQmusicSpecialData = (url, key, sin) => { //QQ音乐专辑模块
	return new Promise((resolve, reject) => {
		wepy.request({
			url,
			method: "POST",
			header: {
				"content": "application/json"
			},
			dataType: "json",
			responseType: "text",
			data: {
				"comm": {
					"g_tk": 1843818185,
					"uin": 1914969309,
					"format": "json",
					"inCharset": "utf-8",
					"outCharset": "utf-8",
					"notice": 0,
					"platform": "h5",
					"needNewCode": 1,
					"ct": 23,
					"cv": 0
				},
				"getAlbumInfo": {
					"module": "music.web_album_library",
					"method": "get_album_by_tags",
					"param": {
						"area": key,
						"company": -1,
						"genre": -1,
						"type": -1,
						"year": -1,
						"sort": 2,
						"get_tags": 1,
						"sin": sin,
						"num": 15,
						"click_albumid": 0
					}
				}
			},
			success: res => {
				// console.log('qq专辑的数据--', res.data);
				resolve(res.data.getAlbumInfo.data)
			}
		})
	})
}