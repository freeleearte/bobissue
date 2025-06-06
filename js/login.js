$(function () {
    // 회원 리스트: 아이디, 비밀번호, 이름
    const members = [
        { id: 'admin1', pw: 'admin1', name: '김말숙' },
        { id: 'admin2', pw: 'admin2', name: '이국밥' },
        { id: 'admin3', pw: 'admin3', name: '박키트' },
        { id: 'admin4', pw: 'admin4', name: '...' }
    ];

    $('#loginBtn').on('click', function () {
        const userId = $('.input_sec input[type="text"]').val();
        const userPw = $('.input_sec input[type="password"]').val();

        // 입력한 아이디/비밀번호와 일치하는 회원 찾기
        const found = members.find(member => member.id === userId && member.pw === userPw);

        if (found) {
            // 로그인 상태 및 이름 저장
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userId', found.id);
            localStorage.setItem('userName', found.name);

            alert(`${found.name}님, 로그인 성공!`);
            location.href = 'index.html';
        } else {
            alert('아이디 또는 비밀번호가 틀렸습니다.');
        }
    });
});
