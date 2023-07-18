		// pattern-2
var n=prompt("enter the N value");
for(let i=1;i<=n;i++)
{
	for(let j=n;j>i;j--)
	{
		document.write("&nbsp;&nbsp;");	
	}
	for(let k=1;k<=i;k++)
	{
		document.write("*");
	}
		
	document.write("<br>");
}
