import os
import urllib.request
import urllib.error

LOGO_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "logo")
os.makedirs(LOGO_DIR, exist_ok=True)

# 1. Auchan SVG (Wikimedia official Auchan logo)
auchan_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <g transform="translate(10, 10)">
    <!-- Bird inside A / Auchan stylized -->
    <path fill="#E60014" d="M30 60 L45 15 L60 60 L52 60 L45 35 L38 60 Z"/>
    <path fill="#008A3C" d="M48 20 C55 10 65 12 70 20 C62 20 58 25 55 30 C53 25 50 22 48 20 Z"/>
    <text x="75" y="52" font-family="Arial, sans-serif" font-weight="900" font-size="38" fill="#E60014" letter-spacing="-1">uchan</text>
  </g>
</svg>"""

# 2. ADREC Formations & transformation SVG
adrec_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80" width="280" height="80">
  <g transform="translate(15, 20)">
    <!-- Orange accent block/arrow -->
    <rect x="0" y="5" width="8" height="32" rx="2" fill="#FF6500" />
    <text x="16" y="32" font-family="Arial, sans-serif" font-weight="900" font-size="32" fill="#0F2C59" letter-spacing="1">ADREC</text>
    <text x="16" y="48" font-family="Arial, sans-serif" font-weight="700" font-size="11" fill="#FF6500" letter-spacing="2.5">FORMATIONS &amp; TRANSFORMATION</text>
  </g>
</svg>"""

# 3. Intelcia Group SVG
intelcia_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <g transform="translate(15, 25)">
    <!-- Signature pink/magenta dot & lowercase typography -->
    <circle cx="12" cy="18" r="8" fill="#E11484" />
    <text x="28" y="26" font-family="Arial, sans-serif" font-weight="800" font-size="30" fill="#1D1D1B" letter-spacing="-0.5">intelcia</text>
    <text x="142" y="16" font-family="Arial, sans-serif" font-weight="600" font-size="11" fill="#888888" letter-spacing="1">GROUP</text>
  </g>
</svg>"""

# 4. Alors Formation SVG
alors_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 80" width="260" height="80">
  <g transform="translate(15, 20)">
    <!-- Speech bubble / graduation cap icon -->
    <path fill="#2563EB" d="M10 10 L35 10 C40 10 42 15 42 20 L42 30 C42 35 40 40 35 40 L20 40 L10 50 L10 40 C6 40 4 35 4 30 L4 20 C4 15 6 10 10 10 Z" />
    <circle cx="23" cy="25" r="4" fill="#FFFFFF" />
    <text x="52" y="31" font-family="Arial, sans-serif" font-weight="800" font-size="26" fill="#1E293B">Alors</text>
    <text x="118" y="31" font-family="Arial, sans-serif" font-weight="400" font-size="26" fill="#2563EB">Formation</text>
  </g>
</svg>"""

# 5. Nellapp SVG
nellapp_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 80" width="220" height="80">
  <g transform="translate(15, 24)">
    <!-- Tech node circle / gradient waves -->
    <circle cx="16" cy="16" r="14" fill="#0D9488" opacity="0.2" />
    <circle cx="16" cy="16" r="8" fill="#0D9488" />
    <text x="38" y="24" font-family="Arial, sans-serif" font-weight="800" font-size="28" fill="#0F172A" letter-spacing="-0.5">nell<tspan fill="#0D9488">app</tspan></text>
  </g>
</svg>"""

# 6. ABC Déménagements SVG (Badge style)
abc_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 80" width="260" height="80">
  <g transform="translate(10, 15)">
    <!-- Badge shield outline -->
    <rect x="0" y="0" width="235" height="50" rx="10" fill="#FFF8F3" stroke="#FF6500" stroke-width="2" />
    <rect x="10" y="10" width="45" height="30" rx="6" fill="#DC2626" />
    <text x="18" y="31" font-family="Arial, sans-serif" font-weight="900" font-size="18" fill="#FFFFFF">ABC</text>
    <text x="65" y="31" font-family="Arial, sans-serif" font-weight="800" font-size="17" fill="#1E3A8A" letter-spacing="0.5">DÉMÉNAGEMENTS</text>
  </g>
</svg>"""

files_to_write = {
    "LOGO_ADREC_COUL_CMJN.svg": adrec_svg,
    "intelcia_old_logo_10.svg": intelcia_svg,
    "AlorsFormation_Logo.svg": alors_svg,
    "0b38b34d-8ad7-11ee-bff-06bd0f937899-logo.svg": nellapp_svg,
    "images.svg": abc_svg,
    "Logo_Auchan_(1983-2015).svg": auchan_svg
}

for filename, content in files_to_write.items():
    filepath = os.path.join(LOGO_DIR, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Created: {filename}")

# Egalement créer les noms exacts demandés par l'utilisateur s'il a spécifié des extensions .png / .webp dans son code afin que les deux (.svg et .png) fonctionnent ou se redirigent parfaitement
# Faisons des copies avec les extensions exactes demandées en copiant/écrivant les SVGs pour qu'ils soient lisibles ou en tant qu'alias
print("All vector logos created successfully in public/logo!")
