# 구매 URL
구매내역 조회 :
  URL: '/api/purchaseHistory/query'
  파라미터 : 주문자명(ordererName) (주문자 닉네임..)

# 장바구니 URL
장바구니 조회 :
  URL: '/api/basket/query'
  파라미터 : 유저 아이디

장바구니 삽입 : 
  URL: '/api/basket/insert'
  파라미터: 회사코드(corpCd), 상품코드(itemCd), 판매가(salePrc), 유통기한(itemExpdate), 유저아이디(userId), 구매상태(purchaseSt, 구매전이 디폴트), 상품수량(itemQty), 상품명(itemNm)            

장바구니 수정 :
  URL: '/api/basket/update'
  파라미터: 회사코드(corpCd), 유저아이디(userId), 상품코드(itemCd), 상품수량(itemQty), 구매상태(purchaseSt)

장바구니 삭제 :
  URL: '/api/basket/delete'
  파라미터: 회사코드(corpCd), 유저아이디(userId), 상품코드(itemCd)

# 회원가입 URL
유저 정보 삽입 :
  URL: '/api/join/insert'
  파라미터 : 이름(userNm), 아이디(userId), 비밀번호(userPw), 닉네임(userNick), 주소(userAddr), 이메일(userEmail)

# 가맹점 URL
가맹점 등록 :
  URL: '/api/sellerReg/insert'
  파라미터: 회사코드(corpCd), 회사명(corpNm), 사업자등록번호(corpRegNo), 아이디(userId), 회사주소(corpAddr), 회사소개(corpDesc)

# 마이페이지
유저정보 조회: 
  URL: '/api/mypage/query'
  파라미터: 유저아이디(userId), 유저이름(userNm, 혹시 몰라서 넣어놨음)

유저정보 변경
  URL: '/api/mypage/changeUser'
  파라미터: 유저비밀번호(userPw), 닉네임(userNick), 이메일(userEmail), 주소(userAddr)

회원탈퇴
  URL: '/api/mypage/exit'
  파라미터: 유저아이디(userId), 유저이름(userNm, 혹시 몰라서 넣어놨음)

# 찜목록
찜목록 조회
  URL: '/api/wishList/query'
  파라미터: 유저아이디(userId), 회사코드(corpCd) 

찜목록 삽입
  URL: '/api/wishList/insert'
  파라미터: 유저아이디(userId), 회사코드(corpCd)  

찜목록 삭제
  URL: '/api/wishList/delete'
  파라미터: 유저아이디(userId), 회사코드(corpCd)

# 품목등록
품목 삽입
  URL: '/api/itemReg/insert'
  파라미터: 품목코드(itemCd), 회사코드(corpCd), 품목명(itemNm), 품목바코드품목바코드(itemBarcode), 품목가격(itemPrc) 사용여부(useYn)

품목 조회
  URL: '/api/itemReg/query'
  파라미터: 품목코드명(itemCdNm), 회사코드(corpCd), 품목바코드(itemBarcode)

# 메인페이지
주변 할인판매 업장
  URL: '/api/query/corp'
  파라미터: 유저아이디(userId), 유저 주소(userAddr), 현재 주소(curAddr)

주변 할인품목
  URL: '/api/query/item'
  파라미터: 유저아이디(userId), 유저 주소(userAddr), 현재 주소(curAddr)

# 대시보드
매출액 조회
  URL: '/api/dashboard/selling'
  파라미터: 회사코드(corpCd), 조회시작일(frDt), 조회종료일(toDt)

QnA리스트 조회
  URL: '/api/dashboard/qnaList'
  파라미터: 회사코드(corpCd)

QnA상세내용 조회
  URL: '/api/dashboard/qnaDetail'
  파라미터: 문의번호(QnaNo) 회사코드(corpCd)

QnA답변작성
  URL: '/api/dashboard/updateQnaAns'
  파라미터: 회사코드(corpCd), 문의답변(qnaAns), 문의번호(QnaNo), 문의상태(qnaSt, '답변완료'로 고정할 것)

# 관리자페이지
문의 조회
  URL: '/api/admin/qna/query'
  파라미터: 조회개수(limitNum 관리자 메인페이지에서 문의내역을 몇개 가져올지에 대한 변수, 필수아님)

