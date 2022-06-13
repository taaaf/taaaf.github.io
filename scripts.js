document.addEventListener('DOMContentLoaded', function() {


  window.addEventListener('dfMessengerLoaded', function(event) {
    console.log("ok");
    $r1 = document.querySelector("df-messenger");
    $r2 = $r1.shadowRoot.querySelector("df-messenger-chat");
    $r3 = $r2.shadowRoot.querySelector("df-messenger-user-input");

    var sheet = new CSSStyleSheet;
    sheet.replaceSync(`div.chat-wrapper[opened="true"] { height: 500px }`);
    //per renderlo che si adatti al dispositivo avevo fatto:
    // var h = innerHeight * 0.8
    //sheet.replaceSync('div.chat-wrapper[opened="true"] { height: 'h'px }'');
    //ma non funzionava, quindi ho lasciato 500px

    $r2.shadowRoot.adoptedStyleSheets = [sheet];

    var khelp_button = document.getElementById("#widgetIcon");

    jQuery("#activateKhelp").click(function() {
      console.log("dentro " + khelp_button);
      window.alert("Dovrebbe aprire il chatbot ma non funziona :(  clicca direttamente sull'icona");
      //mi dà valore nullo anche se il bottone ha id widgetIcon. Non so come risolvere.
      jQuery("#widgetIcon").trigger("click");
      return false;
    });

      loadDeferredIframe(); //richiama la funzione che carica il prototipo di figma dopo aver caricato il chatbot. In questo modo crea meno problemi.

  });

      function loadDeferredIframe() {
          var iframe = document.getElementById("figma");
          iframe.src = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fm7kQxDXmliE4MoIeYbybq1%2FREVISIONi-IxD%3Fpage-id%3D1015%253A1710%26node-id%3D2674%253A4474%26viewport%3D-5422%252C-2751%252C0.39%26scaling%3Dscale-down-width%26starting-point-node-id%3D2674%253A4474%26hide-ui=1" ;
          var iframe2 = document.getElementById("figma2");
          iframe2.src = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fm7kQxDXmliE4MoIeYbybq1%2FREVISIONi-IxD%3Fpage-id%3D1015%253A1710%26node-id%3D2674%253A4474%26viewport%3D-5422%252C-2751%252C0.39%26scaling%3Dscale-down-width%26starting-point-node-id%3D2674%253A4474%26hide-ui=1";
      };



//calcolo altezza nella pagina per cambiare il colore della navbar

  var heightDiv1 = 0;
  var heightDiv2 = 0;

  if (window.innerHeight > window.innerWidth) {
    heightDiv1 = document.getElementById('div1').clientHeight;

  } else {
    heightDiv1 = document.getElementById('div1').offsetHeight;

  }

  if (window.innerHeight > window.innerWidth) {
    heightDiv2 = document.getElementById('div2').clientHeight + heightDiv1;

  } else {
    heightDiv2 = document.getElementById('div2').offsetHeight + heightDiv1;

  }




  $(function() {
    $(document).scroll(function() {
      var $nav = $(".bg-nav");
      $nav.toggleClass('scrolled', $(this).scrollTop() > heightDiv1);
      var $navGray = $(".bg-nav.scrolled");
      $navGray.toggleClass('dos', $(this).scrollTop() > heightDiv2);
      var $support = $(".supportaci");
      $support.toggleClass('scrolled', $(this).scrollTop() > heightDiv1);
      var $shadow = $(".shadow-support");
      $support.toggleClass('scrolled', $(this).scrollTop() > heightDiv1);
      //var $khelp = $(".text-khelp");
      //$khelp.toggleClass('scrolled', $(this).scrollTop() > 45);
    });
  });


//permette lo scroll anche da mouse premendo il tasto sinistro

  var ele = document.getElementById('container1');

  document.getElementById("container1").addEventListener("mouseenter", function() {
    ele = document.getElementById('container1')
    ele.removeEventListener('mousedown', mouseDownHandler);
    ele.addEventListener('mousedown', mouseDownHandler);

  })

  document.getElementById("container3").addEventListener("mouseenter", function() {
    ele = document.getElementById('container3')
    ele.removeEventListener('mousedown', mouseDownHandler);
    ele.addEventListener('mousedown', mouseDownHandler);

  })



  let pos = {
    top: 0,
    left: 0,
    x: 0,
    y: 0
  };

  const mouseDownHandler = function(e) {
    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';

    console.log(ele);

    pos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = function(e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function() {
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };



  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  // To check the scroll position on page load
  reveal();


  function reveal2() {
    var reveals2 = document.querySelectorAll(".reveal2");
    for (var i = 0; i < reveals2.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals2[i].getBoundingClientRect().top;
      var elementVisible = 0;
      if (elementTop < windowHeight - elementVisible) {
        reveals2[i].classList.add("active2");
      } else {
        reveals2[i].classList.remove("active2");
      }
    }
  }
  window.addEventListener("scroll", reveal2);

  // To check the scroll position on page load
  reveal2();
});
