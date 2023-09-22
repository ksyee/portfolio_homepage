particlesJS('main-banner', {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 3,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onHover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 3,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
}); // particlesJS config

window.onload = () => {
  // 메인배너 설정
  const windowHeight = window.innerHeight;
  const header = document.querySelector('#header');
  const headerHeight = header.offsetHeight;
  const mainBanner = document.querySelector('#main-banner');
  const mainBannerText = document.querySelector('#main-banner-text');
  const mainBannerTextWidth = mainBannerText.offsetWidth;

  mainBanner.style.height = `${windowHeight - headerHeight}px`; // 메인배너 높이 설정
  mainBannerText.style.transform = `translateX(-${mainBannerTextWidth / 2}px)`; // 메인배너 텍스트 가운데 정렬

  // scroll down 버튼 설정
  const scrollDownBtn = document.querySelector('#scroll-down-btn');
  const scrollDownBtnWidth = scrollDownBtn.offsetWidth;
  console.log(scrollDownBtnWidth);

  scrollDownBtn.style.transform = `translateX(-${scrollDownBtnWidth / 2}px)`; // scroll down 버튼 위치 설정
};
