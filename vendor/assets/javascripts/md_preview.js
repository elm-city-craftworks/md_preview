/*
 * Markdown Preview
 *
 * @requires jQuery v1.7 or later
 * @homepage http://github.com/mendicant-university/md_preview
 *
 */

var MdPreview = {};

(function($) {

  MdPreview.init = function(){
    $("textarea[data-preview=true]").each(function(index) {
  		  MdPreview.buildPreviewTab($(this));
  	});

  	// override tab clicks
  	$(document).on('click', 'div.markdown-preview ul.tabs li:not(.label) a', function(e) {
  		var tabs = $(this).parents('ul').find('li');
  		var tabContents = $(this).parents('ul').next('.tab-container').find('.tab-content');

  		tabs.removeClass("active");
  		$(this).parent().addClass("active");
  		tabContents.hide();

  		// show active tab contents
  		var activeTab = tabContents.filter("." + $(this).attr("href"));
  		$(activeTab).show();

  		// convert markdown for preview
  		if($(this).attr("href") == "preview"){
        MdPreview.convertMarkdown(tabContents);
      }
      else{
        activeTab.find('textarea').focus();
      }

  		e.preventDefault();
  	});

  	// override links in preview
  	$(document).on('click', 'tab-container .preview a', function(e){
      window.open(e.target.href);
      e.preventDefault();
  	});
  }

  MdPreview.buildPreviewTab = function(textarea){
    textarea.wrap('<div class="markdown-preview" />');

    var labelText = "Comments are processed as " +
      "<a href='http://daringfireball.net/projects/markdown/syntax'" +
      " target='_blank'>Markdown</a>";
    var label = '<li class="label">' + labelText + '</li>';

    // insert tabs
  	textarea.before(' \
  		<ul class="tabs"> \
  			<li><a href="edit">Edit</a></li> \
  			<li><a href="preview">Preview</a></li>' +
  		  label +
  		'</ul> \
  	');

  	// wrap textarea
  	textarea.wrap('<div class="tab-content edit" />');

  	// tab-container wrapper
  	textarea.parent().wrap('<div class="tab-container" />');

  	textarea.parent().after('<div class="tab-content preview">Preview</div>');

  	// activate tab links
  	MdPreview.enableTabs(textarea);
  }

  MdPreview.enableTabs = function(textarea) {
  	var tabs = textarea.parents('.tab-container').prev('ul.tabs').find('li');
  	var tabContents = textarea.parents('.tab-container').find('.tab-content');

  	tabContents.hide();

  	// show first tab
  	tabs.first().addClass("active").show();
  	tabContents.first().show();
  }

  MdPreview.convertMarkdown = function(tab) {
    var text = tab.find('textarea').val();
    var previewTab = tab.filter('.tab-content.preview');

    previewTab.html("<p>Loading ...</p>");

  	$.post("/markdown/parse.text", { text: text },
  	  function(data){
        previewTab.html(data);
  	  }
  	);
  }

  $(function(){
    MdPreview.init();

    try{
      $('textarea[data-preview=true]').elastic();
    }
    catch(error){
      // Include jquery.elastic to enable this feature
      //= require jquery.elastic
    }
  });

})(jQuery);
