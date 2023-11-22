import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

const Sign = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age,setAge] = useState('');
  const [gender,setGender] = useState('');
  const [prefer,setPrefer] = useState('');

  const [showModal, setShowModal] = useState(false); // 모달 표시 여부 상태 변수

  const handleSubmit = async (e) => {
    e.preventDefault();
     // 회원 정보 객체 생성
    const memberInfo = {
      name: username,
      email: email,
      password: password,
      gender: gender,
      age: age,
      prefer: prefer
    };

    try {
      // 서버에 회원 정보 전달
      const response = await axios.post('서버 URL', memberInfo);

      // 회원 가입 성공 시 처리 로직
      console.log('회원 가입 성공:', response.data);
    } catch (error) {
      // 회원 가입 실패 시 처리 로직
      console.log({username, email, password, gender, age , prefer});
      console.error('회원 가입 실패:', error);
      setUsername('');
      setEmail('');
      setPassword('');
      setGender('');
      setAge('');
      setPrefer('')
      setShowModal(true); // 모달 표시
    }
  };

  const closeModal = () => {
    setShowModal(false); // 모달 닫기
  };


  return (
    <div>
      <fieldset className="Sign_area">
    <form className="Sign_form" onSubmit={handleSubmit}>
      <label>
        사용자명:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label>
        이메일:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>
        비밀번호:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <label>나이:</label>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} /> 
      <br />
      <label>
        성별:
        <label>
          <input type="radio" name="gender" value="남성" checked={gender === '남성'} onChange={(e) => setGender(e.target.value)} /> 남성</label>
        <label>
          <input type="radio" name="gender" value="여성" checked={gender === '여성'} onChange={(e) => setGender(e.target.value)} /> 여성</label>
      </label>
      <br />
      <label>
        집안일, 휴식, 활동적인 일 중 선호하는 것을 선택하세요:
        <select value={prefer} onChange={(e) => setPrefer(e.target.value)}>
          <option value="">선택해주세요</option>
          <option value="집안일">집안일</option>
          <option value="휴식">휴식</option>
          <option value="활동적인 일">활동적인 일</option>
        </select>
      </label>
      <br />

      {showModal && ( // 모달 표시 여부에 따라 모달 렌더링
        <div className="modal">
          <div className="modal-content">
            <p>가입에 실패했습니다! 다시 시도해주세요.</p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}

      <button type="submit">가입하기</button>
    </form>
    </fieldset>
    </div>
  );
};

export default Sign;