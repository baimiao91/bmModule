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
import {
	createAction
} from 'redux-actions'
import {
	getIndexData,
	getSearchData,
	getRecommendTabData,
	getRecommendTabData_A,
	forShortVideoTabData,
	forShortVideoTabListData,
	forChannelData,
	forQmusicSpecialData,
	forMQSimulationRecommend,
	forMQSimulationRanklist,
	forMQSimulationRanklistTodet
} from '../../api/getDataInfo'

export const getTencentVideo = createAction( //首页数据
	FOR_TENCENT_VIDEO,
	(url) => {
		// console.log('第一次添加的', url);
		return getIndexData(url);
	}
)

export const addTencentVideo = createAction( //添加上拉加载首页数据
	FOR_TENCENT_VIDEO_ADD,
	(url) => {
		// console.log('url添加的', url);
		return getIndexData(url);
	}
)

export const getTimeSearchData = createAction( //获取实时搜索数据
	FOR_TENCENT_REALTIME_SEARCH,
	(url, keyWord) => {
		return getSearchData(url, keyWord);
	}
)

export const getRecommendTabsData = createAction( //搜索推荐的tab数据
	FOR_TENCENT_RECOMMEND_TAB,
	(url) => {
		return getRecommendTabData(url);
	}
)
export const getAgainTabsData = createAction( //点击是切换推荐的tab数据
	FOR_TENCENT_RECOMMEND_TAB_AGAIN,
	(url) => {
		return getRecommendTabData_A(url);
	}
)

export const getShortVideoTabData = createAction( //短视频顶部的tabBtn数据
	FOR_SHORT_VIDEO_TAB_DATA,
	(url) => {
		// console.log(url, '短视频添加的url');
		return forShortVideoTabData(url);
	}
)

export const getShortVideoTabRestData = createAction( //短视频tab返回对应的list数据
	FOR_SHORT_VIDEO_TAB_REST_DATA,
	(url) => {
		// console.log(url, '短视频list的url');
		return forShortVideoTabListData(url);
	}
)

export const getChannelData = createAction( //频道数据
	FOR_CHANNEL_INDEX_DATA,
	(url) => {
		// console.log(url, '频道的url');
		return forChannelData(url);
	}
)

export const getQmusicSpecialImitetaData = createAction( //qq专辑
	FOR_IMITATE_QQMUSIC_SPECIAL_DATA,
	(url, key, sin) => {
		return forQmusicSpecialData(url, key, sin);
	}
)

export const getQmusicMsimulationRecommend = createAction( // 获取模拟m站QQ音乐推荐数据
	FOR_SIMULATION_MQQMUSIC_RECOMMEND,
	(url) => {
		return forMQSimulationRecommend(url);
	}
)

export const getQmusicMsimulationRanklist = createAction( // 获取模拟m站QQ音乐排行榜数据
	FOR_SIMULATION_MQQMUSIC_RANKLIST,
	(url) => {
		return forMQSimulationRanklist(url);
	}
)

export const getQmusicMsimulationRanklistTodet = createAction( // 获取模拟m站QQ音乐排行榜的排行详情页推荐歌曲页
	FOR_SIMULATION_MQQMUSIC_RANKLIST_TO_DET,
	(url) => {
		return forMQSimulationRanklistTodet(url);
	}
)