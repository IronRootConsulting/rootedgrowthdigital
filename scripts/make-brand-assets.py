"""Builds favicon, apple-touch-icon, OG image from the logo."""
import math
from PIL import Image, ImageDraw, ImageFont

def oklch(L, C, h):
    a, b = C * math.cos(math.radians(h)), C * math.sin(math.radians(h))
    l_ = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3
    m_ = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3
    s_ = (L - 0.0894841775 * a - 1.2914855480 * b) ** 3
    rgb = (4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
           -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
           -0.0041960863 * l_ - 0.7034186147 * m_ + 1.7076147010 * s_)
    def g(x):
        x = max(0, min(1, x))
        return round(255 * (12.92 * x if x <= 0.0031308 else 1.055 * x ** (1 / 2.4) - 0.055))
    return tuple(g(x) for x in rgb)

CREAM = oklch(0.98, 0.008, 90)
CREAM_WARM = oklch(0.95, 0.025, 85)
SAGE_LIGHT = oklch(0.85, 0.025, 130)
FOREST = oklch(0.31, 0.026, 150)
print("cream", CREAM, "cream-warm", CREAM_WARM)

logo = Image.open("src/assets/rgd-logo-option2.png").convert("RGBA")
mark = logo.crop((20, 20, 516, 580))

def icon(size, pad=0.1, radius=0.22):
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    bg = Image.new("RGBA", (size, size), CREAM + (255,))
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size - 1, size - 1), int(size * radius), fill=255)
    canvas.paste(bg, (0, 0), mask)
    inner = int(size * (1 - 2 * pad))
    m = mark.copy(); m.thumbnail((inner, inner), Image.LANCZOS)
    canvas.alpha_composite(m, ((size - m.width) // 2, (size - m.height) // 2))
    return canvas

icon(192).save("public/favicon.png", optimize=True)
icon(180, pad=0.1, radius=0).convert("RGB").save("public/apple-touch-icon.png")
icon(256).save("public/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

og = Image.new("RGBA", (1200, 630), CREAM_WARM + (255,))
lg = logo.copy(); lg.thumbnail((960, 400), Image.LANCZOS)
og.alpha_composite(lg, ((1200 - lg.width) // 2, (630 - lg.height) // 2))
og.convert("RGB").save("public/og-image.png", optimize=True)

