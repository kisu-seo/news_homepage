/**
 * ==================================================================================
 * News Homepage - Mobile Menu Toggle Script
 * ==================================================================================
 * @description  모바일/태블릿 환경에서 햄버거 메뉴를 열고 닫는 기능을 제공합니다.
 *               IIFE 패턴을 사용하여 전역 스코프 오염을 방지하며,
 *               ESC 키 및 화면 크기 변경에도 대응합니다.
 * 
 * @dependencies - index.html: #menuBtn, #closeBtn, #mainNav, #overlay 요소 필요
 *               - styles.css: .active 클래스 스타일 정의 필요
 * 
 * @note         - 'use strict' 모드로 실행
 *               - 모든 변수는 IIFE 스코프 내에서 격리됨
 * ==================================================================================
 */
(function () {
    'use strict';

    /* ==========================================
       STEP 1: 상수 정의 (Constants Definition)
       ========================================== */

    /**
     * DOM 선택자 (Selectors)
     * HTML의 ID를 기반으로 요소를 찾습니다.
     */
    const SELECTORS = {
        menuBtn: '#menuBtn',    // 햄버거 메뉴 버튼 (모바일 전용)
        closeBtn: '#closeBtn',  // 메뉴 닫기 버튼 (모바일 메뉴 내부)
        mainNav: '#mainNav',    // 메인 네비게이션 컨테이너
        overlay: '#overlay'     // 배경 오버레이 (반투명 검은색)
    };

    /**
     * CSS 클래스명 (Class Names)
     * 메뉴 상태를 제어하는 클래스입니다.
     */
    const CLASS_NAMES = {
        active: 'active'        // 메뉴 열림 상태를 나타내는 클래스
    };

    /**
     * ARIA 속성명 (ARIA Attributes)
     * 접근성을 위한 속성명입니다.
     */
    const ARIA_ATTRIBUTES = {
        expanded: 'aria-expanded'  // 메뉴 확장 상태 (true/false)
    };

    /**
     * 반응형 브레이크포인트 (Breakpoints)
     * 화면 크기 기준입니다 (px 단위).
     */
    const BREAKPOINTS = {
        tablet: 768  // 768px 이상에서는 데스크탑 네비게이션으로 전환
    };

    /**
     * 키보드 키 (Keyboard Keys)
     * 키보드 이벤트에서 사용하는 키 이름입니다.
     */
    const KEYBOARD_KEYS = {
        escape: 'Escape'  // ESC 키로 메뉴 닫기
    };

    /* ==========================================
       STEP 2: DOM 요소 선택 (DOM Element Selection)
       ========================================== */

    /**
     * 실제 DOM 요소를 미리 선택해서 저장합니다.
     * querySelector는 한 번만 실행되므로 성능이 향상됩니다.
     */
    const elements = {
        menuBtn: document.querySelector(SELECTORS.menuBtn),
        closeBtn: document.querySelector(SELECTORS.closeBtn),
        mainNav: document.querySelector(SELECTORS.mainNav),
        overlay: document.querySelector(SELECTORS.overlay)
    };

    /* ==========================================
       STEP 3: 메뉴 제어 핵심 함수 (Menu Control Functions)
       ========================================== */

    /**
     * 메뉴 열기 (Open Menu)
     * 
     * @description 네비게이션 메뉴를 슬라이드로 열고, 배경 오버레이를 표시합니다.
     *              배경 스크롤을 방지하여 UX를 개선합니다.
     * 
     * @returns {void}
     * 
     * @example
     * // 햄버거 메뉴 버튼 클릭 시 자동 실행
     * openMenu();
     */
    function openMenu() {
        // STEP 3-1: 메뉴와 오버레이에 'active' 클래스 추가
        elements.mainNav.classList.add(CLASS_NAMES.active);
        elements.overlay.classList.add(CLASS_NAMES.active);
        elements.closeBtn.classList.add(CLASS_NAMES.active);

        // STEP 3-2: 접근성 속성 업데이트 (스크린 리더 지원)
        elements.menuBtn.setAttribute(ARIA_ATTRIBUTES.expanded, 'true');

        // STEP 3-3: 배경 스크롤 방지 (모바일에서 메뉴 열렸을 때)
        document.body.style.overflow = 'hidden';
    }

    /**
     * 메뉴 닫기 (Close Menu)
     * 
     * @description 네비게이션 메뉴를 닫고, 배경 오버레이를 숨깁니다.
     *              배경 스크롤을 복원하여 정상 상태로 돌아갑니다.
     * 
     * @returns {void}
     * 
     * @example
     * // 닫기 버튼 클릭 또는 ESC 키 입력 시 실행
     * closeMenu();
     */
    function closeMenu() {
        // STEP 3-1: 메뉴와 오버레이에서 'active' 클래스 제거
        elements.mainNav.classList.remove(CLASS_NAMES.active);
        elements.overlay.classList.remove(CLASS_NAMES.active);
        elements.closeBtn.classList.remove(CLASS_NAMES.active);

        // STEP 3-2: 접근성 속성 업데이트
        elements.menuBtn.setAttribute(ARIA_ATTRIBUTES.expanded, 'false');

        // STEP 3-3: 배경 스크롤 복원
        document.body.style.overflow = '';
    }

    /**
     * 메뉴 열림 상태 확인 (Check Menu Open State)
     * 
     * @description 현재 메뉴가 열려있는지 확인하는 헬퍼 함수입니다.
     * 
     * @returns {boolean} true: 메뉴 열림 | false: 메뉴 닫힘
     * 
     * @example
     * if (isMenuOpen()) {
     *   console.log('메뉴가 열려있습니다');
     * }
     */
    function isMenuOpen() {
        return elements.mainNav.classList.contains(CLASS_NAMES.active);
    }

    /* ==========================================
       STEP 4: 이벤트 핸들러 (Event Handlers)
       ========================================== */

    /**
     * 키보드 이벤트 핸들러 (Keyboard Event Handler)
     * 
     * @description ESC 키를 눌렀을 때 메뉴를 닫습니다.
     *              접근성과 UX를 향상시키는 기능입니다.
     * 
     * @param {KeyboardEvent} event - 키보드 이벤트 객체
     * @returns {void}
     */
    function handleKeydown(event) {
        // ESC 키가 눌렸고, 메뉴가 열려있는 경우에만 닫기
        if (event.key === KEYBOARD_KEYS.escape && isMenuOpen()) {
            closeMenu();
        }
    }

    /**
     * 화면 크기 변경 핸들러 (Window Resize Handler)
     * 
     * @description 화면이 태블릿 크기(768px) 이상으로 커지면 
     *              모바일 메뉴를 자동으로 닫습니다.
     *              데스크탑에서는 가로 네비게이션으로 전환되기 때문입니다.
     * 
     * @returns {void}
     */
    function handleResize() {
        // 화면 너비가 768px 이상이고, 메뉴가 열려있는 경우
        if (window.innerWidth >= BREAKPOINTS.tablet && isMenuOpen()) {
            closeMenu();
        }
    }

    /* ==========================================
       STEP 5: 이벤트 리스너 등록 (Event Listeners Registration)
       ========================================== */

    /**
     * 이벤트 리스너 초기화 (Initialize Event Listeners)
     * 
     * @description 모든 필요한 이벤트 리스너를 DOM 요소에 등록합니다.
     * 
     * @returns {void}
     */
    function initEventListeners() {
        // STEP 5-1: 메뉴 열기 버튼 (햄버거 아이콘)
        elements.menuBtn.addEventListener('click', openMenu);

        // STEP 5-2: 메뉴 닫기 버튼 (X 아이콘)
        elements.closeBtn.addEventListener('click', closeMenu);

        // STEP 5-3: 오버레이 클릭 시 메뉴 닫기
        elements.overlay.addEventListener('click', closeMenu);

        // STEP 5-4: ESC 키로 메뉴 닫기 (접근성)
        document.addEventListener('keydown', handleKeydown);

        // STEP 5-5: 화면 크기 변경 감지
        window.addEventListener('resize', handleResize);
    }

    /* ==========================================
       STEP 6: 초기화 함수 (Initialization)
       ========================================== */

    /**
     * 애플리케이션 초기화 (Initialize Application)
     * 
     * @description DOM 요소 존재 여부를 확인하고,
     *              모든 이벤트 리스너를 등록합니다.
     * 
     * @returns {void}
     */
    function init() {
        // STEP 6-1: 필수 DOM 요소 존재 여부 검증
        const requiredElements = Object.values(elements);
        const allElementsExist = requiredElements.every(element => element !== null);

        // STEP 6-2: 요소가 하나라도 없으면 에러 로그 출력 후 종료
        if (!allElementsExist) {
            console.error('[Mobile Menu] 필수 DOM 요소를 찾을 수 없습니다.');
            console.error('확인 필요:', SELECTORS);
            return;
        }

        // STEP 6-3: 이벤트 리스너 등록
        initEventListeners();

        // STEP 6-4: 초기화 성공 로그 (개발 환경용)
        console.log('[Mobile Menu] 초기화 완료 ✓');
    }

    /* ==========================================
       STEP 7: 실행 (Execution)
       ========================================== */

    /**
     * HTML 파일에서 defer 속성을 사용하므로,
     * DOM이 완전히 로드된 후 이 스크립트가 실행됩니다.
     * 따라서 별도의 DOMContentLoaded 이벤트 리스너가 필요 없습니다.
     */
    init();

})();

/**
 * ==================================================================================
 * 실행 흐름 요약 (Execution Flow Summary)
 * ==================================================================================
 * 
 * 1. 페이지 로드 완료
 *    ↓
 * 2. IIFE 즉시 실행 → init() 호출
 *    ↓
 * 3. DOM 요소 존재 여부 검증
 *    ↓
 * 4. 이벤트 리스너 등록 (클릭, 키보드, 리사이즈)
 *    ↓
 * 5. 대기 상태 (사용자 인터랙션 대기)
 * 
 * [사용자 액션]
 * - 햄버거 메뉴 클릭 → openMenu() → 메뉴 슬라이드 인
 * - X 버튼 클릭 → closeMenu() → 메뉴 슬라이드 아웃
 * - 오버레이 클릭 → closeMenu() → 메뉴 닫기
 * - ESC 키 입력 → closeMenu() → 메뉴 닫기
 * - 화면 리사이즈 (≥768px) → closeMenu() → 데스크탑 모드 전환
 * 
 * ==================================================================================
 */
