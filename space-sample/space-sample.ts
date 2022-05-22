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

document.querySelectorAll(".example td").forEach(td => {
  const padding = 6;
  function drawPath(x1: number, y1: number, x2: number, y2: number) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svg.appendChild(path);
    path.setAttribute("d", `M ${x1},${y1 - padding * 4} L ${x1}, ${y1 - padding} ${x2},${y2 + padding} ${x2},${y2 + padding * 4}`);
    path.setAttribute("stroke", "#aaaaaa");
    path.setAttribute("stroke-width", "1.5px");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("fill", "none");
  }

  const rows = td.querySelectorAll("div");
  if (rows.length != 2) {
    throw new Error("wtf");
  }
  for (const [n, top, bottom] of zip(count(), rows[0].querySelectorAll("span"), rows[1].querySelectorAll("span"))) {
    const topRect = top.getClientRects()[0];
    const bottomRect = bottom.getClientRects()[0];
    drawPath(topRect.right, topRect.bottom, bottomRect.right, bottomRect.top);
    if (n == 0) {
      drawPath(topRect.left, topRect.bottom, bottomRect.left, bottomRect.top);
    }
  }
})