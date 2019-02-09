var casper = require("casper").create({});

var dst = casper.cli.options["dst"];
var toon_id = casper.cli.options["id"];
var lastno = casper.cli.options["no"];
var no;

casper.start();

for (no=1; no<=lastno;no++){
    var nox = no;
    var uri ='http://comic.naver.com/webtoon/detail.nhn?titleId=' + toon_id + '&no=' + nox;

    (function(m){
        casper.thenOpen(uri, function() {
            var i;

            for(i=0;;i++){
                var id = '#content_image_' + i;
                if( casper.exists(id) == false ) break;
				
				var str1 = "" + m
				var pad1 = "0000"
				var ans1 = pad1.substring(0, pad1.length - str1.length) + str1
				
				var str2 = "" + i
				var pad2 = "0000"
				var ans2 = pad2.substring(0, pad2.length - str2.length) + str2
                
				this.captureSelector(ans1 + '_' + ans2 + '.png', id);
        	}

			console.log('No '+ m + '. has rendered' );
    });

})(nox);
}

casper.run();
