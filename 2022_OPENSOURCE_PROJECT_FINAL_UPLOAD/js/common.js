//런치리스트 배열생성
//배열복사

let lunchList = ["바비든든","뉴욕버거","이모네","알촌","도스마스","정직유부","은화수식당","포지타노","31.7","명가떡볶이","유메식당","유가네 닭갈비","밀플랜비","찌개찌개","성북동 경양식","한그릇","브라운 돈까스","마라미방","조가연 마라탕","써니샌드위치클럽","일미 닭갈비","디델리","한우궁","카바레 식당","이서 식당","소담골","투파인드피터","페퍼로니버튼","육앤샤","돼지우리",
    "기찬고기","포냐향","천사곱창","작렬곱창","앤의식탁","토마토 도시락","더빱집","청춘막회","청학 칡냉면","큰맘할매순대국","조박사 부대찌개","대학통닭","오븐에 빠진 닭","THE 치킨","미쳐버린 파닭","홀릭핫도그","탐나는 바지락 손칼국수","상황 삼계탕","밀숲","Vertex","BHC","타코선생의 라떼는 말이야","교반","유원치킨","참새방앗간","신전떡볶이","91콩삼", "고기짬"]
let firstLunchList = [];

lunchList.forEach(function(item) {
    firstLunchList.push(item);
});

//제어할 요소선택 후 변수에 담기
let displaySlot = document.querySelector(".menu_slot"); //menu slot
let elem = document.querySelector(".menu_print > h2"); //menu print


//reset check
let resetNum = 1;

//LunchIs 함수선언
function lunchIs() {
    //setTimeout 선언
    setTimeout(timeFunc, 900);

    function timeFunc() {
        //shuffle 메소드 선언
        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        //슬롯애니메이션 감추기
        displaySlot.style.display = "none";

        //shuffle 메소드를 사용하여 석은 배열에서 index[0]을 가져오기
        console.log(shuffle(lunchList));
        let lunckPick = shuffle(lunchList)[0];

        //메뉴 노출
        console.log(lunckPick);
        elem.innerHTML = lunckPick;

        //reset 되었을 경우에 숨겨진 메뉴를 다시 노출시킴
        if (resetNum == 0) {
            elem.style.display = "block";
        }
    }
}

//reset 함수선언
function reset() {
    //메뉴 숨기기
    elem.style.display = "none";

    //슬롯애니메이션 노출
    displaySlot.style.display = "block";

    //resetNum으로 reset여부를 구분하기 위해 0 할당
    resetNum = 0;
}