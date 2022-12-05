# 에슐랭 PROJECT

## 역할 분담  
- **최유탁**  
  * 오픈소스를 이용한 JS 기능 구현
    * 식당 정보 스크롤 구현
    * 랜덤 식당 추천 기능 구현
  * 자료조사 : 제휴업체(디대, 약대)  
  * 담당 페이지
    * 랜덤 페이지
    * 식당 정보 페이지 
 
- **김영택**  
  * 식당 리스트 구분(한식, 양식, 중식 등 ...)  
  * 자료 전체 취합(제휴 정리 최종, 밥집리스트 파일)
  * 자료조사 : 제휴업체(공대, 과기대, 언정대, 경상대)
  * 담당 페이지
     * 제휴 정보 페이지

- **고영준**  
  * 데모 페이지 제작  
  * 전반적인 디자인(페이지 상 하단, 로고 디자인)  
  * 자료조사 : 제휴업체(소융대, 국문대)  
  * 담당 페이지
     * 메인 페이지
     * 웹 소개 페이지

## 페이지 소개  
- ### 제휴 페이지    
   ![image](https://user-images.githubusercontent.com/114565362/205628735-d5536bf5-f5b5-40f8-855e-85916e5a5544.png)

이 페이지는 저희 학교 단과대별 제휴 정보를 소개해주는 페이지입니다.  
구성원 별로 단과대 제휴업체를 아래와 같이 나누어서 정리했습니다.  

>김영택(공대, 과기대, 언정대, 경상대)  
고영준(소융대, 국문대)  
최유탁(디대, 약대)  

위에 정리된 자료를 통해 제휴 정리 1, 2 엑셀 파일을 만들었습니다.  
각 단과대별 밑에 있는 제휴 확인 버튼을 누르면 위에 정리된 엑셀 파일을 통해 제휴 정보를 확인 할 수 있습니다.

* * *  
- ### 식당 정보 페이지  
   ![image](https://user-images.githubusercontent.com/114565362/205629933-3cb715ba-b3c4-491a-8bf9-c32248d59260.png)

이 페이지는 한양대학교 에리카 주변 식당 정보를 보여줍니다.   
https://github.com/JangDongHo - eatGNU Repository에서 코드를 참조하였습니다.  
이 코드의 출처는 https://freecountercode.com 입니다.

밥집 리스트 excel 파일로 정리된 파일을 이용하여 각 식당에 맞는 이미지와 한 줄 소개를 작성하였습니다.  
필터 기능을 사용하여 음식을 한식, 중식, 일식, 양식, 분식, 등으로 분류 시켰습니다.  
또한 오른쪽 하단의 화살표 버튼을 추가하여 CSS 파일을 만들어 자연스러운 스크롤 기능을 넣었습니다.  

* * *  
- ### 랜덤 페이지  
   ![image](https://user-images.githubusercontent.com/114565362/205630638-46bcfbdd-76e8-43ce-8dfb-8da3ea46c177.png)  
<pre>
<code>
let RestaurantList = ["바비든든","뉴욕버거","이모네","알촌","도스마스","정직유부","은화수식당","포지타노","31.7","명가떡볶이","유메식당","유가네 닭갈비","밀플랜비","찌개찌개","성북동 경양식","한그릇","브라운 돈까스",
                 "마라미방","조가연 마라탕","써니샌드위치클럽","일미 닭갈비","디델리","한우궁","카바레 식당","이서 식당","소담골","투파인드피터","페퍼로니버튼","육앤샤","돼지우리", "기찬고기","포냐향","천사곱창",
                 "작렬곱창","앤의식탁","토마토 도시락","더빱집","청춘막회","청학 칡냉면","큰맘할매순대국","조박사 부대찌개","대학통닭","오븐에 빠진 닭","THE 치킨","미쳐버린 파닭","홀릭핫도그","탐나는 바지락 손칼국수",
                 "상황 삼계탕","밀숲","Vertex","BHC","타코선생의 라떼는 말이야","교반","유원치킨","참새방앗간","신전떡볶이","91콩삼", "고기짬"]
let firstRestaurantList = [];

RestaurantList.forEach(function(item) { // 배열 순회
    firstRestaurantList.push(item); // push를 통해 빈 배열에 하나씩 담기
});

//제어할 요소선택 후 변수에 담기
let displaySlot = document.querySelector(".menu_slot"); //menu slot
let elem = document.querySelector(".menu_print > h2"); //menu print

//reset check
let resetNum = 1;

function RestaurantIs() {
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

        //shuffle 메소드를 사용하여 섞은 배열에서 index[0]을 가져오기
        console.log(shuffle(RestaurantList)); // 랜덤 섞기
        let RestaurantPick = shuffle(RestaurantList)[0]; // 섞은 배열에서 하나 출력하기

        //메뉴 노출
        console.log(RestaurantPick);
        elem.innerHTML = RestaurantPick;

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
</code>
</pre>
   
이 페이지는 랜덤으로 식당을 추천해주는 기능을 넣은 페이지입니다.  

위 사진은 html을 사용하여 띄운 페이지입니다.   

아래의 코드는 랜덤으로 식당을 뽑을 수 있도록 만든 코드입니다.  

- Pick menu 버튼을 누르면 밥집 리스트에 저장되어 있는 밥집 중 하나를 랜덤으로 뽑아줍니다.  
- Reset 버튼은 초기 화면으로 되돌려줍니다.  
- 사용자의 편의를 위해서 Home 버튼을 누르게 되면 메인 페이지로 이동하게끔 만들었습니다.

* * *  
- ### 메인 페이지
   ![image](https://user-images.githubusercontent.com/114565362/205632228-194ed9a9-d901-4c12-b48f-970df3b84982.png)
   
이 페이지는 에슐랭의 메인 페이지입니다.  

아래 4개의 페이지로 이동할수 있습니다.  

- **랜덤 페이지**  
Random Recommandation에서 Random Restaurant 버튼을 누르면 랜덤 식당 추천 기능을 사용할 수 있는 사이트로 이동합니다.  

- **식당 정보 페이지**   
Restaurant Information에서 “Click here!” 버튼을 누르게 되면 식당 정보를 확인할 수 있는 사이트로 이동합니다.   

- **제휴 정보 페이지**  
Affiliation Information에서 각 단과대에서 제휴 확이 버튼을 누르게 되면 바로 단과대별 제휴 업체가 정리된 사이트로 이동합니다.  

- **웹 소개 페이지**  
Introduce About us & Our website에서 About us에는 팀원들의 이름, 학번, 이메일, 깃 허브 주소가 명시되어 있습니다.  
가운데에는 저희 웹사이트 로고가 그려져 있습니다.  
Our Website에는 저희 웹사이트에 대한 설명이 들어가 있습니다.   

   
