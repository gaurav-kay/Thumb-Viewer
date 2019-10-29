chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
      var url = tabs[0].url

      var video_id = getYouTubeVideoID(url)

      if (video_id !== null) {
            var thumbnail_url = `https://i.ytimg.com/vi/${video_id}/sddefault.jpg`

            var img = document.getElementById('image')
            img.src = thumbnail_url

            // consider removing this
            img.addEventListener('click', () => {
                  var hd_thumbnail_url = `https://i.ytimg.com/vi/${video_id}/maxresdefault.jpg`
                  chrome.tabs.create({ url: hd_thumbnail_url })
            })
      } else {
            var div = document.getElementById('alert')
            div.setAttribute('style', 'height: 100px; width: 200px; text-align: center;')

            div.innerHTML = "<h1>Go to a YouTube video to see it's thumbnail!</h1>"
      }
})

function getYouTubeVideoID(url) {
      url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : null;
}