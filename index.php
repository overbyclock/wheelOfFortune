<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="assets/css/style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<title>Wheel Of Fortune</title>
</head>

<body>
	<div id="myModal" class="modal">

		<!-- Modal content -->
		<div class="modal-content">
			<span class="close">&times;</span>
			<p>Correct: <span id="correct"></span></p>
			<p>Answer: <span id="answer"></span></p>
			<p>Validation: <span id="validation"></span></p>
		</div>

	</div>

	<div class="super-main">

		<div class="main-container">
			<div id="panel">
				<div id="participants">
					<div class="box-title">
						<img id=logo src="assets/img/wheel.jpg" alt="Logo Wheeel">
					</div>
					<div class="box-config">
						<div class="box-add">
							<!-- <p> Now I need, you give me the names of the participants</p> -->
							<div class="box-input">
								<input type="text" id="participants-input">
								<button id="participants-add">ADD</button>
							</div>
						</div>
						<div class="box-participants">
							<ul id="participants-list">
							</ul>
							<button id="play">Let's Play</button>
						</div>
					</div>
				</div>
			</div>

			<div class="hint">
				<div class="container-hints">
					<div>
						<h3>Hint: <span id="hint-text"> </span></h3>
					</div>
					<div>
						<h3>Author: <span id="author-text"></span></h3>
					</div>
					<div>
						<h3>Letters: <span id="numberOfLetters"></span></h3>
					</div>
				</div>

				<div class="play-participants-panel">
					<ul id="play-participants-list">

					</ul>




				</div>
				<div>
					<button id="show">SHOW</button>
				</div>

				<div class="vowels">
					<div class="help-letters" value="a">A<span class="small">[ei]</span></div>
					<div class="help-letters" value="e">E<span class="small">[i]</span></div>
					<div class="help-letters" value="i">I<span class="small">[ai]</span></div>
					<div class="help-letters" value="o">O<span class="small">[ou]</span></div>
					<div class="help-letters" value="u">U<span class="small">[iu]</span></div>
				</div>

			</div>

			<div class="hint">
				<div class="abc">
					<div class="consonants">
						<div class="help-letters" value="b">B<span class="small">[bi]</span></div>
						<div class="help-letters" value="c">C<span class="small">[ci]</span></div>
						<div class="help-letters" value="d">D<span class="small">[di]</span></div>
						<div class="help-letters" value="f">F<span class="small">[ef]</span></div>
						<div class="help-letters" value="g">G<span class="small">[yi]<span></div>
						<div class="help-letters" value="h">H<span class="small">[eich]</span></div>
						<div class="help-letters" value="j">J<span class="small">[jei]</span></div>
						<div class="help-letters" value="k">K<span class="small">[kei]</span></div>
						<div class="help-letters" value="m">M<span class="small">[em]</span></div>
						<div class="help-letters" value="n">N<span class="small">[en]</span></div>
						<div class="help-letters" value="l">L<span class="small">[el]</span></div>


						<div class="help-letters" value="p">P<span class="small">[pi]</span></div>
						<div class="help-letters" value="q">Q<span class="small">[kiu]</span></div>
						<div class="help-letters" value="r">R<span class="small">[ar]</span></div>
						<div class="help-letters" value="s">S<span class="small">[es]</span></div>
						<div class="help-letters" value="t">T<span class="small">[ti]</span></div>
						<div class="help-letters" value="v">V<span class="small">[vi]</span></div>
						<div class="help-letters" value="w">W<span class="small">[dabliu]</span></div>
						<div class="help-letters" value="x">X<span class="small">[ex]</span></div>
						<div class="help-letters" value="y">Y<span class="small">[uai]</span></div>
						<div class="help-letters" value="z">Z<span class="small">[set]</span></div>
					</div>

				</div>
			</div>
			<div class="container-input-definition">
				<textarea name="input-definition" id="input-definition" placeholder="Write your answer here...."></textarea>
				<button id="lucky">LUCKY!</button>
			</div>
		</div>
	</div>
	<div class="footer">OverBYclock Design 2022</div>

	<script src="assets/js/my.js"></script>

</body>

</html>