문의 상세조회
  URL: '/api/admin/qna/detail'
  파라미터: 문의번호(qnaNo)

문의 답변달기
  URL: '/api/admin/qna/update'
  파라미터: 문의번호(qnaNo), 문의답변(qnaAns), 문의상태(qnaSt, '답변완료'로 고정할 것)
신고 조회
  URL: '/api/admin/report/query'
  파라미터: 조회개수(limitNum 관리자 메인페이지에서 신고내역을 몇개 가져올지에 대한 변수, 필수아님)

신고 상세 조회
  URL: '/api/admin/report/detail'
  파라미터: 신고번호(reportNo)

공지 조회
  URL: '/api/admin/notice/query'
  파라미터: 조회개수(limitNum 관리자 메인페이지에서 공지내역을 몇개 가져올지에 대한 변수, 필수아님)

공지 상세조회
  URL: '/api/admin/notice/detail'
  파라미터: 공지번호(noticeNo)

공지 작성
  URL: '/api/admin/notice/insert'
  파라미터: 공지번호(noticeNo), 공지제목(noticeTit), 공지내용(noticeTxt), 공지시작일(noticeTodt), 공지종료일(noticeFrdt), 공지타입(noticeTp, 판매자공지일경우 '판매자', 전체일 경우 '전체')

공지 수정
  URL: '/api/admin/notice/update'
  파라미터: 공지번호(noticeNo), 공지제목(noticeTit), 공지내용(noticeTxt), 공지시작일(noticeTodt), 공지종료일(noticeFrdt), 공지타입(noticeTp, 판매자공지일경우 '판매자', 전체일 경우 '전체')

# 상품등록
상품 등록
  URL: '/api/goodsReg/insert'
  파라미터: 회사코드(corpCd), 제품코드(itemCd), 할인율(discountRat), 판매가(salePrc), 판매개수(saleAmt), 유통기한(itemExpdate), 바코드(itemBarcode, 필수아님)

상품 수정
  URL: '/api/goodsReg/update'
  파라미터: 회사코드(corpCd), 제품코드(itemCd), 할인율(discountRat), 판매가(salePrc), 판매개수(saleAmt), 바코드(itemBarcode, 필수아님)

상품 삭제
  URL: '/api/goodsReg/delete'
  파라미터: 회사코드(corpCd), 제품코드(itemCd)

상품 조회
  URL: '/api/goodsReg/query'
  파라미터: 회사코드(corpCd), 제품코드및이름(itemCdNm, 검색기능 사용시 사용하는 파라미터)
```
// 회원가입 예시 테스트코드
import { ApiUtils } from './views/common/utils/ApiUtils';

const apiUtils = new ApiUtils;

interface UserInfo {
  userNm: string
  userId: string
  userPw: string
  userEmail: string
  userNick: string
  userAddr: string
}

const testData: UserInfo = {
  userNm: '테스트이름2',
  userId: 'testID2',
  userPw: 'testPW2',
  userEmail: 'testemail@gmail.com',
  userNick: 'testNick2',
  userAddr: 'testADDR'
}

join(testData)

async function join(param: UserInfo) {
  const result = await apiUtils.post('/api/join/insert', testData)
  if(result === 1) {
    console.log('회원가입 성공')
  }else {
    console.log('회원가입 실패')
  }
}

// 가맹점등록 예시 코드
import { ApiUtils } from './views/common/utils/ApiUtils';

const apiUtils = new ApiUtils;

interface CorpInfo {
  corpCd: string
  corpNm: string
  corpRegNo: string
  userId: string
  corpAddr: string
  corpDesc: string
}

const testData: CorpInfo = {
  corpCd: '테스트가맹점코드',
  corpNm: '테스트가맹점',
  corpRegNo: '123-45-67890',
  userId: 'testID2',
  corpAddr: '테스트가맹점주소',
  corpDesc: '테스트가맹점소개'
}

join(testData)

async function join(param: CorpInfo) {
  console.log(param)
  const result = await apiUtils.post('/api/sellerReg/insert', param)
  if(result === 1) {
    console.log('가맹점가입 성공')
  }else {
    console.log('가맹점가입 실패')
  }
}
```