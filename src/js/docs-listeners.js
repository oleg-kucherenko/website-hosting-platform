import { renderContent } from './render-content.js'
import { introductionContent } from './js-content/introduction-content.js'
import { aboutContent } from './js-content/about-content.js'
import { installationContent } from './js-content/installation-content.js'
import { setupContent } from './js-content/setup-content.js'
import { cliContent } from './js-content/cli-content.js'
import { resourcesContent } from './js-content/resources-content.js'
import { upgradeContent } from './js-content/upgrade-content.js'

const links = document.querySelectorAll('.link')

const map = [
  introductionContent,
  aboutContent,
  installationContent,
  setupContent,
  cliContent,
  resourcesContent,
  upgradeContent
]

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    const t = this
    renderContent(map[i], t)
  })
}