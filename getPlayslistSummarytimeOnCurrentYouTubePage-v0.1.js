function getPlayslistSummarytimeOnCurrentYouTubePage (){
var playlistElements =document.evaluate("\/\/*\[@id=\"contents\"\]\/ytd-playlist-video-list-renderer", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue
spans = playlistElements.getElementsByTagName("span")
textTime = []
for (let el of spans) {
    if (el.id == "text") 
        textTime.push(el.textContent.trim()); 
}

getPlaylistSummaryTime(textTime)
}


function getPlaylistSummaryTime(videosTimeInStringArray){
//Playlist summary time
var [totalHH, totalMM, totalSS] = [0,0,0];
for (let item of videosTimeInStringArray){
	//Validation of hh
   let [hh, mm, ss] = [0,0,0]; 
   if (item.split(":").length == 2) {
	[mm, ss] = item.split(":");
    }
   else{
   [hh, mm, ss] = item.split(":");
	totalHH += Number(hh);
   }
   
    totalMM += Number(mm);
    totalSS += Number(ss);
}


//Normalize values for ss
totalMM += parseInt(totalSS/60);
totalSS = totalSS%60;

//Normalize value for mm 
totalHH += parseInt(totalMM/60);
totalMM = totalMM%60;

summaryTime = totalHH.toString() +':'+ totalMM.toString() +':'+ totalSS.toString()
console.log(summaryTime);
}

getPlayslistSummarytimeOnCurrentYouTubePage()