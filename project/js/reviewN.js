
// 삽입하고 싶은 요소를 참조
const con = document.querySelector('.containerR');
for (let i = 0; i < 20; i++) {
    // Image 객체 생성
    const imgs = new Image();
    // src 속성에 파일 주소 지정
    imgs.src = `img/poster${i+1}.jpg`;
    imgs.addEventListener('click', () => window.location.href = `http://127.0.0.1:5500/project/review${i+1}.html`)
    
    // 요소에 삽입
    con.appendChild(imgs);
}

