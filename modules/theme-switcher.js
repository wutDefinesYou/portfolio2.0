export default class ThemeSwitcher {
  html = document.querySelector('html')
  themeSwitchBtn = document.querySelector('.theme-switch')
  currentTheme = this.html.getAttribute('data-theme') ?? this.getSystemTheme()
  moonSvg = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg fill="#f1f2f3" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>moon</title><path d="M10.895 7.574c0 7.55 5.179 13.67 11.567 13.67 1.588 0 3.101-0.38 4.479-1.063-1.695 4.46-5.996 7.636-11.051 7.636-6.533 0-11.83-5.297-11.83-11.83 0-4.82 2.888-8.959 7.023-10.803-0.116 0.778-0.188 1.573-0.188 2.39z"></path></svg>`
  sunSvg = `<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="--darkreader-inline-stroke: #e8e6e3;" data-darkreader-inline-stroke=""></path></g></svg>`

  init() {
    this.generateSvg()
    this.onThemeSwitch()
  }

  generateSvg() {
    this.themeSwitchBtn.innerHTML =
      this.currentTheme === 'dark' ? this.moonSvg : this.sunSvg
  }

  getSystemTheme() {
    const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)')
    return systemSettingDark.matches ? 'dark' : 'light'
  }

  onThemeSwitch() {
    this.themeSwitchBtn.addEventListener('click', () => {
      this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark'
      this.generateSvg()
      this.html.setAttribute('data-theme', this.currentTheme)
    })
  }
}
