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

        if (spanText.classList.contains('info1')) {
            additInfoText.textContent = '11111111111111';
        } else if (spanText.classList.contains('info2')) {
            additInfoText.textContent = '22222222222222222';
        } else if (spanText.classList.contains('info3')) {
            additInfoText.textContent = '333333333333333333';
        } else if (spanText.classList.contains('info4')) {
            additInfoText.textContent = '44444444444444444444';
        } else if (spanText.classList.contains('info5')) {
            additInfoText.textContent = '55555555555555555555';
        } else if (spanText.classList.contains('info6')) {
            additInfoText.textContent = '666666666666666';
        } else if (spanText.classList.contains('info7')) {
            additInfoText.textContent = '77777777777777777';
        } else if (spanText.classList.contains('info8')) {
            additInfoText.textContent = '8888888888888888';
        }

    });
});

closeSkillsBtn.addEventListener('click', () => {
    additInfo.style.visibility = 'hidden';
    overlaySkills.style.display = 'none';
});