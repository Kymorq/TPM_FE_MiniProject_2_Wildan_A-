const skillInput = document.getElementById('skill-input');
const addSkillBtn = document.getElementById('add-skill-btn');
const skillsList = document.getElementById('skills-list');

addSkillBtn.addEventListener('click', () => {
  const skill = skillInput.value.trim(); 
  if (skill) {
    addSkill(skill);
    skillInput.value = ''; 
  }
});

function addSkill(skill) {
  const skillItem = document.createElement('div');
  skillItem.classList.add('skill-item'); // Class for individual skill item

  const skillText = document.createElement('span');
  skillText.textContent = skill;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'x';
  deleteBtn.classList.add('delete-btn'); // Class for delete button

  deleteBtn.addEventListener('click', () => {
    skillsList.removeChild(skillItem);
  });

  skillItem.appendChild(skillText);
  skillItem.appendChild(deleteBtn);

  skillsList.appendChild(skillItem);
}
