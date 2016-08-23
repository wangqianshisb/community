window.onload=function()
{
  var oUl=document.getElementById("link");
  var oLi=oUl.getElementsByTagName("li");
  var oImg=document.getElementById("pic");
  oLi[0].onclick=function()
  {
    oImg.src="images/home/news.jpg"
  }
  oLi[1].onclick=function()
  {
    oImg.src="images/home/pet.jpg"
  }
  oLi[2].onclick=function()
  {
    oImg.src="images/home/travel.jpg"
  }
  oLi[3].onclick=function()
  {
    oImg.src="images/home/sports.jpg"
  }
  oLi[4].onclick=function()
  {
    oImg.src="images/home/fashion.jpg"
  }
  oLi[5].onclick=function()
  {
    oImg.src="images/home/food.jpg"
  }
  oLi[6].onclick=function()
  {
    oImg.src="images/home/friends.jpg"
  }
}
