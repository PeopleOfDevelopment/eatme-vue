# 구매내역 URL
구매내역 조회 :
  URL: '/api/purchaseHistory/query'
  파라미터 : 주문자명 (주문자 닉네임..)

# 회원가입 URL
유저 정보 삽입 :
  URL: '/api/join/insert'
  파라미터 : 이름, 아이디, 비밀번호, 닉네임, 주소, 이메일

// 예시 테스트코드
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