
function toggleDisplay(el)
{
	var nextSibling = el;
	do nextSibling = nextSibling.nextSibling;
	while (nextSibling && nextSibling.nodeType != 1);
	nextSibling.style.display = (nextSibling.style.display == 'block') ? 'none' : 'block';
}

window.onload = function() 
{
	var currPage = window.location.href.substring(window.location.href.lastIndexOf('/')+1, window.location.href.length);
	var links    = document.getElementsByTagName('a');
	for(var i = 0, size = links.length; i < size; i++)
	{		
		if(links[i].href.indexOf(currPage) != -1)
		{
			links[i].parentNode.className = 'currentOpenedPage';
			if(nodeAfter(links[i]) != null)
				if(nodeAfter(links[i]).tagName == 'UL')
					nodeAfter(links[i]).style.display = 'block';

			var loop        = true;
			var inspectedEl = links[i].parentNode;
			while(loop)
			{
				if(inspectedEl.tagName == 'UL')
					inspectedEl.style.display = 'block';

				inspectedEl = inspectedEl.parentNode;
				if(inspectedEl.tagName == 'DIV')
					loop = false;
			}
		}
	}
};


function is_all_ws(nod) { return !(/[^\t\n\r ]/.test(nod.data)); }
function nodeAfter(sib) { while ((sib = sib.nextSibling)) if (!is_ignorable(sib)) return sib; return null; }
function is_ignorable(nod) { return ( nod.nodeType == 8) || ((nod.nodeType == 3) && is_all_ws(nod)); }