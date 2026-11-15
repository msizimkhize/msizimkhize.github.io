from datetime import datetime

domain = "https://msizimkhize.github.io"

# Key: local file, Value: clean URL route slug
pages = {
    "index.html": "",           # Renders as: https://yourdomain.com/
    #"projects.html": "projects",  # Renders as: https://yourdomain.com/projects
    #"contact.html": "contact"     # Renders as: https://yourdomain.c
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
