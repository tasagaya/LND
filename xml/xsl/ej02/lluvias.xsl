<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns="http://www.w3.org/1999/xhtml">
<xsl:output method="html"/>

<xsl:template match="/precipitaciones">
	<html>
		<head> 
			<title>Listado de precipitaciones</title> 
		</head>
		<body>
			<h2>Registros de precipitaciones</h2>
			<ul>
				<xsl:apply-templates select="registro">
				</xsl:apply-templates>
			</ul>
		</body>
	</html>
</xsl:template>

	<xsl:template match="registro">
	<li>
		<b>
			<xsl:value-of select="lugar"/>
		</b>
		<xsl:text>:</xsl:text>
		<xsl:value-of select="fecha"/>
		<xsl:text>(</xsl:text>
		<xsl:value-of select="litros-m2"/>
		<xsl:text> l/m2)</xsl:text>
	</li>
	</xsl:template>
</xsl:stylesheet>
