# 구매 URL
구매내역 조회 :
  URL: '/api/purchaseHistory/query'
  파라미터 : 주문자명 (주문자 닉네임..)

# 장바구니 URL
장바구니 조회 :
  URL: '/api/basket/query'
  파라미터 : 유저 아이디

장바구니 삽입 : 
  URL: '/api/basket/insert'
  파라미터: 회사코드, 상품코드, 판매가, 유통기한, 유저아이디, 구매상태(구매전, 구매후 등등..), 상품 수량, 상품명

장바구니 수정 :
  URL: '/api/basket/update'
  파라미터: 회사코드, 유저아이디, 상품코드, 상품수량

장바구니 삭제 :
  URL: '/api/basket/delete'
  파라미터: 회사코드, 유저아이디, 상품코드


# 회원가입 URL
유저 정보 삽입 :
  URL: '/api/join/insert'
  파라미터 : 이름, 아이디, 비밀번호, 닉네임, 주소, 이메일

# 가맹점 URL
가맹점 등록 :
  URL: '/api/sellerReg/insert'
  파라미터: 회사코드, 회사명, 사업자등록번호, 아이디, 회사주소, 회사소개

# 마이페이지
유저정보 조회: 
  URL: '/api/mypage/query'
  파라미터: 유저아이디, 유저이름(혹시 몰라서 넣어놨음)

유저정보 변경
  URL: '/api/mypage/changeUser'
  파라미터: 유저비밀번호, 닉네임, 이메일, 주소

회원탈퇴
  URL: '/api/mypage/exit'
  파라미터: 유저아이디, 유저이름(혹시 몰라서 넣어놨음)

# 찜목록
찜목록 조회
  URL: '/api/wishList/query'
  파라미터: 유저아이디, 회사코드  

찜목록 삽입
  URL: '/api/wishList/insert'
  파라미터: 유저아이디, 회사코드  

찜목록 삭제
  URL: '/api/wishList/delete'
  파라미터: 유저아이디, 회사코드 

# 품목등록
품목 삽입
  URL: '/api/itemReg/insert'
  파라미터: 품목코드, 회사코드, 품목명, 품목바코드, 품목가격 사용여부(true로 넣어서 보낼것)

품목 조회
  URL: '/api/itemReg/query'
  파라미터: 품목코드명(itemCdNm), 회사코드, 품목바코드


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