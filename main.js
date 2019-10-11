$(btn).on('click', function () {
  $(pop).show()
  setTimeout(function () {
    $(document).one('click', function () {
      $(pop).hide()
    })
  }, 0)
})

$(wrap).on('click', function (e) {
  e.stopPropagation()
})

/*
$(btn).on('click', function () {
  $(pop).show()
  $(document).one('click', function () {
    $(pop).hide()
  })
})
$(wrap).on('click', function (e) {
  e.stopPropagation()
})
  ***************/