// Additional info
const additInfo = document.querySelector('.additional-info');
const additInfoText = document.querySelector('.additional-info-text');
const spanTexts = document.querySelectorAll('.soft-skills-heading');
const parSkills = document.querySelectorAll('.p-skills');
const closeSkillsBtn = document.querySelector('.skills-info-close-btn');
const softSkillsSection = document.querySelector('.soft-skills');
const overlaySkills = document.querySelector('.overlay-skills');

// Attach click event to each element with class '.soft-skills-heading'
Array.from(spanTexts).forEach(spanText => {
    spanText.addEventListener('click', () => {
        overlaySkills.style.display = 'block';
        // Toggle visibility of additInfo
        additInfo.style.visibility = (additInfo.style.visibility === 'visible') ? 'hidden' : 'visible';

        const a = document.createElement('a');
        a.href = 'https://www.linkedin.com/in/petar-mitrevichin/details/recommendations/';
        a.target = 'blank';
        a.textContent = 'Check recommendations.'
        a.classList.add('a-skills');

        additInfo.appendChild(a);

        if (spanText.classList.contains('info1')) {
            additInfoText.textContent = `Throughout my career path, teamwork has always been a key factor in my progress. Whether leading a restaurant team, joining strategic planning sessions, or adapting to challenges at KLEAR, I've worked seamlessly with diverse teams. `;

        } else if (spanText.classList.contains('info2')) {
            additInfoText.textContent = `I excel on the front line, where effective communication, a second nature to me, ensures clarity in explaining plans to clients, partners, and team members, facilitating smooth collaboration and successful project outcomes.`;

        } else if (spanText.classList.contains('info3')) {
            additInfoText.textContent = `
            With varied job experiences, I excel in adaptability, smoothly transitioning between creating marketing plans and assisting clients, showcasing the ability to adjust, identify opportunities, and contribute positively in diverse workplaces.`;

        } else if (spanText.classList.contains('info4')) {
            additInfoText.textContent = `In diverse roles, my central focus has been proactive problem-solving, including analyzing marketing campaigns, addressing client advising issues at KLEAR, and leading a restaurant team.`;

        } else if (spanText.classList.contains('info5')) {
            additInfoText.textContent = `
            I demonstrate curiosity and enthusiasm for learning through diverse experiences, implementing creative solutions as an assistant event planner, and developing engaging programs as a museum educator to inspire diverse audiences.`;

            a.href = 'https://drive.google.com/file/d/1hYnQJyQGQDdD3dFweLdDTCZnAl7FX7lZ/view?usp=drive_link';

        } else if (spanText.classList.contains('info6')) {
            additInfoText.textContent = `In my career, I've embraced diverse challenges with an open mind, exploring various jobs and industries, fostering not only adaptation to new environments but also the sharing of diverse ideas in planning sessions.`;

        } else if (spanText.classList.contains('info7')) {
            additInfoText.textContent = `
            Managing a team of 18 in a restaurant, I delved into people management, excelling in recruiting, training, and motivating staff, contributing significantly to achieving a historic first-place rating in the annual clients' survey.`;

        } else if (spanText.classList.contains('info8')) {
            additInfoText.textContent = `Apart from leading teams, I'm good at managing my time, which has been really important in fast-paced situations. Whether I'm working on marketing plans, joining planning meetings, or setting up events, I always make sure to use my time well.`;
        }

    });
});

closeSkillsBtn.addEventListener('click', () => {
    additInfo.style.visibility = 'hidden';
    overlaySkills.style.display = 'none';
});