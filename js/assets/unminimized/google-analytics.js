if (window.location.origin == 'http://html.berserk.nikadevs.com' || window.location.origin == 'https://html.berserk.nikadevs.com') {

  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("async","true")
  fileref.setAttribute("src", 'https://www.googletagmanager.com/gtag/js?id=UA-60165576-10')
  document.getElementsByTagName("head")[0].appendChild(fileref)

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-60165576-10');
}