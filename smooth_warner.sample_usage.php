<!doctype html>
<!-- This is just a sample case -->
<html>
<head>
	<meta charset="utf-8" />
	<style type="text/css">
		section.upholsteries
		{
			display:none;
		}
	</style>

	<!-- From this repo -->
	<link rel="stylesheet" type="text/css" href="css/smooth_warner.css" />
	
	<!-- From https://fontawesome.com/ -->
	<link rel="stylesheet" type="text/css" href="css/fontawesome5.min.css" />

	<!-- From repo Assets -->
	<script src="js/assets.js">
	</script>

	<!-- From this repo -->
	<script src="js/smooth_warner.js">
	</script>

	<!-- From this repo, not need in production, just to show it now -->
	<script src="js/smooth_warner.sample_usage.js">
	</script>

</head>
<body>

	<section class="upholsteries">
		<?php include("upholstery.html"); /*The structure that should be reachable from smooth_warner.js*/ ?>
	</section>
</body>
</html>
