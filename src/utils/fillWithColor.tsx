const defaultColor = "rgba(158,158,158,0.63)";

export const fillWithColor = (countryCode: string, color = defaultColor) => {
  const pathSVG: NodeListOf<SVGPathElement> = document.querySelectorAll("path");
  countryCode &&
    [...pathSVG].some(
      (el: SVGElement) =>
        el.dataset.id === countryCode && (el.style.fill = color)
    );
};
