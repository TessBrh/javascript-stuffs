<!DOCTYPE html>
<html>
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
</html>