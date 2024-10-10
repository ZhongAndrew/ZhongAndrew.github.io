function submitQuiz() {
    const questions = document.querySelectorAll('.question');
    let score = 0;
    let allAnswered = true; // 定義變數

    // 定義每個問題的正確答案
    const correctAnswers = ['q1-2', 'q2-2', 'q3-2', 'q4-2', 'q5-2', 'q6-2', 'q7-2', 'q8-1', 'q9-2', 'q10-2'];

    questions.forEach((question, index) => {
        const selectedOption = question.querySelector('input[name="q' + (index + 1) + '"]:checked');
        if (selectedOption) {
            // 檢查選擇的答案是否正確
            if (selectedOption.id === correctAnswers[index]) {
                score += 10; // 每題10分
            }
        } else {
            allAnswered = false;
        }
    });

    if (!allAnswered) {
        alert('還有題目未完成，請完成後再提交!');
        return;
    }

    let result = '';
    if (score >= 80) {
        result = '太棒了，恭喜獲得高成績!';
    } else if (score >= 60) {
        result = '恭喜及格!';
    } else {
        result = '請再加油!';
    }

    document.getElementById('result').innerText = '您的得分是：' + score + '。' + result;

    // 公布正確答案
    let correctAnswersText = '正確答案如下：\n';
    correctAnswersText += '1. 認知、生理功能、思考及行為\n';
    correctAnswersText += '2. 持續治療和保持健康的生活方式\n';
    correctAnswersText += '3. 突如其來的強烈恐懼感，通常無實際威脅\n';
    correctAnswersText += '4. 社交回避\n';
    correctAnswersText += '5. 重複檢查門窗是否關好\n';
    correctAnswersText += '6. 創傷事件的經驗再現\n';
    correctAnswersText += '7. 心理治療\n';
    correctAnswersText += '8. 過度自信和睡眠需求減少\n';
    correctAnswersText += '9. 深呼吸和肌肉放鬆技術\n';
    correctAnswersText += '10. 藥物治療與心理社會治療相結合\n';

    alert('您的得分是：' + score + '。\n' + result + '\n\n' + correctAnswersText);

    // 禁用所有選項
    questions.forEach((question) => {
        const options = question.querySelectorAll('input[type="radio"]');
        options.forEach((option) => {
            option.disabled = true;
        });
    });

    // 顯示重置按鈕
    document.getElementById('resetButton').style.display = 'block';
}

function resetQuiz() {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question) => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            selectedOption.checked = false;
        }
    });
    document.getElementById('result').innerText = '';
    // 隱藏重置按鈕
    document.getElementById('resetButton').style.display = 'none';

    // 重新啟用所有選項
    questions.forEach((question) => {
        const options = question.querySelectorAll('input[type="radio"]');
        options.forEach((option) => {
            option.disabled = false;
        });
    });
}

// 新增取消選中功能
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener('click', function(event) {
        if (this.wasChecked) {
            this.checked = false;
            this.wasChecked = false;
        } else {
            this.wasChecked = true;
        }
    });
});

function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    if (menuItems.style.display === 'block') {
        menuItems.style.display = 'none';
    } else {
        menuItems.style.display = 'block';
    }
}




