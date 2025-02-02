document.getElementById('schedule-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const postContent = document.getElementById('post-content').value;
    const scheduleTime = document.getElementById('schedule-time').value;

    if (!postContent || !scheduleTime) {
        alert('Please fill out all fields.');
        return;
    }

    // Here you would typically send the data to a server or handle it as needed
    console.log('Post Content:', postContent);
    console.log('Scheduled Time:', scheduleTime);

    // Update the preview
    document.getElementById('preview-content').innerText = postContent;
});