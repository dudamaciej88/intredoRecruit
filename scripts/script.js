const rotateBtn = document.getElementById('btnRotate');

const rotate = () => {
  const image = document.getElementById('mountainsImg');
  image.style.transform = 'rotate(180deg)';
};

rotateBtn.addEventListener('click', rotate);
