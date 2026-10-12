"""Extract original vector paths from the supplied A1 STRATE PDF.

Requires PyMuPDF for this one-off asset workflow, never for the application build.
No emblem or letter is reconstructed, stretched or substituted with a font.
"""

from copy import deepcopy
from pathlib import Path
import xml.etree.ElementTree as ET
import fitz

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/brand"
OUT.mkdir(parents=True, exist_ok=True)
PDF = fitz.open(ROOT / "docs/brand/A1-STRATE-reference.pdf")
NS = "http://www.w3.org/2000/svg"
ET.register_namespace("", NS)


def extract(page_number, indices):
    page = PDF[page_number - 1]
    paths = [node for node in ET.fromstring(page.get_svg_image(text_as_path=True)) if node.tag == f"{{{NS}}}path"]
    drawings = page.get_drawings()
    assert len(paths) == len(drawings)
    bounds = fitz.Rect(drawings[indices[0]]["rect"])
    for index in indices:
        bounds |= drawings[index]["rect"]
    return [deepcopy(paths[index]) for index in indices], bounds


def save(name, paths, bounds, fill):
    root = ET.Element(f"{{{NS}}}svg", {
        "viewBox": f"{bounds.x0} {bounds.y0} {bounds.width} {bounds.height}",
        "fill": fill,
    })
    ET.SubElement(root, f"{{{NS}}}title").text = "SABAN CORP — A1 STRATE"
    for source in paths:
        node = deepcopy(source)
        node.attrib.pop("fill", None)
        root.append(node)
    ET.ElementTree(root).write(OUT / name, encoding="utf-8", xml_declaration=True)


horizontal, horizontal_bounds = extract(5, list(range(2, 12)))
signature, signature_bounds = extract(1, list(range(2, 12)))
emblem, emblem_bounds = extract(5, [2])
for variant, fill in [("light", "#ffffff"), ("dark", "#0b0b0c")]:
    save(f"logo-horizontal-{variant}.svg", horizontal, horizontal_bounds, fill)
    save(f"logo-signature-{variant}.svg", signature, signature_bounds, fill)
    save(f"emblem-{variant}.svg", emblem, emblem_bounds, fill)

favicon = ET.Element(f"{{{NS}}}svg", {"viewBox": "0 0 64 64"})
ET.SubElement(favicon, f"{{{NS}}}rect", {"width": "64", "height": "64", "fill": "#0b0b0c"})
scale = 46 / max(emblem_bounds.width, emblem_bounds.height)
cx = (emblem_bounds.x0 + emblem_bounds.x1) / 2
cy = (emblem_bounds.y0 + emblem_bounds.y1) / 2
group = ET.SubElement(favicon, f"{{{NS}}}g", {"fill": "#fff", "transform": f"translate(32 32) scale({scale}) translate({-cx} {-cy})"})
group.extend(deepcopy(emblem))
ET.ElementTree(favicon).write(OUT / "favicon.svg", encoding="utf-8", xml_declaration=True)
