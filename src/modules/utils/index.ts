export const scrollToView = (
  id: string,
  scrollIntoViewOptions?: ScrollIntoViewOptions
) => {
  const domElement = document.getElementById(id);

  if (domElement) {
    domElement.scrollIntoView(scrollIntoViewOptions);
  }
};
