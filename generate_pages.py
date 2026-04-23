import os
import re

html_dir = '/home/bat/Desktop/mh/stitch_html'
out_dir = '/home/bat/Desktop/mh/src/app'

pages = {
    'dashboard.html': '',
    'product.html': 'product',
    'queue.html': 'queue',
    'users.html': 'users',
    'machine.html': 'machine'
}

for html_file, route in pages.items():
    html_path = os.path.join(html_dir, html_file)
    if not os.path.exists(html_path):
        continue
    
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'<body[^>]*>(.*?)</body>', content, re.IGNORECASE | re.DOTALL)
    if not match:
        print(f"Could not find body in {html_file}")
        continue
    
    body_html = match.group(1).strip()
    
    body_html = body_html.replace('href="#"', 'href="/"', 1)
    body_html = body_html.replace('href="#"', 'href="/product"', 1)
    body_html = body_html.replace('href="#"', 'href="/queue"', 1)
    body_html = body_html.replace('href="#"', 'href="/machine"', 1)
    body_html = body_html.replace('href="#"', 'href="/users"', 1)
    
    # Escape backticks and interpolation
    body_html = body_html.replace('`', '\\`').replace('$', '\\$')
    
    route_dir = os.path.join(out_dir, route)
    os.makedirs(route_dir, exist_ok=True)
    
    page_tsx = f"""
export default function Page() {{
  return (
    <div dangerouslySetInnerHTML={{{{ __html: `{body_html}` }}}} />
  );
}}
"""
    
    with open(os.path.join(route_dir, 'page.tsx'), 'w', encoding='utf-8') as f:
        f.write(page_tsx)
        
print("Successfully generated React pages.")
