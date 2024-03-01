var contentData =
{
	"vertices-and-edges": {

		"content-title": "顶点和边（Vertices and Edges）",

		"theory-content":		"<div><span style: 'whitespace: nowrap'>图是顶点（vertices）的集合<\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 4; margin-right: 0 position:relative'><g><circle cx='15' cy='15' r='10' fill='#1f77b4'/></g></svg><\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 0; margin-right: 0; position:relative'><g><circle cx='15' cy='15' r='10' fill='#ff7f0e'/></g></svg><\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 0; margin-right: 4; position:relative'><g><circle cx='15' cy='15' r='10' fill='#2ca02c'/></g></svg><\/span><span style: 'whitespace: nowrap'>通过边（edges）相互连接<\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 4; margin-right: 0 position:relative'><g><line x1='5' y1='25' x2='25' y2='5' stroke='#888' stroke-width='2px' stroke-linecap='round' stroke-linejoin='round'/></g></svg><\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 0; margin-right: 0; position:relative'><g><line x1='5' y1='25' x2='25' y2='5' stroke='#888' stroke-width='2px' stroke-linecap='round' stroke-linejoin='round'/></g></svg><\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 0; margin-right: 0; position:relative'><g><line x1='5' y1='25' x2='25' y2='5' stroke='#888' stroke-width='2px' stroke-linecap='round' stroke-linejoin='round'/></g></svg><\/span><span style: 'whitespace: nowrap'>.  我们用\\(V\\) 表示所有顶点的集合，用\\(E\\)表示所有边的集合。<\/p><p>懂了吗? 简单来说: 图有两个组成部分 -  <b>顶点集合<\/b> \\(V\\) 与 <b>边集合<\/b> \\(E\\)。边是用来连接顶点的东西。<\/p><p>如果边连接两个顶点\\(v_1\\) 和 \\(v_2\\), 那么用\\(v_1v_2\\)来表示边, 和\\(v_2v_1\\)等同。<\/p><p>如果两个顶点通过边连接，则称它们为<b>相邻（adjacent）<\/b>。<\/p><p>现在阅读下面的说明并创建自己的图。你会在图的区域下方看到集合\\(V\\) 和 \\(E\\) 。开始玩几局，让自己熟悉这些符号。<\/span><\/div>",

		"interface-title":		"App 界面:",

		"interface-content":		"<ul> <li>要添加顶点，请在空白处单击左键<b>left click<\/b>。<\/li><li>要添加边，可以从一个顶点<b>拖放<\/b>到另一个顶点上。<\/li><li>要删除顶点\/边只需要 <b>右击<\/b> 它。<\/li><li>要移动顶点<b>按住Ctrl直接拖放<\/b>它。<\/li><li>要看到顶点\/边的名字只需要将<b>光标悬停在其上方<\/b>。<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All</button>",

		"svg-output":		"",

		"prev":		"index.html",
		"next":		"?order-and-size",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"order-and-size": {

		"content-title": "图的阶（Order）与边数（Size）",

		"theory-content":		"<p><b>阶（Order） <\/b> 是指图中顶点（vertices）的数量。<\/p><p><b>边数（Size） <\/b>是指图中边（edges）的数量<\/p><p> 创建一些自己的图，并观察其阶和边数。 尝试多次来熟悉这些术语。 <\/p><p>现在清除此图，并绘制一些顶点。 (记为 \\(n\\)). 尝试使用这些顶点实现最大的边数。尝试使用不同的\\(n\\)值. <\/p><p> 需要注意，\\(n\\)阶图可能的最大边数是什么? <\/p><div class=\"hint\"> <span class=\"hint-word\">提示: <\/span>当所有顶点互相连接时，才能实现最大边数。<\/div><p> 答案在下方，但是不要看。清空当前的图，多尝试几次再说。 <\/p><div class=\"toggle-container\"> <span class=\"toggle-link target-hidden\">点击查看答案<\/span> <div class=\"toggle-content\"> <p> 答案是 \\(\\frac{n(n-1)}{2}\\). <\/p><p> 但是为什么？ 因为你能绘制的最大边数与你可以选择两个顶点的方式数相同。 <\/p><p> 所以，让我们选择第一个顶点，并将其命名为  \\(a\\)。我们有 \\(n\\) 种方式来选择\\(a\\)。为了选择另一个顶点，我们留下了\\(n-1\\)个顶点。所以，我们可以用\\(n(n-1)\\)种方式来选择两个顶点, 对不? <\/p><p> 不对。那是因为我们计算了两次。如果第一次选择是\\(b\\)，并且另一个选择是\\(a\\)? 想通了吗? 别忘了，\\(ab\\) 和 \\(ba\\) 呈现的是同一条边。 <\/p><p> 因此，我们除以\\(2\\) 并且得到\\(\\frac{n(n-1)}{2}\\) 作为最终答案。 <\/p><\/div><\/div>",

		"interface-title":		"App 界面:",

		"interface-content":		"<ul> <li>要添加顶点，请在空白处单击左键<b>left click<\/b>。<\/li><li>要添加边，可以从一个顶点<b>拖放<\/b>到另一个顶点上。<\/li><li>要删除顶点\/边只需要 <b>右击<\/b> 它。<\/li><li>要移动顶点<b>按住Ctrl直接拖放<\/b>它。<\/li><li>要看到顶点\/边的名字只需要将<b>光标悬停在其上方<\/b>。<\/li><\/ul>",


		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All</button>",

		"svg-output":		"",

		"prev":		"?vertices-and-edges",
		"next":		"?degree-of-vertex",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"degree-of-vertex": {

		"content-title": "顶点的度数（Degree）",

		"theory-content":		"<p>顶点的<b>度数<\/b> 是落在它上面的边数。它告诉我们，有多少顶点与该顶点相邻。<\/p><p> 在图中，每个顶点都用其度数标记。做一些修改，看看顶点的度数如何变化。 <\/p><p> 顶点 \\(v\\) 的度数由\\(deg(v)\\)表示。  \\(deg(v)=0\\) 的顶点是独立的 &mdash;没有任何连接。我们专门为其起了一个特殊的名字。 <\/p><p> <b>零度<\/b> 的顶点被叫做<b>孤立顶点（isolated vertices）。<\/b> 它们没有和任何其他顶点相连。 <\/p><p> 图 \\(G\\) 的最小度数由 \\(\\delta(G)\\)符号表示。并且最大值为\\(\\Delta(G)\\)。为了避免混淆这两个符号，请记住 \\(\\delta\\) 是 \"小写 delta\" 并且 \\(\\Delta\\)是 \"大写 delta\"。<\/p><div class=\"note\"> <span class=\"note-word\">注意:<\/span> 请记住 \\(\\delta\\) 和 \\(\\Delta\\) 是图的属性，而 \\(deg\\)是顶点的属性。 <\/div>",

		"interface-title":		"App 界面:",

		"interface-content":		"<ul> <li>要添加顶点，请在空白处单击左键<b>left click<\/b>。<\/li><li>要添加边，可以从一个顶点<b>拖放<\/b>到另一个顶点上。<\/li><li>要删除顶点\/边只需要 <b>右击<\/b> 它。<\/li><li>要移动顶点<b>按住Ctrl直接拖放<\/b>它。<\/li><li>要看到顶点\/边的名字只需要将<b>光标悬停在其上方<\/b>。<\/li><\/ul>",


		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All</button>",

		"svg-output":		"",

		"prev":		"?order-and-size",
		"next":		"?degree-sequence",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"degree-sequence": {

		"content-title": "图的度序列（Degree Sequence）",

		"theory-content":		"<p>图的<b>度序列（Degree sequence）<\/b>是图中所有顶点度数的列表。通常以<b>非递增的顺序<\/b>列出度数，即从最大度数到最小度数。 <\/p><div class=\"note\"> <span class=\"note-word\">注意:<\/span> 度序列总是非递增的。 因此，每一个图都有一个<b>唯一度序列。<\/b> <\/div><p> 图中，每个顶点的文本都显示了它的度数。绘制你自己的图，并且查看它的度序列。<\/p><p> 你将观察到度序列的综合始终是图边数的两倍。 事实上，这是一个经过数学验证的结果（定理）。<\/p><div class=\"result\"> <span class=\"result-word\">定理:<\/span> 图中所有顶点的度数之和是边数的两倍。 <p> 在数学上, \\[\\sum deg(v_i)=2|E|\\] 其中 \\(|E|\\) 代表图中边的数量（边数）。 <\/p><\/div><p> 这个结果背后的原因非常简单。边是两个顶点的连接。所以每条边都为度数总和贡献了\\(2\\)，因此度数之和一定是边数总和的2倍。<\/p>",

		"interface-title":		"App 界面:",

		"interface-content":		"<ul> <li>要添加顶点，请在空白处单击左键<b>left click<\/b>。<\/li><li>要添加边，可以从一个顶点<b>拖放<\/b>到另一个顶点上。<\/li><li>要删除顶点\/边只需要 <b>右击<\/b> 它。<\/li><li>要移动顶点<b>按住Ctrl直接拖放<\/b>它。<\/li><li>要看到顶点\/边的名字只需要将<b>光标悬停在其上方<\/b>。<\/li><\/ul>",


		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All</button>",

		"svg-output":		"",

		"prev":		"?degree-of-vertex",
		"next":		"?graphic-sequence",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"graphic-sequence": {

		"content-title": "图序列（Graphic Sequence）",

		"theory-content":		"<p>如果构建与给定序列相等的度序列的图，则这一系列数字就称为<b>图序列（graphic sequence）<\/b>  <\/p><p> 有点困惑？图序列又是什么呢？ <\/p><p> 假如你有一列数字，将每个数字分配给孤立的顶点。现在你能否连接这些顶点，并且得到和分配数字相同的度数呢？ 如果是，那么这些数字列表就是图。否则不是。<\/p><p> <b>示例 1:<\/b> 序列 \\((3,3,2,1,1,0)\\) 是图。在图中，你能看到顶点以这些数字作为度数。请注意，即使删除\\(0\\)，序列也依旧是图。<\/p><div class=\"note\"> <span class=\"note-word\">注意:<\/span> 仅包含0的序列总是一个图。 <\/div><p> <b>示例 2:<\/b> 序列\\((4,3,2,1)\\) 不是图。我们至少需要其他\\(4\\) 个顶点来满足具有度数4的顶点，但这里只有三个其他顶点。 <\/p><p> <b>示例 3:<\/b> 序列 \\((4,3,3,2,2,1)\\) 不是图。回想一下，度数总和是边数的<b>两倍<\/b> 。所以，图序列的总和必须是偶数。当前这个序列之和是奇数。 <\/p><p> 以下序列都是图。尝试绘制它们。你可以点击旁边的链接查看答案 <\/p><p> \\((5,1,1,1,1,1)\\) <span class=\"graph-event-link\" id=\"prob0\"> Show solution<\/span> <\/p><p> \\((2,2,2,2,2)\\) <span class=\"graph-event-link\" id=\"prob1\"> Show solution<\/span> <\/p><p> \\((4,4,4,4,4,0)\\) <span class=\"graph-event-link\" id=\"prob2\"> Show solution<\/span> <\/p><p> \\((3,3,2,2,2)\\) <span class=\"graph-event-link\" id=\"prob3\"> Show solution<\/span> <\/p><p> \\((5,3,3,3,2,2)\\) <span class=\"graph-event-link\" id=\"prob4\"> Show solution<\/span> <\/p><div class=\"note\"> <span class=\"note-word\">注意:<\/span> 图具有唯一的度序列。 但是同一图序列可能有不同的图。<\/div>",

		"interface-title":		"App 界面:",

		"interface-content":		"<ul> <li>要添加顶点，请在空白处单击左键<b>left click<\/b>。<\/li><li>要添加边，可以从一个顶点<b>拖放<\/b>到另一个顶点上。<\/li><li>要删除顶点\/边只需要 <b>右击<\/b> 它。<\/li><li>要移动顶点<b>按住Ctrl直接拖放<\/b>它。<\/li><li>要看到顶点\/边的名字只需要将<b>光标悬停在其上方<\/b>。<\/li><\/ul>",


		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All</button>",

		"svg-output":		"",

		"prev":		"?degree-sequence",
		"next":		"?havel-hakimi",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"havel-hakimi": {

		"content-title": "Havel–Hakimi算法",

		"theory-content":		"<p>确定序列是否为图是一项艰巨的任务。Havel-Hakimi定理可以将该任务变得更容易。<\/p><p>看看这个定理，或者你可以直接跳过它，跳到下面的算法。<\/p><div class=\"result\"> <span class=\"result-word\">Havel-Hakimi 定理: <\/span> 非递增序列 \\[(d_1, d_2, ..., d_n)\\] 是图，当且仅当序列\\[ (d_2-1, d_3-1, ..., d_{d_1+1}-1, \\\\d_{d_1+2}, d_{d_1+3}, ..., d_n) \\] 也是图。 <\/div><p> 看看第二个序列是如何构建的？第一个序列是非递增的，意味着它最大度数是\\(d_1\\)。我们将具有最高度数(\\(d_1\\)) 的顶点，并将其连接到下一个具有最高度数\\(d_1\\) 的顶点。在新的度序列中，我们已经用尽了前一个序列中的第一项并下降到下一个\\(d_1\\) 。<\/p><p> 现在该定理说，两个序列都是图，或者都不是图。我们可以再次在新序列上应用该定理，以获得另一个序列。我们可以重复这个过程，直到问题变得简单。因此，在该过程中获得的所有序列要么都是图，要么都不是图。<\/p><div class=\"note\"> <span class=\"note-word\">注意: <\/span>应用定理后得到的序列可能不是非递增的。在这种情况下，你必须在重新应用定理之前以非递增顺序重新对其进行排序。 <\/div><p> 你可以查看此<a href=\"https:\/\/en.wikipedia.org\/wiki\/Havel%E2%80%93Hakimi_algorithm\" target=\"_blank\">Wikipedia链接<\/a>来获得更多信息。你也可以在互联网上搜索定理证明。 <\/p><div class=\"note\"><span class=\"note-word\">注意: <\/span> 全是零的序列是图，因为总是可以绘制多个孤立顶点。<\/div><p>你现在的任务是给每个给定的图序列绘制一个图。对于此任务，你可以基于上述定理的<b>以下算法<\/b> <\/p><div class=\"result\"> <span class=\"result-word\">算法: <\/span> <p><\/p><ol> <li>选择具有最高度数的目标。称其为值\\(k\\)。<\/li><li>将此顶点连接到下一个最高顶点\\(k\\)。直到这个顶点被使用。<\/li><li>重复步骤1和步骤2直到所有顶点被用尽。<\/li><li>如果所有顶点被用尽，则序列已经降到全零，因此序列是图。<\/li><li>如果最终得到非零顶点而无法进一步耗尽，则序列不是图。<\/li><\/ol> <\/div><p>本次练习中的所有序列都是图。<\/p>",

		"interface-title":		"App 界面:",

		"interface-content":		"<ul> <li>要添加顶点，请在空白处单击左键<b>left click<\/b>。<\/li><li>要添加边，可以从一个顶点<b>拖放<\/b>到另一个顶点上。<\/li><li>要删除顶点\/边只需要 <b>右击<\/b> 它。<\/li><li>要移动顶点<b>按住Ctrl直接拖放<\/b>它。<\/li><li>要看到顶点\/边的名字只需要将<b>光标悬停在其上方<\/b>。<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"clear-edges\" class=\"btn btn-default\">Reset Edges<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Next<\/button>",

		"svg-output": "<div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a>1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><li><a>6<\/a><\/li><li><a>7<\/a><\/li><li><a>8<\/a><\/li><li><a>9<\/a><\/li><li><a>10<\/a><\/li><li><a>11<\/a><\/li><li><a>12<\/a><\/li><\/ul> <\/div>",

		"prev":		"?graphic-sequence",
		"next":		"?pigeonhole",
		"script":	"app.js",
		"star":		"y",
		"style":	"app.css"
	},

	"pigeonhole": {

		"content-title": "鸽笼原理（Pigeonhole Principle）",

		"theory-content":		"<p> 鸽笼原理非常简单直观，但它在离散数学中的应用却非常频繁。 <\/p><div class=\"result\"> <span class=\"result-word\">鸽笼原理: <\/span> 如果我们将\\(n\\) 只鸽子放到少于\\(n\\) 的笼子里, 那么，至少有一个鸽笼包含一只以上的鸽子。 <\/div><p> 你可以将<i>鸽子<\/i> 替换为<i>物品<\/i> 并且把 <i>鸽笼<\/i> 替换为<i>盒子<\/i>。所以，理论上来说，如果我们的物品比盒子数量要多，如果要把所有的物品分配给这些盒子，那么至少有一个盒子将包含多个物品。 <\/p><p> 应用该理论才是最困难的地方。你必须确定好，哪些物品是鸽子，哪些是笼子。 <\/p><p> <b>示例 1: <\/b> 你是否注意到了，在本节课只有十种不同颜色的顶点。因此，如果图中有十个以上的顶点，那么至少有一对顶点是具有相同的颜色！亲自看看吧。十种颜色可以被认为是十个笼子，而每个顶点都是鸽子。 <\/p><div class=\"result\"> <span class=\"result-word\">示例 2: <\/span> 在任何多余一个顶点的图中，存在至少一对具有相同度数的顶点。 <\/div><p>这就意味着，你无法拥有具有不同度数的 \\(阶 \\geq 2\\) 的图。肯定会有重复的度数。通过绘制\\(阶 \\geq 2\\)的图来查看一下。 <\/p><p>但是为什么会这样呢？尝试给出一个解释。你可以通过绘制不同度数的顶点来帮助自己思考。 <\/p><div class=\"hint\"> <span class=\"hint-word\">提示: <\/span> 假设 \\(order=n\\) 并考虑 \\(n\\)的度数值范围。 <\/div><div class=\"toggle-container\"> <span class=\"toggle-link target-hidden\">点击查看解释<\/span> <div class=\"toggle-content\"> <p> 假设图有 \\(order=n\\)。顶点可以连接到最多\\(n-1\\) 个其他顶点. 所以，\\(0 \\leq deg(v_i) \\leq n-1\\)。 <\/p><p> 看起来 \\(n\\) 个顶点, 有\\(n\\) 个度数选择 (从 \\(0\\) 到 \\(n-1\\))。所以，如果我们将不同的度数视为鸽笼，并且将顶点视为鸽子，则不应该是 \\(n\\)个唯一度数吗? <\/p><p> 不。我们进一步观察来揭示原因。 <\/p><p> 注意在\\(n\\)阶图中，度数为\\(0\\) 和 \\(n-1\\) 的顶点不能同时存在。 <\/p><p> 如果存在度数为\\(0\\)的顶点，则意味着该顶点未连接到其他任意顶点。 因此，顶点不能和其他\\(n-1\\)个所有顶点连接。所以在这种情况下，我们得到\\(0 \\leq deg(v_i) \\leq n-2\\) 。 <\/p><p> 如果那里存在度数为 \\(n-1\\)的顶点，则这些顶点一定是连接其他所有 \\(n-1\\) 个顶点。因此，不可能存在孤立顶点。所以在这种情况下，我们有\\(1 \\leq deg(v_i) \\leq n-1\\) 。 <\/p><p> 在上述两种情况中，我们有\\(n\\) 个顶点 (鸽子) 但是仅有 \\(n-1\\) 个可能的度数(鸽笼)。所以，我们确定有一个鸽笼 (度数)里有一只以上的鸽子 (顶点). <\/p><\/div><\/div>",

		"interface-title":		"App 界面:",

		"interface-content":		"<ul> <li>要添加顶点，请在空白处单击左键<b>left click<\/b>。<\/li><li>要添加边，可以从一个顶点<b>拖放<\/b>到另一个顶点上。<\/li><li>要删除顶点\/边只需要 <b>右击<\/b> 它。<\/li><li>要移动顶点<b>按住Ctrl直接拖放<\/b>它。<\/li><li>要看到顶点\/边的名字只需要将<b>光标悬停在其上方<\/b>。<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All</button>",

		"svg-output": "",

		"prev":		"?havel-hakimi",
		"next":		"?regular-graph",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"regular-graph": {

		"content-title": "Regular Graph",

		"theory-content":		"<p> A graph in which all the vertices have same degree is called a <b>regular graph<\/b>. <\/p><p> A regular graph where degree of each vertex is \\(k\\) is called as \\(k\\mbox{-}regular\\). <\/p><p> The figure shows a \\(3\\mbox{-}regular\\) graph of order \\(6\\). <\/p><p>Try to construct the following regular graphs.<\/p><p>\\(1\\mbox{-}regular\\) of order \\(2\\)<\/p><p>\\(1\\mbox{-}regular\\) of order \\(6\\)<\/p><p>\\(2\\mbox{-}regular\\) of order \\(3\\)<\/p><p>\\(2\\mbox{-}regular\\) of order \\(5\\)<\/p><p>\\(4\\mbox{-}regular\\) of order \\(5\\)<\/p><p>\\(4\\mbox{-}regular\\) of order \\(6\\)<\/p><p>\\(4\\mbox{-}regular\\) of order \\(7\\)<\/p><p>\\(5\\mbox{-}regular\\) of order \\(6\\)<\/p><p> Solutions to above problems aren't provided. You should be able to solve them all by yourself. If you face difficulty in drawing the graphs, you can see the hint given below. But you must try first. <\/p><div class=\"hint toggle-container\"> <span class=\"toggle-link target-hidden\">Click to see hint<\/span> <div class=\"toggle-content\"> <span class=\"hint-word\">Hint: <\/span> Figure out the degree sequence of regular graph. Then use Havel-Hakimi to construct graph. Note that the text in vertex represents its degree and not target degree. <\/div><\/div><p> A little task for you now. Find the number of edges in a \\(k\\mbox{-}regular\\) graph of order \\(n\\). Start by constructing and observing regular graphs of small order. In case you don't get it, below is the answer. <\/p><div class=\"result toggle-container\"> <span class=\"toggle-link target-hidden\">Click to see answer<\/span> <div class=\"toggle-content\"> \\[|E|=\\frac{nk}{2}\\] This is derived from the fact that sum of degrees is twice the number of edges. \\[\\sum deg(v_i)=2|E|\\] Here the sum of degrees is \\(nk\\). <br>We also see that the sum of degrees (\\(nk\\)) will be an odd number when both \\(n\\) and \\(k\\) are odd. We cannot have number of edges as a fractional number, and therefore a regular graph with both \\(n\\) and \\(k\\) odd cannot exist. <\/div><\/div>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul> <li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex or edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All</button>",

		"svg-output": "",

		"prev":		"?pigeonhole",
		"next":		"?complete-graph",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"complete-graph": {

		"content-title": "Complete Graph",

		"theory-content":		"<p> A graph in which each vertex is connected to every other vertex is called a <b>complete graph<\/b>. <\/p><p> Note that degree of each vertex will be \\(n-1\\), where \\(n\\) is the order of graph. <\/p><p> So we can say that a complete graph of order \\(n\\) is nothing but a \\((n-1)\\mbox{-}regular\\) graph of order \\(n\\). <\/p><p>A complete graph of order \\(n\\) is denoted by \\(K_n\\).<\/p><p> The figure shows a complete graph of order \\(5\\). <\/p><p> Draw some complete graphs of your own and observe the number of edges. <\/p><p> You might have observed that number of edges in a complete graph is \\(\\frac{n(n-1)}{2}\\). This is the maximum achievable size for a graph of order \\(n\\) as you learnt in <a href=\"?order-and-size\">Order and Size<\/a>. <\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul> <li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex or edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All</button>",

		"svg-output": "",

		"prev":		"?regular-graph",
		"next":		"?bipartite",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"bipartite": {

		"content-title": "Bipartite Graph",

		"theory-content":		"<p> A graph is said to be <b>bipartite<\/b> if we can divide the set of vertices in two disjoint sets such that there is no edge between vertices belonging to same set. <\/p><p>Let's break it down.<\/p><p> Here we are dividing set of vertices in two groups (or sets). Each vertex goes into one of these groups. This is like labelling each vertex either A or B. <\/p><p> Each vertex has only one label. So the two sets are <b>disjoint<\/b> i.e. the two sets don't have any vertex in common. <\/p><p> And there should not be any edge running within the same set. This means that every edge runs between two vertices belonging to different sets &mdash; one labelled as A and other as B. <\/p><p> So if we can label our vertices in such a way, then the graph is bipartite. Otherwise not. <\/p><p> Draw some graphs of your own to understand it better. <\/p><p> For a bipartite graph, the vertices of set \\(A\\) and \\(B\\) are shown in orange and green colors, respectively. If it isn't bipartite, the vertices will have usual colors. <\/p><div class=\"note\"> <span class=\"note-word\">Note: <\/span> Isolated vertices do not influence whether the graph is bipartite or not. They can be ignored. <\/div><p> Isolated vertices are colored silver to show that these vertices are ignored. We can put them randomly in any set, and our graph would still be bipartite (or non-bipartite). <\/p><p>Were you paying attention to the sum of degrees of the two sets?<\/p><div class=\"result\"> <span class=\"result-word\">Theorem: <\/span>In a bipartite graph, the sum of degrees of vertices of each set is equal to the number of edges. \\[\\sum_{v \\in A}deg(v)=\\sum_{v \\in B}deg(v)=|E|\\] <\/div><p>Why does it holds true? Try to reason out yourself.<\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul> <li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex or edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All</button>",

		"svg-output": "",

		"prev":		"?complete-graph",
		"next":		"?complete-bipartite",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"complete-bipartite": {

		"content-title": "Complete Bipartite Graph",

		"theory-content":		"<p> <b>Complete bipartite<\/b> graph is a special type of <a href=\"?bipartite\">bipartite graph<\/a> where every vertex of one set is connected to every vertex of other set. <\/p><p> The figure shows a bipartite graph where set \\(A\\) (orange-colored) consists of \\(2\\) vertices and set \\(B\\) (green-colored) consists of \\(3\\) vertices. <\/p><p> If the two sets have \\(p\\) and \\(q\\) number of vertices, then we denote the complete bipartite graph by \\(K_{p,q}\\). <\/p><div class=\"note\"> <span class=\"note-word\">Note: <\/span> Don't confuse the notation \\(K_{p,q}\\) by \\(K_n\\). Former is used for complete bipartite graph, and later denotes a <a href=\"?complete-graph\">complete graph<\/a>. Both are different. <\/div><div class=\"result\"> <span class=\"result-word\">Properties: <\/span> The following results hold true for a complete bipartite graph \\(K_{p,q}\\). <p><\/p><ul> <li>The order of graph is \\(|V|=p+q\\).<\/li><li>The size of graph is \\(|E|=pq\\).<br>This can be used to check if a bipartite graph is complete bipartite or not.<\/li><li>The <a href=\"?degree-seqeunce\">degree sequence<\/a> is \\((p,p,...,p,q,...,q)\\) where \\(p\\) is repeated \\(q\\) times and \\(q\\) is repeated \\(p\\) times. It is assumed here that \\(p>q\\).<\/li><\/ul> <\/div>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul> <li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex or edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All</button>",

		"svg-output": "",

		"prev":		"?bipartite",
		"next":		"?walk",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"walk": {

		"content-title": "Walk",

		"theory-content":		"<p><b>Walk<\/b> is sequence of adjacent vertices (or edges) in a graph.<\/p><p> You can think of the vertices as cities and the edges as highways connecting them. You start at a city and start travelling to other cities. Then the route you travelled through can be called as a \"walk\". <\/p><p> To describe the route uniquely, you have to list down the cities and highways you travelled in that order. That's the idea of a walk. <\/p><div class=\"note\"> <span class=\"note-word\">Note:<\/span> You can't just list vertices (or edges) randomly and call it a walk. A subsequent vertex must be adjacent to the previous one. <\/div><p> While travelling the cities, you might have revisited some cities and might have travelled through the same highway multiple times. <\/p><p> Similarly, in a walk you can repeat the vertices and edges. <\/p><div class=\"note\"> <span class=\"note-word\">Note:<\/span> A walk can contain vertices and edges multiple times. However, in this app you won't be able to add the same edge again to the walk. <\/div><p>The number of edges in the walk is called as the <b>length<\/b> of the walk. It is one less than the number of vertices in the walk. Repeated edges (or vertices) are counted each time they appear in the walk.<\/p><p> Read the instructions below and create some walks of your own. Do this till you get what a walk is. <\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul> <li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex or edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><li>To start a walk, click on any edge.<\/li><li>The <span style=\"background-color: #ff0; padding: 2px;\">first<\/span> and <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertices of walk have colored boundaries.<\/li><li>To add next edge to the walk, click on an edge falling on the <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertex of the walk.<\/li><li>The <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> edge in the walk can be removed by again clicking on it.<\/li><li>You won't be able to delete vertices\/edges which are a part of walk.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Clear Walk<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Reverse Walk<\/button>",

		"svg-output": "",

		"prev":		"?complete-bipartite",
		"next":		"?open-vs-closed",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"open-vs-closed": {

		"content-title": "Open vs Closed Walks",

		"theory-content":		"<p>This lesson describes some special types of walks. Get acquainted with them and play around. But note that the following terminology may differ from your textbook.<\/p><p>A walk is said to be <b>open<\/b> if the first and the last vertices are different i.e. the terminal vertices are different.<\/p><p>A walk is said to be <b>closed<\/b> if the first and last vertices are the same. That means you start walking at a vertex and end up at the same.<\/p><p>Before proceeding further, try drawing open and closed walks to understand them better. Below are some more terms you need to know.<\/p><p><b>Trail<\/b> is an open walk where vertices can repeat, but not edges.<\/p><p><b>Path<\/b> is an open walk with no repetition of vertices and edges.<\/p><p>If you make a trail (or path) closed by coinciding the terminal vertices, then what you end up with is called a circuit (or cycle).<\/p><p><b>Circuit<\/b> is a closed walk where vertices can repeat, but not edges.<\/p><p><b>Cycle<\/b> is a closed walk where neither vertices nor edges can repeat. But since it is closed, the first and the last vertices are the same (one repetition).<\/p><p>It is easy to confuse these terms with each other. So play around till you get comfortable. Remember that you won't be able to repeat edges in the app.<\/p><div class=\"note\"> <span class=\"note-word\">Note: <\/span> A path is a special type of trail where vertices don't repeat. Similarly, a cycle is a special type of circuit. <\/div>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul><li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex or edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><li>To start a walk, click on any edge.<\/li><li>The <span style=\"background-color: #ff0; padding: 2px;\">first<\/span> and <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertices of walk have colored boundaries.<\/li><li>To add next edge to the walk, click on an edge falling on the <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertex of the walk.<\/li><li>The <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> edge in the walk can be removed by again clicking on it.<\/li><li>You won't be able to delete vertices\/edges which are a part of walk.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Clear Walk<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Reverse Walk<\/button>",

		"svg-output": "",

		"prev":		"?walk",
		"next":		"?connectivity",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"connectivity": {

		"content-title": "Connectivity",

		"theory-content":		"<p>A graph is said to be <b>connected<\/b> if a path can be drawn between any two of its vertices. Otherwise, it is called <b>disconnected<\/b>.<\/p><p>Each maximal connected subgraph is called a <b>connected component<\/b> or just <b>component<\/b> of the graph.<\/p><p>Since a component is maximal connected:<\/p><ul> <li>No path can be draw between an \"outside\" vertex and any of the component's vertices.<\/li><li>There is a path from any vertex of the component to any other vertex of the component.<\/li><\/ul> <div class=\"note\"> <span class=\"note-word\">Note: <\/span> An <b>isolated vertex is a component<\/b> in the sense that there is no vertex in the component which isn't connected to it; and their is no \"outside\" vertex connected to it. <\/div><p>The diagram shows a disconnected graph having two components - blue and orange.<\/p><p>Draw some graphs of your own and get comfortable with the terms. Each component will have a color of its own.<\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul><li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex or edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><li>To start a walk, click on any edge.<\/li><li>The <span style=\"background-color: #ff0; padding: 2px;\">first<\/span> and <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertices of walk have colored boundaries.<\/li><li>To add next edge to the walk, click on an edge falling on the <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertex of the walk.<\/li><li>The <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> edge in the walk can be removed by again clicking on it.<\/li><li>You won't be able to delete vertices\/edges which are a part of walk.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Clear Walk<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Reverse Walk<\/button>",

		"svg-output": "",

		"prev":		"?open-vs-closed",
		"next":		"?eulerian-circuit",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"eulerian-circuit": {

		"content-title": "Eulerian Circuit",

		"theory-content":		"<p>A circuit which visits each edge of the graph exactly once is called as <b>Eulerian circuit<\/b>. In other words, an <b>Eulerian circuit<\/b> is a closed walk which visits each edge of the graph exactly once.<\/p><p>A graph possessing an Eulerian circuit is known as <b>Eulerian graph<\/b>.<\/p><div class=\"result\"> <span class=\"result-word\">Theorem: <\/span> A connected graph is Eulerian if and only if the degree of every vertex is an even number. <\/div><p>Take note of the equivalency (<i>if and only if<\/i>) in above theorem. This means that:<\/p><ol> <li>If a connected graph has all its vertices of even degree, then it has an Eulerian circuit.<\/li><li>If a connected graph has an Eulerian circuit, then all its vertices have even degree.<\/li><\/ol> <div class=\"note\"> <span class=\"note-word\">Note: <\/span> Since a circuit is cyclic in nature, any vertex can be taken as the starting point for construction of an Eulerian circuit in an Eulerian graph. <\/div><p>Your task is to draw an Eulerian circuit for each of the given graphs.<\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul> <li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><li>To start a walk, click on any edge.<\/li><li>The <span style=\"background-color: #ff0; padding: 2px;\">first<\/span> and <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertices of walk have colored boundaries.<\/li><li>To add next edge to the walk, click on an edge falling on the <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertex of the walk.<\/li><li>The <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> edge in the walk can be removed by again clicking on it.<\/li><li>You won't be able to delete vertices\/edges which are a part of walk.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Clear Walk<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Reverse Walk<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Next<\/button>",

		"svg-output": "<div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a class=\"prob-current\">1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><\/ul> <\/div>",

		"prev":		"?connectivity",
		"next":		"?eulerian-trail",
		"script":	"app.js",
		"star":		"y",
		"style":	"app.css"
	},

	"eulerian-trail": {

		"content-title": "Eulerian Trail",

		"theory-content":		"<p>An open walk which visits each edge of the graph exactly once is called an <b>Eulerian Walk<\/b>. Since it is open and there is no repetition of edges, it is also called <b>Eulerian Trail<\/b>.<\/p><p>There is a connection between Eulerian Trails and Eulerian Circuits.<\/p><p>We know that in an Eulerian graph, it is possible to draw an Eulerian circuit starting from any vertex. What if we remove the last edge in this circuit? Can we still walk all the edges exactly once?<\/p><p>On removing the last edge, the two vertices on that edge will now have odd degrees. Rest of the vertices will still have even degree. Our circuit is no longer a circuit because the terminal vertices are different. What we have now is a trail that covers all the vertices exactly once.<\/p><div class=\"result\"> <p><span class=\"result-word\">Theorem: <\/span> A connected graph contains an Eulerian trail if and only if exactly two vertices have odd degree and rest have even degree.<\/p><p>The two vertices with odd degree must be the terminal vertices in the trail.<\/p><\/div><p>Note the equivalency (<i>if and only if<\/i>) in the above result.<\/p><p>Draw Eulerian trails for the given connected graphs.<\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul> <li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><li>To start a walk, click on any edge.<\/li><li>The <span style=\"background-color: #ff0; padding: 2px;\">first<\/span> and <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertices of walk have colored boundaries.<\/li><li>To add next edge to the walk, click on an edge falling on the <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertex of the walk.<\/li><li>The <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> edge in the walk can be removed by again clicking on it.<\/li><li>You won't be able to delete vertices\/edges which are a part of walk.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Clear Walk<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Reverse Walk<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Next<\/button>",

		"svg-output": "<div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a class=\"prob-current\">1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><\/ul> <\/div>",

		"prev":		"?eulerian-circuit",
		"next":		"?graph-coloring",
		"script":	"app.js",
		"star":		"y",
		"style":	"app.css"
	},

	"graph-coloring": {

		"content-title": "Graph Coloring",

		"theory-content":		"<p><b>Graph coloring<\/b> is the assignment of colors to each vertex in a graph such that no two adjacent vertices get the same color.<\/p><p>Sometimes, this is also referred to as <b>proper coloring<\/b> of graph.<\/p><p>You can change color of a vertex by left-clicking on it. In this unit you have 10 colors available for each vertex.<\/p><p>Try your hands on the graph and see it for yourself!<\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul><li>To change <span style=\"color:#fff; background-color:#d62728; padding:0 2px;\">color<\/span> of a vertex <b>left click<\/b> on it.<\/li><li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex\/edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All<\/button>",

		"svg-output": "",

		"prev":		"?eulerian-trail",
		"next":		"?k-colorable",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"k-colorable": {

		"content-title": "k-Colorable Graph",

		"theory-content":		"<p>A graph is said to be \\(k\\mbox{-}\\)<b>colorable<\/b> if it can be properly colored using \\(k\\) colors.<\/p><p>For example, a <a href=\"?bipartite\">bipartite graph<\/a> is \\(2\\mbox{-}\\)colorable. To see this, just assign two different colors to the two disjoint sets in a bipartite graph.<\/p><p>Conversely, if a graph is \\(2\\mbox{-}\\)colorable, then the vertices having same color can be taken as disjoint sets. Hence, we arrive at the following result:<\/p><div class=\"result\"><span class=\"result-word\">Theorem: <\/span>A graph is bipartite if and only if it is \\(2\\mbox{-}\\)colorable.<\/div><p>Now, consider a graph that is \\(k\\mbox{-}\\)colored. Choose any one vertex of the graph and replace it's color by a new \\(\\left(k+1\\right)\\)<sup>th<\/sup> color. Clearly, the graph is still properly colored.<\/p><div class=\"note\"><span class=\"note-word\">Note: <\/span>If a graph is \\(k\\mbox{-}\\)colorable, then it is also \\(\\left(k+n\\right)\\mbox{-}\\)colorable, \\(n \\geq 1\\).<\/div><p>Another thing worth noticing is that a graph is \\(1\\mbox{-}\\)colorable if and only if it is totally disconnected, that is all its vertices are isolated.<\/p><p>In each of the following excercises, you're given a graph and a limited number of colors. Your task is to color the graphs (properly). Try to <b>minimize<\/b> the number of colors you use.<\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul><li>To change <span style=\"color:#fff; background-color:#d62728; padding:0 2px;\">color<\/span> of a vertex <b>left click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Next<\/button>",

		"svg-output": "<div id=\"output-text\"><\/div><div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a class=\"prob-current\">1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><li><a>6<\/a><\/li><li><a>7<\/a><\/li><li><a>8<\/a><\/li><li><a>9<\/a><\/li><li><a>10<\/a><\/li><\/ul> <\/div>",

		"prev":		"?graph-coloring",
		"next":		"?chromatic-number",
		"script":	"app.js",
		"star":		"y",
		"style":	"app.css"
	},

	"chromatic-number": {

		"content-title": "Chromatic Number",

		"theory-content":		"<p><b>Chromatic number<\/b> of a graph is the minimum value of \\(k\\) for which the graph is \\(k\\mbox{-}colorable\\).<\/p><p>In other words, it is the minimum number of colors needed for a proper-coloring of the graph.<\/p><p>Chromatic number of a graph \\(G\\) is denoted by \\(\\chi(G)\\). And a graph with \\(\\chi(G)=k\\) is called a <b>\\(k\\mbox{-}\\)chromatic<\/b> graph.<\/p><p>You might have noticed in the previous chapter (on <a href=\"?k-colorable\">k-Colorable Graphs<\/a>) that some of the problems involved chromatic coloring.<\/p><p>Now we take a look at some common types of graph and their chromatic numbers.<\/p><p><b><a href=\"javascript:setGraph(0);\">Empty Graph<\/a>:<\/b> It's a graph without any edges (\\(|E|=0\\)). All the vertices are isolated. \\(\\chi(G)=1\\). Note that an empty graph is also <a href=\"?bipartite\">bipartite<\/a>.<\/p><p><b><a href=\"javascript:setGraph(1);\">Bipartite Graph<\/a>:<\/b> An empty bipartite graph has \\(\\chi(G)=1\\). A non-empty bipartite graph has \\(\\chi(G)=2\\). Using this, we arrive at the following result.<\/p><div class=\"result\"><span class=\"result-word\">Theorem:<\/span> A graph \\(G\\) is bipartite if and only if \\(\\chi(G)\\leq2\\).<br><br><p>This can be easily established by observing that any graph with \\(\\chi(G)\\leq2\\) is \\(2\\mbox{-}\\)colorable, and hence bipartite. The converse, has already been established earlier.<\/p><\/div><p><b><a href=\"javascript:setGraph(2);\">Star Graph<\/a>:<\/b> A star graph of order \\(n+1\\), denoted by \\(S_{n+1}\\), is the complete bipartite graph \\(K_{1,n}\\), where \\(n\\geq0\\). So, it has same chromatic number as a bipartite graph.<\/p><p><b><a href=\"javascript:setGraph(3);\">Cycle graph<\/a>:<\/b> A cycle graph of order \\(n\\) is denoted by \\(C_n\\). A cycle of odd order has \\(\\chi(C_{2n+1})=3\\), and that of even order has \\(\\chi(C_{2n})=2\\). So, a cycle of even order is also bipartite.<\/p><p><b><a href=\"javascript:setGraph(5);\">Wheel graph<\/a>:<\/b> A wheel graph of order \\(n+1\\) is obtained from \\(C_n\\) by connecting all its vertices to a new vertex (called <em>hub<\/em>). Wheel graph of order \\(n\\) is denoted by \\(W_n\\). A wheel of odd order has \\(\\chi(W_{2n+1})=4\\), and that of even order has \\(\\chi(W_{2n})=3\\).<\/p><p><b><a href=\"javascript:setGraph(7);\">Complete Graph<\/a>:<\/b> Since each vertex is connected to every other vertex, we have \\(\\chi(K_n)=n\\).<\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Next<\/button>",

		"svg-output": "<div id=\"output-text\"><\/div><div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a class=\"prob-current\">1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><li><a>6<\/a><\/li><li><a>7<\/a><\/li><li><a>8<\/a><\/li><\/ul> <\/div>",

		"prev":		"?k-colorable",
		"next":		"?trees",
		"script":	"app.js",
		"star":		"y",
		"style":	"app.css"
	},

	"trees": {

		"content-title": "Trees",

		"theory-content":		"<p>It's time to learn about trees. Trees are special type of graphs which have immense application as a data structure in computational sciences.<\/p><p>But first, we talk about forests.<\/p><p>A <b>forest<\/b> is an acyclic graph, that is a graph without any cycles. It can be a single connected graph or have multiple disconnected components. When its a single connected graph, we call it a tree.<\/p><p>So, a <b>tree<\/b> is a connected acyclic graph. And a forest is just a collection of one or more trees.<\/p><p>Play around to see what is a tree and what is not. And try to observe the following properties as you draw things.<\/p><div class=\"result\"><span class=\"result-word\">Theorem:<\/span> A connected graph is a tree iff its order is one more than its size. In mathematical notation, we can write this as \\[|V|=|E|+1\\]<p>Note that statement is biconditional. So it also says that a connected graph satisfying the above equation is a tree.<\/p><\/div><div class=\"result\"><span class=\"result-word\">Property:<\/span> For a tree with more than one vertices, there is a <b>unique path<\/b> between any two of its vertices.<\/div><div class=\"result\"><span class=\"result-word\">Property:<\/span> A tree is <b>minimally connected<\/b>, which means that removal of any arbitrary edge from it will convert it into a disconnected graph.<\/div>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul><li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex\/edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All<\/button>",

		"svg-output": "",

		"prev":		"?chromatic-number",
		"next":		"?rooted-trees",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"rooted-trees": {

		"content-title": "Rooted Trees",

		"theory-content":		"<p>A <b>rooted tree<\/b> is a tree with a special vertex labelled as the \"root\" the of tree.<\/p><p>The root serves as a point of reference for other vertices in the tree. In diagrams, we usually keep the root at the top and list other vertices below it.<\/p><p>This notion is particularly useful in computer science for working with tree-based data structures.<\/p><p>In the figure, the root vertex is shown with a black border.<\/p><p>Below are some useful terms associated with rooted trees.<\/p><p><b>Branch<\/b> is just another name given to edges of the tree.<\/p><p><b>Depth of a vertex<\/b> is the number of branches in the path from root to the vertex. So depth of the root itself is zero.<\/p><p><b>Level of a vertex<\/b> is number of vertex in the path from root to the vertex. This is just one more than the depth of the vertex. Level of root is 1.<\/p><p><b>Child of a vertex \\(v_1\\)<\/b> is any vertex \\(v_2\\) connected to it such that \\(d(v_2)=d(v_1)+1\\), where \\(d(v)\\) denotes depth of vertex \\(v\\). \\(v_1\\) is called <b>parent<\/b> of \\(v_2\\). Usually, in diagrams, we keep the parent vertex above its child vertices.<\/p><div class=\"note\"><span class=\"note-word\">Note:<\/span> There can be multiple childs of a vertex, but parent of a vertex is unique. Root is the only vertex in a tree without any parent.<\/div><p>A <b>leaf<\/b> is a vertex without any child.<\/p><p><b>Height of tree<\/b> is the maximum value of depth for any vertex in the tree.<\/p><p>Play around to get yourself familiar with these terms. By the way, did you notice something about the colors?<\/p><div class=\"result\"><p><span class=\"result-word\">Theorem:<\/span> All tree graphs are bipartite.<\/p><p>This can be easily seen by coloring all the vertices at even depth in a color, say pink, and coloring the vertices at odd depth in another color, say cyan. So, any tree is 2-colorable.<\/p><\/div>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul><li>To add a child to a vertex <b>left click<\/b> on it.<\/li><li>To delete a non-root vertex and all its descendents <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see details of vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear Graph<\/button>",

		"svg-output": "",

		"prev":		"?trees",
		"next":		"?spanning-tree",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"spanning-tree": {

		"content-title": "Spanning Tree of a Graph",

		"theory-content":		"<p><b>Spanning tree<\/b> of a graph is a subgraph of it which forms a tree and contains (or spans) all the vertices of the graph.<\/p><p>So if the given graph \\(G\\) has \\(n\\) vertices, we're looking for a subgraph of \\(G\\) which<\/p><ul> <li>has \\(n\\) vertices<\/li><li>has \\(n-1\\) edges<\/li><li>is connected<\/li><\/ul> <div class=\"note\"> <span class=\"note-word\">Note:<\/span> The graph itself must be connected in order to obtain its spanning tree. <\/div><p>So if the graph is connected, we just need to delete some of its edges so that there is no cycle and it remains connected.<\/p><p>In these excercises, your aim is to reduce the number of edges to \\(n-1\\) while keeping the graph connected.<\/p><p>On solving the problems, you will realize that spanning tree of a graph isn't unique.<\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul><li>To delete an edge <b>right click<\/b> on it.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button><button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Next<\/button>",

		"svg-output": "<div id=\"output-text\"><\/div><div class=\"text-center\"><ul class=\"pagination\" id=\"prob-list\"><li><a>1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><\/ul><\/div>",

		"prev":		"?rooted-trees",
		"next":		"",
		"script":	"app.js",
		"star":		"y",
		"style":	"app.css"
	}

};
