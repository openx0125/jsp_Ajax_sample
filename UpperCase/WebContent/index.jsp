<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="css/styles.css">
<title>Echo Test</title>
<script type="text/javascript" src="js/lib.js">
	
</script>
</head>
<body>
	<h1>Echo Test</h1>
	<c:if test="${requestScope.error != null}">
		<!-- lab: 改用 CSS -->
		<span class="highlight">${error}</span>
	</c:if>

	<!-- lab: 在此建立基本的表單 -->
	<form name="form1" action="UpperEcho" method="get">
		Text: <input type="text" name="text"><br>
		<br> <input type="submit">
	</form>
	<br>
	<div id="console"></div>
</body>
</html>
