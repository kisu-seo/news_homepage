/**
 * 모바일 메뉴 토글 기능
 * 햄버거 메뉴 클릭 시 사이드 메뉴를 슬라이드로 열고 닫습니다.
 */

// DOM 요소들을 변수에 저장
const menuBtn = document.getElementById('menuBtn'); // 햄버거 메뉴 버튼
const closeBtn = document.getElementById('closeBtn'); // 메뉴 닫기 버튼
const mainNav = document.getElementById('mainNav'); // 메인 네비게이션
const overlay = document.getElementById('overlay'); // 배경 오버레이

/**
 * 메뉴 열기 함수
 * 네비게이션과 오버레이에 'active' 클래스를 추가하여 메뉴를 표시합니다.
 */
function openMenu() {
  mainNav.classList.add('active'); // 메뉴 슬라이드 인
  overlay.classList.add('active'); // 오버레이 표시
  closeBtn.classList.add('active'); // 닫기 버튼 표시
  menuBtn.setAttribute('aria-expanded', 'true'); // 접근성: 메뉴가 열렸음을 알림
  document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
}

/**
 * 메뉴 닫기 함수
 * 네비게이션과 오버레이에서 'active' 클래스를 제거하여 메뉴를 숨깁니다.
 */
function closeMenu() {
  mainNav.classList.remove('active'); // 메뉴 슬라이드 아웃
  overlay.classList.remove('active'); // 오버레이 숨김
  closeBtn.classList.remove('active'); // 닫기 버튼 숨김
  menuBtn.setAttribute('aria-expanded', 'false'); // 접근성: 메뉴가 닫혔음을 알림
  document.body.style.overflow = ''; // 배경 스크롤 복원
}

// 이벤트 리스너 등록
menuBtn.addEventListener('click', openMenu); // 햄버거 메뉴 클릭 시 메뉴 열기
closeBtn.addEventListener('click', closeMenu); // 닫기 버튼 클릭 시 메뉴 닫기
overlay.addEventListener('click', closeMenu); // 오버레이 클릭 시 메뉴 닫기

/**
 * ESC 키를 눌렀을 때 메뉴 닫기
 * 접근성 향상을 위한 키보드 이벤트 처리
 */
document.addEventListener('keydown', (event) => {
  // ESC 키가 눌렸고, 메뉴가 열려있는 경우
  if (event.key === 'Escape' && mainNav.classList.contains('active')) {
    closeMenu();
  }
});

/**
 * 화면 크기 변경 감지
 * 태블릿/데스크탑 크기에서 메뉴가 열려있으면 자동으로 닫습니다.
 */
window.addEventListener('resize', () => {
  // 화면 너비가 768px 이상이고 메뉴가 열려있는 경우
  if (window.innerWidth >= 768 && mainNav.classList.contains('active')) {
    closeMenu(); // 메뉴를 닫아서 데스크탑 네비게이션으로 전환
  }
});
