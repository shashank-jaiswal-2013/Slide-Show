var height;
var width;
var current_scroll=0;
var total_width=0;
var data_container_width=0;
var data_container_height=0;
function set(j)
{
	document.getElementsByTagName('output').innerHTML+="<div id = '' style='top:50%;width:100%;height:50px;position:absolute;z-index:1001;'><center>Use arrow keys</center></div>";
	height = window.innerHeight;
	width = window.innerWidth;
	$.getJSON(j, function(data) 
	{
		    // data is a JavaScript object now. Handle it as such
		$('body').append("<div id='right_footer'>"+data.footer.headline+"<br><span>'"+data.footer.text+"'<span></div>");    
		$('#output').css("height",height);
		$('#output').css("width",width*(data.timeline.date.length+1));
		total_width = width*(data.timeline.date.length+1);
		data_container_width = Math.floor(width*0.8);
		data_container_height = Math.abs(height*0.8);
		document.getElementById('output').innerHTML +="<div id='data_container' style='height:"+data_container_height+"px;width:"+data_container_width+"px;left:"+(width-data_container_width)/2+"px;top:"+(height-data_container_height)/2+"px;'><div id='main_headline'>"+data.timeline.headline+"</div><div id='main_startDate'>"+data.timeline.startDate+"</div><div id='main_type'>"+data.timeline.type+"</div><div id='main_text'>"+data.timeline.text+"</div><div id='asset'><div id='main_assetMedia'>"+data.timeline.asset.media+"</div><div id='main_assetCredit'>"+data.timeline.asset.credit+"</div><div id='main_assetCaption'>"+data.timeline.asset.caption+"</div></div></div>";

		for(var i=0;i<data.timeline.date.length;i++)
		{
			var pp = (width-data_container_width)/2 + width*(i+1);
		document.getElementById('output').innerHTML +="<div id='data_container' style='height:"+data_container_height+"px;width:"+data_container_width+"px;left:"+pp+"px;top:"+(height-data_container_height)/2+"px;'>"+"<div id='startDate'>"+data.timeline.date[i].startDate+"</div><div id='headline'>"+data.timeline.date[i].headline+"</div><div id='text'>"+data.timeline.date[i].text+"</div><br><div id='asset'><div id='assetMedia'><iframe class='youtube-player' type='text/html' src='"+data.timeline.date[i].asset.media+"' allowfullscreen frameborder='0'></iframe></div><div id='assetCredit'>"+data.timeline.date[i].asset.credit+"</div><div id='assetCaption'>"+data.timeline.date[i].asset.caption+"</div></div>"+'</div>';
		}
	/*$('body').append("<div id='left_footer'><button id='b_left'>&#8249;&#8249;&#8249;</button><button id='b_right'>&#8250;&#8250;&#8250;</button></div><div id='right_footer'>Torque Lecture Series<br><span>'Under the Bonnet'<span></div>");
	*/
});
$('#assetMedia').mouseover(function(){alert("Hello");});
$('button.left').click(function(){scroll_left();});
$('button.right').click(function(){scroll_right();});
$(document).keydown(function(e){
	 if (e.which == 37) { 
       scroll_left();
       return false;
    }
    if (e.which == 39) { 
       scroll_right();
       return false;
    }
});
$(window).resize(function()
	{
		//location.reload(false);
		//$('#data_container').css("height",Math.floor(window.innerHeight*0.95));
		//$('#data_container').css("width",Math.floor(window.innerWidth*0.95));
	});
}
function scroll_left()
{
//alert( "left pressed" );
       current_scroll = current_scroll - width;
       if(current_scroll<0)
       	current_scroll=0;
       else
       if(current_scroll<=total_width-width)

       	$('#output').delay(000).animate({right:current_scroll});
}
function scroll_right()
{
	//alert( "right pressed" );
       if(current_scroll<=total_width-2*width)
       {
       	current_scroll = current_scroll+width;
       	$('#output').delay(00).animate({right:current_scroll});
       }
}