var FlashRenderer = {        
    RenderGenericFlash: function(strSrc, strWidth, strHeight, transparent) {
        AC_FL_RunContent(
			'codebase','http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0',
			'width',strWidth,
			'height',strHeight,
			'align','middle',
			'src',strSrc,
			'quality','high',
			'bgcolor','#ffffff',
			'allowscriptaccess','sameDomain',
			'pluginspage','http://www.macromedia.com/go/getflashplayer',
			'movie', strSrc,
			'wmode', transparent?'transparent':'window'
		);
    },
    
    RenderGenericFlash2: function(strSrc, strWidth, strHeight, bgcolor, transparent) {
        AC_FL_RunContent('codebase','http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0','width',strWidth,'height',strHeight,'align','middle','src',strSrc,'quality','high','bgcolor',bgcolor,'allowscriptaccess','sameDomain','pluginspage','http://www.macromedia.com/go/getflashplayer','movie', strSrc, 'wmode', transparent?'transparent':'window' );    
    }
}