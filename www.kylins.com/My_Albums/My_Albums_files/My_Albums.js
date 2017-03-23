// Created by iWeb 3.0.4 local-build-20121120

function createMediaStream_id2()
{return IWCreateMediaCollection("http://www.kylins.com/www.kylins.com/My_Albums/My_Albums_files/rss.xml",true,255,["暂时没有照片","%d 张照片","%d 张照片"],["","%d 个剪辑","%d 个剪辑"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.kylins.com/www.kylins.com/My_Albums',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget24'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.kylins.com/www.kylins.com/My_Albums',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(4,new IWSize(144,108),new IWSize(144,34),new IWSize(172,157),27,27,0,new IWSize(18,17)),new IWPhotoFrame([IWCreateImage('My_Albums_files/ul.png'),IWCreateImage('My_Albums_files/top.png'),IWCreateImage('My_Albums_files/ur.png'),IWCreateImage('My_Albums_files/right.png'),IWCreateImage('My_Albums_files/lr.png'),IWCreateImage('My_Albums_files/bottom.png'),IWCreateImage('My_Albums_files/ll.png'),IWCreateImage('My_Albums_files/left.png')],null,0,0.300000,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget24',null,'widget25',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('My_Albums_files/My_AlbumsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');fixupIECSS3Opacity('id4');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
