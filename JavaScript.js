<!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>
<h4>This is sample page</h4>

<p id="demo">A Paragraph.</p>
<p>sample test</p>
<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html> 
