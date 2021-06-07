const piano = document.querySelectorAll('.piano > div')

piano.forEach(note => {
  const audio = new Audio(`./assets/${note.dataset.note}.mp3`)

  note.addEventListener('mousedown', e => {
    const classes = e.target.classList

    classes.add("pressed")
  })

  note.addEventListener('mouseup', e => {
    const classes = e.target.classList
    
    classes.remove("pressed")
  })

  note.addEventListener('click', e => {
    audio.play()
  })

})