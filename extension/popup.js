console.log('halo')
chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
      console.log('iohhgh')

      var url = tabs[0].url

      var video_id = url.match('v=(.*?)(?=&)')[0].substring(2)
      var thumbnail_url = `https://i.ytimg.com/vi/${video_id}/maxresdefault.jpg`

      var img = document.getElementById('image')
      img.src = thumbnail_url
      img.addEventListener('click', () => {
            chrome.tabs.create({ url: thumbnail_url })
      })

      console.log(thumbnail_url)
})