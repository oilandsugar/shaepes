<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>shaepes</title>
  <meta name="description" content="a text-based game about shapes">
  <meta name="author" content="atelier oil and sugar">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
   <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="style.css">

  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>

<body>
	<div class="wrap">
		<header>
			<h1>
				shæpes
			</h1>
			<hr class="title-hr">
			<p class="desc">
				a text-based game about shapes
			</p>
		</header>
		<div class="content">
			<div id="output">
				where the game output will be
			</div>
			<div id="input">
				<form id="userinput" method="POST">
					<input type="text" id="datainput" placeholder="type something" autofocus>
					<label><em>press enter to send</em></label>
				</form>
			</div>
			<div class="canvas">
				<canvas id="canvas" width="150px" height="150px">No nice shapes for you, your browser does not support the canvas, go get a better one and come back.</canvas>
			</div>
		</div>
	</div>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>	
  <script src="script.js"></script>
</body>
</html>