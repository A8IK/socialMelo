<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          h1 { color: #333; }
          table { border-collapse: collapse; width: 100%; margin-top: 20px; }
          th { background: #D76D77; color: white; padding: 10px; text-align: left; }
          td { padding: 8px; border-bottom: 1px solid #ddd; }
          tr:hover { background: #f5f5f5; }
          a { color: #D76D77; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <p>This sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.</p>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
              <td><xsl:value-of select="sitemap:lastmod"/></td>
              <td><xsl:value-of select="sitemap:changefreq"/></td>
              <td><xsl:value-of select="sitemap:priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
