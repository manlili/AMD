define(function(){
	var util = {
		getFormatDate: function (date, type) {
			if (type === 1) {
				var date = new Date(date)
				return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
			}else if (type === 2) {
				var date = new Date(date)
				return date.getFullYear() + '年' + (date.getMonth()+1) + '月' + date.getDate() + '日'
			}
		}
	}
	return util;
})
