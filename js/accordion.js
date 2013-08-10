$(function() {
	$( "#lyrics_pane_inner" ).accordion({ heightStyle: "content", collapsible: true, active: false });
	var heightStyle = $( "#lyrics_pane_inner" ).accordion( "option", "heightStyle" );
	$( "#lyrics_pane_inner" ).accordion( "option", "heightStyle", "content" );
	var collapsible = $( "#lyrics_pane_inner" ).accordion( "option", "collapsible" );
	$( "#lyrics_pane_inner" ).accordion( "option", "collapsible", true );
});
