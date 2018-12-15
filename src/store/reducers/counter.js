import {
	handleActions
} from 'redux-actions'
import {
	FOR_TENCENT_VIDEO,
	FOR_TENCENT_REALTIME_SEARCH,
	FOR_TENCENT_RECOMMEND_TAB,
	FOR_TENCENT_RECOMMEND_TAB_AGAIN,
	FOR_TENCENT_VIDEO_ADD,
	FOR_SHORT_VIDEO_TAB_DATA,
	FOR_SHORT_VIDEO_TAB_REST_DATA,
	FOR_CHANNEL_INDEX_DATA,
	FOR_IMITATE_QQMUSIC_SPECIAL_DATA,
	FOR_SIMULATION_MQQMUSIC_RECOMMEND,
	FOR_SIMULATION_MQQMUSIC_RANKLIST,
	FOR_SIMULATION_MQQMUSIC_RANKLIST_TO_DET
} from '../types/counter'

export default handleActions({
	[FOR_TENCENT_VIDEO](state, action) {
		// console.log('首页的action', action.payload.data);
		return {
			...state,
			ace_data: action.payload.data.modList,
			banner_data: action.payload.data.modList[0],
			banner_data_length: action.payload.data.modList[0].list.length
		}
	},
	[FOR_TENCENT_VIDEO_ADD](state, action) {
		// console.log('添加的首页数据', action.payload.data);
		return {
			...state
		}
	},
	[FOR_TENCENT_REALTIME_SEARCH](state, action) {
		// console.log('实时搜索action', action);
		return {
			...state,
			search_data: action.payload.data.smartItemList
		}
	},
	[FOR_TENCENT_RECOMMEND_TAB](state, action) {
		// console.log('搜索框组件中的热门搜索的tab，及列表', action.payload.itemList);
		return {
			...state,
			rank_nav_list: action.payload.rankNavList,
			deft_list: action.payload.itemList
		}
	},
	[FOR_TENCENT_RECOMMEND_TAB_AGAIN](state, action) {
		// console.log('该切换的action---', action.payload);
		return {
			...state,
			deft_list: action.payload
		}
	},
	[FOR_SHORT_VIDEO_TAB_DATA](state, action) {
		// console.log('短视频的tab', action.payload);
		return {
			...state,
			short_video_tab: action.payload.data.scheduleList
		}
	},
	[FOR_SHORT_VIDEO_TAB_REST_DATA](state, action) {
		// console.log('短视频的tab返回的list', action.payload.data.data);
		return {
			...state,
			short_video_tab_list: action.payload.data.data
		}
	},
	[FOR_CHANNEL_INDEX_DATA](state, action) {
		// console.log('频道的数据----', action.payload);
		// console.log(data, '循环过后');
		return {
			...state
		}
	},
	[FOR_IMITATE_QQMUSIC_SPECIAL_DATA](state, action) {
		// console.log('qq专辑的数据----', action.payload);
		return {
			...state,
			qMusicDefaultSongsList: action.payload.list,
			qMusicSpecialTopBtnObj: {
				...action.payload.tags
			}
		}
	},
	[FOR_SIMULATION_MQQMUSIC_RECOMMEND](state, action) {
		// console.log('m站QQ音乐-推荐', action);
		return {
			...state,
			mQmusicRecommendBanner: action.payload.slider,
			mQmusicRecommendRadioList: action.payload.radioList
		}
	},
	[FOR_SIMULATION_MQQMUSIC_RANKLIST](state, action) {
		console.log('m站QQ音乐-排行榜', action);
		return {
			...state,
			mQmusicRanklistData: action.payload.topList
		}
	},
	[FOR_SIMULATION_MQQMUSIC_RANKLIST_TO_DET](state, action) {
		console.log('m站QQ音乐-排行榜-歌单详情', action);
		let len = action.payload.songlist.length;
		return {
			...state,
			mQmusicRanklistDetSongsNum: len,
			mQmusicRanklistDetSongsList: action.payload.songlist,
			mQmusicRankDetTopInfo_0: action.payload.songlist[0]
		}
	}
}, {
	ace_data: [],
	banner_data: {},
	banner_data_length: null,
	search_data: [],
	rank_nav_list: [],
	deft_list: [],
	short_video_tab: [],
	short_video_tab_list: [],
	qMusicDefaultSongsList: [],
	qMusicSpecialTopBtnObj: {},
	mQmusicRecommendRadioList: [],
	mQmusicRecommendBanner: [],
	mQmusicRanklistData: [],
	mQmusicRanklistDetSongsNum: null,
	mQmusicRanklistDetSongsList: [],
	mQmusicRankDetTopInfo_0: {}
})