let i = 0, 
data = ['webetextbook.knsh.com.tw/EbookViewer'];
for(let j = 0; j < data.length; j++){
	if(location.href.search(data[j]) > -1){
		i++;
	}
}
if(i > 0){
	const script = document.createElement('script'), 
	button = document.createElement('button');
	button.style.background = 'red';
	button.style.height = '2vw';
	button.style.width = '2vw';
	button.style.position = 'fixed';
	button.style.right = '1vw';
	button.style.top = '1vw';
	button.style.borderRadius = '50%';
	button.style.borderStyle = 'solid';
	button.style.borderColor = 'white';
	button.style.boxShadow = '0px 0px 1vw 0px #000000';
	button.style.cursor = 'pointer';
	button.setAttribute('onclick', '$_CanvasToTdmaker.open();');
	script.innerHTML = `
	const $_CanvasToTdmaker = {
		'$':function(E, F = document){
			return(F.querySelector(E));
		}, 
		'$$':function(E, F = document){
			return(F.querySelectorAll(E));
		}, 
		'$_GET':{},
		'ljust':function(text, length, char){
			var fill = [];
			while ( fill.length + text.length < length ) {
			  fill[fill.length] = char;
			}
			return(fill.join('') + text);
		}, 
		'rjust':function(text, length, char){
			var fill = [];
			while ( fill.length + text.length < length ) {
			  fill[fill.length] = char;
			}
			return(text + fill.join(''));
		}, 
		'open':function(){
			if(location.href.search('webetextbook.knsh.com.tw') > -1){
				let img = \`https://storage.googleapis.com/material_storage_1/WebEbook/\${NowEbook}/Resource/\${AllPageResXml[NowPage].querySelector('background').innerHTML.split('<![CDATA[')[1].split(']]>')[0]}\`, 
				name = \`\${NowEbook} p.\${NowPage+1}\`;
				window.open(\`https://maohupi.riarock.com/web/tool/tdmaker/index.html?!type;=!link;&!img;=!\${img};&!name;=!\${name};\`);
			}
		}, 
		'init':function(){
			let href = location.href.split('?')
			if(href.length > 1){
				href = location.href.split('?')[1].split('&');
				href.forEach(kv => {
					kv = kv.split('=');
					this.$_GET[kv[0]] = kv[1];
				});
			}
		}
	};
	$_CanvasToTdmaker.init();
	`;
	button.appendChild(script);
	document.body.appendChild(button);
}
