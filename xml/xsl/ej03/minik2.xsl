<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
			xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
			xmlns="http://www.w3.org/1999/xhtml">
<xsl:output method="html"/>
	<xsl:template match="/">
		<html>
			<head>
				<link rel="styleSheet" href="miestilo.css"/>
			</head>
			<body>
				<h1><xsl:value-of select="ies/@nombre"/></h1>
				<div>
					<ol>
						<xsl:apply-templates select="//ciclos"/>
					</ol>
					<table border="1">
						<tr>
							<th>Nombre</th>
							<th>Grado</th>
							<th>Año</th>
						</tr>
						<xsl:apply-templates select="ies/ciclos/ciclo"/>
					</table>
				</div>				
			</body>
		</html>
	</xsl:template>
	
	<xsl:template match="//ciclos">
		<xsl:for-each select="//ciclo">
			<xsl:sort select="//nombre"/>
			   <li>
					<xsl:value-of select="nombre"/>
					(<xsl:value-of select="grado"/>)
			   </li>
		</xsl:for-each>
	</xsl:template>	
	<xsl:template match="ies/ciclos/ciclo">
		<tr>
			<td><xsl:apply-templates select="nombre"/></td>
			<td><xsl:apply-templates select="grado"/></td>
			<td><xsl:apply-templates select="decretoTitulo/@año"/></td>
		</tr>
	</xsl:template>
</xsl:stylesheet>

