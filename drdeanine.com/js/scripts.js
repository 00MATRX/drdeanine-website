/* js/scripts.js */
function openChatbot() {
    alert('AI Chatbot: How can I help with your wellness?'); // Placeholder
}

function filterPosts(category) {
    // Stub: Filter blog posts
    document.querySelectorAll('#blog-posts > div').forEach(post => {
        post.style.display = post.dataset.category === category ? 'block' : 'none';
    });
}

// Quiz example in Resources
function runQuiz() {
    let score = prompt('Adrenal fatigue level (1-10)?');
    if (score > 5) window.location = '/services/adrenal-fatigue.html';
}