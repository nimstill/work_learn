1，得到网页上的链接地址：

string matchString = @"<a[^>]+href=\s*(?:'(?<href>^']+)'|""(?<href>[^""]+)""|(?<href>[^>\s]+))\s*[^>]*>";
2，得到网页的标题：

string matchString = @"<title>(?<title>.*)</title>";
3，去掉网页中的所有的html标记：

string temp = Regex.Replace(html, "<[^>]*>", ""); //html是一个要去除html标记的文档

4, string matchString = @"<title>([\S\s\t]*?)</title>";
5, js去掉所有html标记的函数：

function delHtmlTag(str)
{
      return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
}
6. 统计字数

t = $('.remarktext').html().replace(/<[^>]+>/g,"").length;

