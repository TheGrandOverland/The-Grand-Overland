document.addEventListener('DOMContentLoaded', () => {
  dothis()
  UnID.forEach(update)
}, !1)

function dothis() {
  // Jeeps in Field Image
  firebase.database().ref('/Images/Main Page/FirstImage').on('value', (a) => {
    var b = a.val()
    document.getElementById('FirstImage').style = b
  }),
    // Background Scrolling Image
    firebase.database().ref('/Images/Main Page/BackgroundScroll').on('value', (a) => {
      var b = a.val()
      document.getElementById('Services').style = b
    })
}

// A is the item in UnID, and b is the index of it
function update(x, i) {
  var elem = document.getElementById(x)
  // function is ran each time the value of the item updates I believe
  firebase.database().ref('/Text Block/' + x).on('value', (c) => {
    var d = c.val()
    elem.innerHTML = d
    console.log(`FB ${x} Updated`)
    document.body.style.display = 'initial'

    // Loop to handle disabling buttons
    for (var i = 1; i <= BUTTON_NUM; i++) {
      var cur = 'Button ' + i
      if ((x == cur) && (d == 'none')) {
        elem.style.display = 'none'
      }
    }
  })
}

// Unique ID for Firebase variable integration
const UnID = [
  'About Main',
  'Main Quote',
  'Button 1',
  'Button 1 Link',
  'Button 2',
  'Button 2 Link',
  'Button 3',
  'Button 3 Link',
  'Button 4',
  'Button 4 Link',
  'Button 5',
  'Button 5 Link',
  'Button 6',
  'Button 6 Link',
  "ResReq Link"
]
