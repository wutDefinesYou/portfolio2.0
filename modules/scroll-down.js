export default class ScrollDown {
  downEmoji = document.querySelector('span:last-of-type')
  projectsSection = document.querySelector('section:last-of-type')

  init() {
    this.onClick()
  }

  onClick() {
    this.downEmoji.addEventListener('click', () => {
      this.projectsSection.scrollIntoView(true)
    })
  }
}
