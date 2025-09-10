// 导航菜单切换
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// 聊天功能
const chatMessages = document.querySelector('.chat-messages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// 模拟AI回复
const aiResponses = [
    "这是一个很好的问题！让我思考一下...",
    "基于我的分析，我认为有几个关键点需要考虑...",
    "从多个角度来看，这个问题可以这样理解...",
    "根据现有数据，我的建议是...",
    "深入研究后，我发现了一些有趣的模式...",
    "让我帮你分析这个问题的不同方面...",
    "基于深度思考，我得出以下结论..."
];

function getRandomResponse() {
    return aiResponses[Math.floor(Math.random() * aiResponses.length)];
}

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'ai-message');
    
    const avatarDiv = document.createElement('div');
    avatarDiv.classList.add('message-avatar');
    avatarDiv.textContent = isUser ? '你' : 'AI';
    
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    
    contentDiv.appendChild(paragraph);
    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);
    
    chatMessages.appendChild(messageDiv);
    
    // 滚动到底部
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleSendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, true);
        userInput.value = '';
        
        // 模拟AI思考
        setTimeout(() => {
            addMessage(getRandomResponse());
        }, 1000);
    }
}

sendButton.addEventListener('click', handleSendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSendMessage();
    }
});

// 滚动动画
function revealOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .section-title');
    
    elements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// 初始调用一次
revealOnScroll();

// 监听滚动事件
window.addEventListener('scroll', revealOnScroll);

// 按钮点击效果
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = '';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});

// 页面加载效果
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});