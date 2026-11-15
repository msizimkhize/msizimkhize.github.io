from datetime import datetime

# Updated to use your actual GitHub Pages domain
domain = "https://msizimkhize.github.io"

# Key: local file, Value: clean URL route slug
pages = {
    "index.html": ""           # Renders as: https://msizimkhize.github.io/
    #"projects.html": "projects", 
    #"contact.html": "contact"     
}

xml_content = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
]

for filename, route in pages.items():
    loc = f"{domain}/{route}" if route else f"{domain}/"
    xml_content.extend([
        "  <url>",
        f"    <loc>{loc}</loc>",
        f"    <lastmod>{datetime.today().strftime('%Y-%m-%d')}</lastmod>",
        "  </url>"
    ])

xml_content.append('</urlset>')

with open("sitemap.xml", "w", encoding="utf-8") as f:
    f.write("\n".join(xml_content))

print("Sitemap generated successfully!")
