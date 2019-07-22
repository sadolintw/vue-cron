export default {
    Seconds:{
        name:'秒',
        every:'每一秒鐘',
        interval:['每隔','秒執行 從','秒開始'],
        specific:'具體秒數(可多選)',
        cycle:['周期從','到','秒']
    },
    Minutes:{
        name:'分',
        every:'每一分鐘',
        interval:['每隔','分執行 從','分開始'],
        specific:'具體分鐘數(可多選)',
        cycle:['周期從','到','分']
    },
    Hours:{
        name:'時',
        every:'每一小時',
        interval:['每隔','小時執行 從','小時開始'],
        specific:'具體小時數(可多選)',
        cycle:['周期從','到','小時']
    },
    Day:{
        name:'天',
        every:'每一天',
        intervalWeek:['每隔','周執行 從','開始'],
        intervalDay:['每隔','天執行 從','天開始'],
        specificWeek:'具體星期幾(可多選)',
        specificDay:'具體天數(可多選)',
        lastDay:'在這個月的最後一天',
        lastWeekday:'在這個月的最後一個工作日',
        lastWeek:['在這個月的最後一個'],
        beforeEndMonth:['在本月底前','天'],
        nearestWeekday:['最近的工作日（周一至周五）至本月','日'],
        someWeekday:['在這個月的第','個'],
    },
    Week:['天','一','二','三','四','五','六'].map(val=>'星期'+val),
    Month:{
        name:'月',
        every:'每一月',
        interval:['每隔','月執行 從','月開始'],
        specific:'具體月數(可多選)',
        cycle:['從','到','月之間的每個月']
    },
    Year:{
        name:'年',
        every:'每一年',
        interval:['每隔','年執行 從','年開始'],
        specific:'具體年份(可多選)',
        cycle:['從','到','年之間的每一年']
    },
    Save:'保存',
    Close:'關閉'
}