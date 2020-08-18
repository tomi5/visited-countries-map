export const fillWithColor = (country: string, color: string) => {
  const pathSVG: NodeListOf<SVGPathElement> = document.querySelectorAll("path");
  country &&
    [...pathSVG].some(
      (el: SVGElement) => el.dataset.id === country && (el.style.fill = color)
    );
};
