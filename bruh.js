<!DOCTYPE html>
<html>
<head>
<title> BRUH </title>
<link rel="icon" type="image/x-icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdrNbSgrLg0WNF4R95GU7t4g_bGwmBr8z_Og&usqp=CAU">
<body style = "background-color: lightgreen";>
<style>
p {
	border: 2px solid white;
	border-radius: 12px;
	padding: 5px;
    background-color: white;
}
</style>

<h2 style = "border: 2px solid white; border-radius: 12px; padding: 5px; background-color: white";>Button clicker (real)</h2>
<button type="button"
onclick="document.getElementById('ClickCounter').innerHTML = IncreaseClicks()">
CLICK MEEEEE</button>

<p id="ClickCounter"></p>

<script>
    Clicks = 0
    function IncreaseClicks() {
        Clicks++
        return Clicks
    }
</script>
</body>
</head>
</html>