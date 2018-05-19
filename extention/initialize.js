document.addEventListener('DOMContentLoaded', () => {
  // ref. https://github.com/Redisrupt/mermaid-diagrams/blob/master/extension/content.js
  const $ = (selector, ctx = document) => ctx.querySelectorAll(selector)
  const replaceChart = (elem, code) => {
    elem.insertAdjacentHTML('afterend', `<div class="mermaid">${code}</div>`)
    elem.style.display = 'none'
  }
  $('[lang="mermaid"]').forEach(elem => {
    const code = $('code', elem)[0].textContent
    replaceChart(elem, code)
  })
  $('.language-mermaid').forEach(elem => {
    const code = elem.textContent
    replaceChart(elem, code)
  })
})
