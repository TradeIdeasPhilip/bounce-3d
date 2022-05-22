import "./space-sample.css";


import { getById } from "../src/lib/client-misc";
import { zip, count } from "../src/lib/misc";

const svg = getById("svg", SVGSVGElement);

function divTest() {
  document.querySelectorAll("div").forEach(div => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svg.appendChild(path);
    const rect = div.getClientRects()[0];
    path.setAttribute("d", `M ${rect.x}, ${rect.y} l ${rect.width}, ${rect.height}`);
    path.setAttribute("stroke", "green");
    path.setAttribute("stroke-width", "3");
    path.setAttribute("stroke-linecap", "round");
  });
}

function drawLine(x1:number, y1: number, x2:number, y2:number) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  svg.appendChild(path);
  path.setAttribute("d", `M ${x1}, ${y1} L ${x2}, ${y2}`);
  path.setAttribute("stroke", "#808080");
  path.setAttribute("stroke-width", "2px");
  path.setAttribute("stroke-linecap", "round");
}

document.querySelectorAll(".example td").forEach(td => {
  const topPadding = 6;
  const bottomPadding = 6;
  const rows = td.querySelectorAll("div");
  if (rows.length != 2) {
    throw new Error("wtf");
  }
  for (const [n, top, bottom] of zip(count(), rows[0].querySelectorAll("span"), rows[1].querySelectorAll("span"))) {
    const topRect = top.getClientRects()[0];
    const bottomRect = bottom.getClientRects()[0];    
    drawLine(topRect.right, topRect.bottom - bottomPadding, bottomRect.right, bottomRect.top + topPadding);
    if (n == 0) {
      drawLine(topRect.left, topRect.bottom - bottomPadding, bottomRect.left, bottomRect.top + topPadding);
    }
  }
})