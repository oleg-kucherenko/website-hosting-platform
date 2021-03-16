function renderContent(content, t) {
  // Back previous link color to default
  const links = document.querySelectorAll('.link')
  for (let i = 0; i < links.length; i++) {
    if (links[i].classList.contains('text-primary')) {
      links[i].classList.remove('text-primary')
    }
  }

  // Change a color of the pressed link to active
  t.classList.add('text-primary')

  // Render new content
  const docsContent = document.querySelector('.docs-content')
  docsContent.innerHTML = content
}

export { renderContent }