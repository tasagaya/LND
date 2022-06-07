<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns="http://www.w3.org/1999/xhtml">
<xsl:output method="html"/>
	<xsl:template match="/">
		<html>
		  <body>
			 <xsl:apply-templates select="ies/ciclos/ciclo/nombre"/>
		  </body>
		</html>
	</xsl:template><!-- Plantilla nombre -->
	<xsl:template match="/ies/ciclos/ciclo/nombre">
		<h2><xsl:value-of select="."/></h2><hr></hr>
	</xsl:template>
</xsl:stylesheet>

